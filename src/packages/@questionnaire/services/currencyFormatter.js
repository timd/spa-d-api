export const localize = value => value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
export const normalize = value => value.replace(/\./g, '')
