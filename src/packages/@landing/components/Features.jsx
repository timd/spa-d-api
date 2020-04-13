import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'
import { FeatureCard } from '.'

const features = [
  {
    id: 'understanding-card',
    icon: icons.understanding,
    title: 'Understanding',
    description:
      'The reason for your divorce? That’s not our business. But to give you personalized recommendations, we need to understand your current situation with just a couple of clicks.',
  },
  {
    id: 'calculating-card',
    icon: icons.calculating,
    title: 'Calculating',
    description:
      'Money is unfortunately a big topic. With just a little information, we can estimate the one time and ongoing cost you have to bear or the alimony you receive.',
  },
  {
    id: 'action-card',
    icon: icons.action,
    title: 'Action',
    description: 'Get your individual results incl. tailored recommendations and clear next steps.',
  },
]

const Features = () => (
  <Space mx={-4} px={3} py={10}>
    <Flex flexDirection='column' alignItems='center' bg='feature-bg'>
      <Typography textAlign='center' color='dark-grey' variant={{ xs: 'h3', md: 'h2' }}>
        Why Divorcy?
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
    </Flex>
  </Space>
)

const FeatureCardsWrapper = styled(Flex)`
  flex-wrap: wrap;
  ${themed('LandingContainer')};
`

export default Features
