const fs = require('fs')
const path = require('path')
const { paths } = require('react-app-rewired')
const webpack = require('webpack')

module.exports = {
  webpack: function (config, env) {
    const absolutePaths = generateWebpackAliases()
    config.resolve.alias = {
      ...config.resolve.alias,
      ...absolutePaths,
      assets: path.resolve(paths.appPath, `${paths.appSrc}/app/assets`),
      '@kogaio': path.resolve(paths.appPath, 'node_modules/@ivoryio/kogaio'),
    }
    config.plugins = (config.plugins || []).concat([addDefinePlugin(env)])
    config.resolve.extensions = (config.resolve.extensions || []).concat(['.md'])
    addBeforeRule(config.module.rules, fileLoaderMatcher, addMarkdownLoader())
    return config
  },
  jest: function (config) {
    const mappedAliases = generateJestMappedDirs()
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      ...mappedAliases,
      '^@kogaio$': '<rootDir>/node_modules/@ivoryio/kogaio',
      '^@kogaio/(.*)$': '<rootDir>/node_modules/@ivoryio/kogaio/$1',
    }
    return config
  },
}

function generateWebpackAliases () {
  const modulesRoot = path.resolve(paths.appPath, `${paths.appSrc}/packages`)
  const aliases = fs.readdirSync(modulesRoot).reduce(
    (acc, folder) => ({
      ...acc,
      [`${folder}`]: path.resolve(paths.appPath, `${paths.appSrc}/packages/${folder}`),
    }),
    {}
  )
  return aliases
}

function generateJestMappedDirs () {
  const modulesRoot = path.resolve(paths.appPath, `${paths.appSrc}/packages`)

  const mappedDirs = fs.readdirSync(modulesRoot).reduce(
    (acc, folder) => ({
      ...acc,
      [`^${folder}$`]: `${paths.appSrc}/packages/${folder}`,
      [`^${folder}/(.*)$`]: `${paths.appSrc}/packages/${folder}/$1`,
    }),
    {}
  )
  return mappedDirs
}

function addDefinePlugin (env) {
  return new webpack.DefinePlugin({
    'config.MAILCHIMP_URL':
      env.MAILCHIMP_URL ||
      JSON.stringify(
        'https://finleap.us19.list-manage.com/subscribe/post?u=979577850ed7008dcd7b31f0d&amp;id=c79131ac6d'
      ),
  })
}

function addMarkdownLoader () {
  return {
    test: /\.md$/i,
    use: [
      {
        loader: 'raw-loader',
      },
      {
        loader: 'string-replace-loader',
        options: {
          search: '(---(.|\n)*---)',
          replace: '',
          flags: 'g',
        },
      },
    ],
  }
}

const ruleChildren = loader => loader.use || loader.oneOf || (Array.isArray(loader.loader) && loader.loader) || []

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined
  const rules = Array.isArray(rulesSource) ? rulesSource : ruleChildren(rulesSource)
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? {
            index,
            rules,
          }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  )
  return result
}

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1
const fileLoaderMatcher = createLoaderMatcher('file-loader')

const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher)
  rules.splice(index, 0, value)
}
