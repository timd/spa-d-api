import React from 'react'
import { Flex, Hide, Space } from '@kogaio'

import { DivorcyForecast, DivorceJourney, WhatsNext } from './components'

const QuestionnaireResults = () => (
  <Flex flexDirection='column' alignItems='center' width={1}>
    <DivorcyForecast />
    <Space mt={10}>
      <DivorceJourney />
    </Space>
    <Hide md lg xlg>
      <Space mt={4}>
        <WhatsNext />
      </Space>
    </Hide>
  </Flex>
)

export default QuestionnaireResults
