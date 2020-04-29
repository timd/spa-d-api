export const normalizeCamelCase = str =>
  str[0].toUpperCase() + str.slice(1).replace(/([a-z].*?)([A-Z].*?)/g, '$1 $2')
