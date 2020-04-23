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
    config.module.rules = (config.module.rules || []).concat([addMarkdownLoader()])
    console.log(config.module.rules, { depth: 5 })
    // console.dir('got loaders: ', config.module.rules)
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
    ],
  }
}
