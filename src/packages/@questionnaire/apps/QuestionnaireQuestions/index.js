import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { GetStarted, Footer, Questionnaire } from './components'

const HEADER_HEIGHT_MD = 60

const QuestionnaireQuestions = () => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const questionId = questionnaireState.currentValue()?.questionId

  const [acceptedConditions, setAcceptedConditions] = useState({
    policy: false,
    termsAndConditions: false,
  })

  const handleAcceptedCondititionsChange = key => () => {
    setAcceptedConditions(prevValue => ({
      ...prevValue,
      [key]: !prevValue[key],
    }))
  }

  return (
    <Space mx={{ xs: -4, md: -4 }} mt='1px' px={{ xs: 6, md: 0 }}>
      <Wrapper bg={{ xs: 'white', md: 'questionnaireBg' }} height={{ md: `calc(100vh - ${HEADER_HEIGHT_MD}px)` }}>
        <Space mx={{ md: 4 }} mt={{ md: 10 }}>
          {questionId ? (
            <Questionnaire />
          ) : (
            <GetStarted acceptedConditions={acceptedConditions} toggleCheck={handleAcceptedCondititionsChange} />
          )}
        </Space>
        <Space px={2} py={6}>
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
