import React from 'react'
import { Flex, Space, Typography } from '@kogaio'

import { RecommendationsList, SectionDescription } from '.'

const OurRecommendations = props => (
  <Space py={14}>
    <Flex bg='questionnaireBg' flexDirection='column' width='100vw' {...props}>
      <Typography color='dark-grey' variant='h2' textAlign='center'>
        Our recommendations
      </Typography>
      <Space mt={4}>
        <SectionDescription
          color='dark-grey'
          firstRowPrefix='At your'
          boldedText="'Getting divorced'"
          firstRowSuffix='phase, we recommend those'
          bottomText='following steps'
        />
      </Space>
      <Space mx='auto' mt={6}>
          <RecommendationsList maxWidth={1080} />
      </Space>
    </Flex>
  </Space>
)

export default OurRecommendations
