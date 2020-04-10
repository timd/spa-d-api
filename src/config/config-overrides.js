const fs = require('fs')
const path = require('path')
const { paths } = require('react-app-rewired')

module.exports = {
  webpack: function (config, env) {
    const absolutePaths = generateWebpackAliases()
    config.resolve.alias = {
      ...config.resolve.alias,
      ...absolutePaths,
      assets: path.resolve(paths.appPath, `${paths.appSrc}/app/assets`),
      '@kogaio': path.resolve(paths.appPath, 'node_modules/@ivoryio/kogaio')
    }
    return config
  },
  jest: function (config) {
    const mappedAliases = generateJestMappedDirs()
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      ...mappedAliases,
      '^@kogaio$': '<rootDir>/node_modules/@ivoryio/kogaio',
      '^@kogaio/(.*)$': '<rootDir>/node_modules/@ivoryio/kogaio/$1'
    }
    return config
  }
}

function generateWebpackAliases () {
  const modulesRoot = path.resolve(paths.appPath, `${paths.appSrc}/packages`)
  const aliases = fs.readdirSync(modulesRoot).reduce(
    (acc, folder) => ({
      ...acc,
      [`${folder}`]: path.resolve(
        paths.appPath,
        `${paths.appSrc}/packages/${folder}`
      )
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
      [`^${folder}/(.*)$`]: `${paths.appSrc}/packages/${folder}/$1`
    }),
    {}
  )
  return mappedDirs
}
