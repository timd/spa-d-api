import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { recommendations } from '@shared-utils/constants'
import { VerticalTimelineRelative } from '@shared-utils/components'
import { RecommendationsList, SectionDescription } from '@questionnaire/apps/QuestionnaireResults/components'
import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'

const RemcommendationsScreen = ({ t }) => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const answers = questionnaireState.buildAnswers()

  const currentPhase = answers?.processStage ?? 'marriage_crisis'
  const allPhasesKeys = Object.keys(recommendations)
  const currentPhaseIndex = allPhasesKeys.indexOf(currentPhase)
  const currentPhaseTitle = t(currentPhase)
  const nextPhaseTitle = t(allPhasesKeys[currentPhaseIndex + 1])

  const recommendationCheckpoints = [
    {
      id: 'current-phase',
      title: {
        en: currentPhaseTitle,
        de: t(currentPhaseTitle),
      },
      hideIndex: true,
    },
    {
      id: 'recommendations-list',
      CustomRender: () => (
        <Space ml={6}>
          <RecommendationsList isMobile processStage={currentPhase} />
        </Space>
      ),
    },
    {
      id: 'next-phase',
      title: {
        en: nextPhaseTitle,
        de: t(nextPhaseTitle),
      },
      hideIndex: true,
    },
  ]

  return (
    <Flex flexDirection='column'>
      <Typography color='dark-grey' variant='h3' textAlign='center'>
        {t('Our recommendations')}
      </Typography>
      <Space mt={4} px={2}>
        <SectionDescription
          color='dark-grey'
          firstRowPrefix={t('At your')}
          boldedText={`'${t(currentPhase)}'`}
          firstRowSuffix={`${t('phase')},`}
          bottomText={t('we recommend those following steps')}
        />
      </Space>
      <Space ml={1} mt={8}>
        <VerticalTimelineRelative activeIndex={0} checkpoints={recommendationCheckpoints} />
      </Space>
    </Flex>
  )
}

RemcommendationsScreen.propTypes = {
  t: PropTypes.func,
}

export default withTranslation()(RemcommendationsScreen)
