import React from 'react'
import { Flex, Space } from '@kogaio/Responsive'

import { DivorcyForecast, DivorceJourney } from './components'

const QuestionnaireResults = () => (
  <Flex flexDirection='column' alignItems='center' width={1}>
    <DivorcyForecast />
    <Space mt={10}>
    <DivorceJourney />
    </Space>
  </Flex>
)

export default QuestionnaireResults
