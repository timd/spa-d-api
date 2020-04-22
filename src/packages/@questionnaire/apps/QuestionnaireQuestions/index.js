import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { GetStarted, Questionnaire } from './components'

const HEADER_HEIGHT_MD = 60

const QuestionnaireQuestions = () => {
  const { questionnaireState } = useContext(QuestionnaireContext)

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

  console.log(questionnaireState)

  return (
    <Space mx={{ xs: -4, md: -4 }} mt='1px' px={{ xs: 6, md: 0 }}>
      <Wrapper bg={{ xs: 'white', md: 'questionnaireBg' }} height={{ md: `calc(100vh - ${HEADER_HEIGHT_MD}px)` }}>
        <Space mx={{ md: 4 }} mt={{ md: 10 }}>
          {questionnaireState.currentQuestionId ? (
            <Questionnaire />
          ) : (
            <GetStarted acceptedConditions={acceptedConditions} toggleCheck={handleAcceptedCondititionsChange} />
          )}
        </Space>
      </Wrapper>
    </Space>
  )
}

const Wrapper = styled(Flex)`
  justify-content: center;
`

export default QuestionnaireQuestions
