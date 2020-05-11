import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { GetStarted, Footer, Questionnaire } from './components'

const QuestionnaireQuestions = () => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const questionId = questionnaireState.currentValue()?.questionId

  const [acceptedConditions, setAcceptedConditions] = useState({
    policy: false,
    termsAndConditions: false,
  })

  useEffect(() => {
    if (!acceptedConditions.policy && !acceptedConditions.termsAndConditions && questionId !== undefined) {
      questionnaireState.clear()
    }
  }, [acceptedConditions, questionId, questionnaireState])

  const handleAcceptedCondititionsChange = key => () => {
    setAcceptedConditions(prevValue => ({
      ...prevValue,
      [key]: !prevValue[key],
    }))
  }

  return (
    <Space mx={{ xs: -4, md: -4 }} mt='1px' px={{ md: 4 }}>
      <Wrapper bg='questionnaireBg' minHeight='100vh'>
        <Space mt={{ md: 10 }}>
          {(questionId && acceptedConditions.policy && acceptedConditions.termsAndConditions) ? (
            <Questionnaire />
          ) : (
            <GetStarted acceptedConditions={acceptedConditions} toggleCheck={handleAcceptedCondititionsChange} />
          )}
        </Space>
        <Space px={2} py={{ xs: 8, md: 6 }}>
          <Footer />
        </Space>
      </Wrapper>
    </Space>
  )
}

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export default QuestionnaireQuestions
