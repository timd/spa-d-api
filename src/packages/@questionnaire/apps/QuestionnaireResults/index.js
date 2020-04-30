import React, { useContext } from 'react'
import { Flex, Hide, Space } from '@kogaio'

import { Footer } from 'app/components'
import { DivorcyForecast, DivorceJourney, OurRecommendations, WhatsNext } from './components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { calculateOneTimeFees } from 'app/services/FeesCalculator'

const QuestionnaireResults = () => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const answers = questionnaireState.buildAnswers()

  const oneTimeCosts = calculateOneTimeFees({ ...answers })

  console.log('Answers: ', answers)
  console.log('One time costs', oneTimeCosts)
  questionnaireState.clear()

  return (
    <Flex flexDirection='column' alignItems='center' width={1}>
      <DivorcyForecast costs={oneTimeCosts} />
      <Space mt={10}>
        <DivorceJourney />
      </Space>
      <Hide md lg xlg>
        <Space mt={4}>
          <WhatsNext />
        </Space>
      </Hide>
      <Hide xs sm>
        <Space mt={14}>
          <OurRecommendations />
        </Space>
      </Hide>
      <Hide xs sm>
        <Space mt={10}>
          <Footer />
        </Space>
      </Hide>
    </Flex>
  )
}

export default QuestionnaireResults
