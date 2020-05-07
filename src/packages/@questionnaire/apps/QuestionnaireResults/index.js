import React, { useContext } from 'react'
import { Flex, Hide, Space } from '@kogaio'

import { Footer } from 'app/components'
import { DivorcyForecast, DivorceJourney, OurRecommendations, WhatsNext } from './components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { calculateOneTimeFees, calculateRecurrentFees, logQuestionnaireAnswers } from '../../services'

const QuestionnaireResults = () => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const answers = questionnaireState.buildAnswers()

  const oneTimeCosts = calculateOneTimeFees({ ...answers }, 0)
  const ongoingCosts = calculateRecurrentFees(
    {
      netIncome: answers.personalNetIncome,
      childrenAges: answers.childrenAges?.filter(item => item !== undefined) ?? [],
    },
    0
  )

  logQuestionnaireAnswers(answers)

  questionnaireState.clear()

  return (
    <Flex flexDirection='column' alignItems='center' width={1}>
      <DivorcyForecast processStage={answers.processStage} costs={{ oneTimeCosts, ongoingCosts }} />
      <Space mt={10}>
        <DivorceJourney processStage={answers.processStage} />
      </Space>
      <Hide md lg xlg>
        <Space mt={4}>
          <WhatsNext />
        </Space>
      </Hide>
      <Hide xs sm>
        <Space mt={14}>
          <OurRecommendations processStage={answers.processStage} />
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
