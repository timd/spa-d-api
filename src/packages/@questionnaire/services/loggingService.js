import { create } from 'apisauce'

const API_URL = process.env.REACT_APP_API_URL ?? 'https://9ygz3pyu45.execute-api.eu-central-1.amazonaws.com'
const API_KEY = process.env.REACT_APP_API_KEY ?? '9F4Eqr5ApE4HDlcIPaUvVMcqpH4flnONF5o6Eu40'

const isEmpty = data => JSON.stringify(data) === '{}'

export const logQuestionnaireAnswers = async data => {
  if (isEmpty(data)) {
    return
  }

  const api = create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  })

  return api.post('/prod/log', data)
}
