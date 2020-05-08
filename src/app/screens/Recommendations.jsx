import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { VerticalTimeline } from '@shared-utils/components'
import { RecommendationsList, SectionDescription } from '@questionnaire/apps/QuestionnaireResults/components'
import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'


const recommendationCheckpoints = [
  {
    id: 'checkpoint-1',
    title: 'Getting Divorced',
    progress: 0,
  },
  {
    id: 'checkpoint-2',
    title: 'Being Divorced',
    progress: 1,
    collapseHeightMobile: 96,
  },
]

const RemcommendationsScreen = ({ t }) => {
  const { questionnaireState } = useContext(QuestionnaireContext)
  const answers = questionnaireState.buildAnswers()

  return (
  <Flex flexDirection='column'>
    <Typography color='dark-grey' variant='h3' textAlign='center'>
      {t('Our recommendations')}
    </Typography>
    <Space mt={4} px={2}>
      <SectionDescription
        color='dark-grey'
        firstRowPrefix={t('At your')}
        boldedText={`'${t('Getting divorced')}'`}
        firstRowSuffix={`${t('phase')},`}
        bottomText={t('we recommend those following steps')}
      />
    </Space>
    <Space ml={1} mt={8}>
      <Flex>
        <VerticalTimeline activeIndex={0} checkpoints={recommendationCheckpoints} height={400} />
        <Space ml={3} mt={4}>
          <RecommendationsList isMobile processStage={answers.processStage} />
        </Space>
      </Flex>
    </Space>
  </Flex>
)
  }

RemcommendationsScreen.propTypes = {
  t: PropTypes.func,
}

export default withTranslation()(RemcommendationsScreen)
