import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Box, Button, Flex, Hide, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'
import { withTranslation } from 'react-i18next'

import { FeatureCard } from '.'
import { features } from '../constants'

const Features = ({ t }) => (
  <Space mx={-4} px={2} py={10}>
    <Flex flexDirection='column' alignItems='center' bg='feature-bg40'>
      <Typography textAlign='center' color='dark-grey' variant={{ xs: 'h3', md: 'h2' }}>
        {t('Why Divorcy?')}
      </Typography>
      <Space mt={4}>
        <FeatureCardsWrapper>
          {features.map(feature => (
            <Space key={feature.id} p={4}>
              <Box width={{ xs: 1, md: 1 / 3 }}>
                <FeatureCard
                  id={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Box>
            </Space>
          ))}
        </FeatureCardsWrapper>
      </Space>
      <Hide md lg>
        <Space mt={6}>
          <Button variant='outline' title={t('Get Started')} onClick={() => navigate('/questionnaire')} width={1} />
        </Space>
      </Hide>
    </Flex>
  </Space>
)

const FeatureCardsWrapper = styled(Flex)`
  flex-wrap: wrap;
  ${themed('LandingContainer')};
`
Features.propTypes = {
  t: PropTypes.func,
}
export default withTranslation()(Features)
