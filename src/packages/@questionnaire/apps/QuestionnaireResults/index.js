import React from 'react'
import { Flex } from '@kogaio/Responsive'

import { DivorcyForecast } from './components'

const QuestionnaireResults = () => (
  <Flex flexDirection='column' alignItems='center' width={1}>
    <DivorcyForecast />
  </Flex>
)

export default QuestionnaireResults
