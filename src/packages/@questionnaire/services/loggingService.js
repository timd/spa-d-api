import { create } from 'apisauce'

const API_BASE_URL = process.env.API_BASE_URL ?? 'https://9ygz3pyu45.execute-api.eu-central-1.amazonaws.com'
const API_KEY = process.env.API_KEY ?? '9F4Eqr5ApE4HDlcIPaUvVMcqpH4flnONF5o6Eu40'

export const log = async data => {
  const api = create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  })

  const response = await api.post('/prod/log', data)
  console.log(data, response)
  return response
}
