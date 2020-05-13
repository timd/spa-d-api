import { create } from 'apisauce'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

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

  return api.post('/prod/log/divorcy', data)
}
