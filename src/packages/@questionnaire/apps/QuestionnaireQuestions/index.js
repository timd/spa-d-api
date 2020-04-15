import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

import { GetStarted } from './components'

const HEADER_HEIGHT_MD = 60

const QuestionnaireQuestions = () => {
  const [acceptedConditions, setAcceptedConditions] = useState({
    policy: false,
    termsAndConditions: false,
  })

  const handleAcceptedCondititionsChange = key => ev => {
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
          <GetStarted acceptedConditions={acceptedConditions} toggleCheck={handleAcceptedCondititionsChange} />
        </Space>
      </Wrapper>
    </Space>
  )
}

const Wrapper = styled(Flex)``

export default QuestionnaireQuestions
