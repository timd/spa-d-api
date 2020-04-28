import React from 'react'
import { Flex, Space, Typography } from '@kogaio'
import { VerticalTimeline } from '@shared-utils/components'
import { RecommendationsList, SectionDescription } from '@questionnaire/apps/QuestionnaireResults/components'

const recommendationCheckpoints = [
  {
    id: 'checkpoint-1',
    title: 'Getting Divorced',
    progress: 0,
    collapseHeightDesktop: {
      md: 96,
      lg: 136,
    },
  },
  {
    id: 'checkpoint-2',
    title: 'Being Divorced',
    progress: 1,
    collapseHeightDesktop: {
      md: 96,
      lg: 136,
    },
    collapseHeightMobile: 96,
  },
]

const RemcommendationsScreen = () => (
  <Flex flexDirection='column'>
    <Typography color='dark-grey' variant='h3' textAlign='center'>
      Our recommendations
    </Typography>
    <Space mt={4} px={2}>
      <SectionDescription
        color='dark-grey'
        firstRowPrefix='At your'
        boldedText="'Getting divorced'"
        firstRowSuffix='phase,'
        bottomText='we recommend those following steps'
      />
    </Space>
    <Space ml={1} mt={8}>
      <Flex>
        <VerticalTimeline activeIndex={0} checkpoints={recommendationCheckpoints} height={360} />
        <Space ml={3} mt={4}>
          <RecommendationsList isMobile />
        </Space>
      </Flex>
    </Space>
  </Flex>
)

export default RemcommendationsScreen
