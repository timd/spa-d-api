import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { RecommendationsList, SectionDescription } from '.'

const OurRecommendations = ({ t, ...props }) => (
  <Space py={14}>
    <Flex bg='questionnaireBg' flexDirection='column' width='100vw' {...props}>
      <Typography color='dark-grey' variant='h2' textAlign='center'>
        {t('Our recommendations')}
      </Typography>
      <Space mt={4}>
        <SectionDescription
          color='dark-grey'
          firstRowPrefix={t('At your')}
          boldedText={`'${t('Getting divorced')}'`}
          firstRowSuffix={t('phase, we recommend those')}
          bottomText={t('following steps')}
        />
      </Space>
      <Space mx='auto' mt={6}>
        <RecommendationsList maxWidth={1080} />
      </Space>
    </Flex>
  </Space>
)

OurRecommendations.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(OurRecommendations)
