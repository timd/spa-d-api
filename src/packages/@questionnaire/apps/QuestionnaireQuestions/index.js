import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { GetStarted, Questionnaire } from './components'

const HEADER_HEIGHT_MD = 60

const QuestionnaireQuestions = () => {
  const { currentQuestionId } = useContext(QuestionnaireContext)

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
    <Space mx={{ xs: 2, md: -4 }} mt='1px'>
      <Wrapper
        justifyContent='center'
        bg={{ xs: 'white', md: 'questionnaireBg' }}
        height={{ md: `calc(100vh - ${HEADER_HEIGHT_MD}px)` }}>
        <Space mx={{ md: 4 }} mt={{ md: 10 }}>
          {!currentQuestionId ? (
            <GetStarted acceptedConditions={acceptedConditions} toggleCheck={handleAcceptedCondititionsChange} />
          ) : (
            <Questionnaire />
          )}
        </Space>
      </Wrapper>
    </Space>
  )
}

const Wrapper = styled(Flex)``

export default QuestionnaireQuestions
