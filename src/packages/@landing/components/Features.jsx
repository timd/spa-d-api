import React from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'
import Typography from '@ivoryio/kogaio/Typography'

const Features = () => (
  <Space p={4}>
    <Title fontSize={{ xs: 3, md: 4 }}>Why Divorcy?</Title>
    <Flex>
      <article>
        <img url='' alt='' />
        <Name fontSize={{ xs: 2, md: 3 }}>Understanding</Name>
        <Desctiption>
          The reason for your divorce? That’s not our business. But to give you personalized recommendations, we need to
          understand your current situation with just a couple of clicks.
        </Desctiption>
      </article>
      <article>
        <img url='' alt='' />
        <Name fontSize={{ xs: 2, md: 3 }}>Calculating</Name>
        <Desctiption>
          Money is unfortunately a big topic. With just a little information, we can estimate the one time and ongoing
          cost you have to bear or the alimony you receive.
        </Desctiption>
      </article>
      <article>
        <img url='' alt='' />
        <Name fontSize={{ xs: 2, md: 3 }}>Action</Name>
        <Desctiption>Get your individual results incl. tailored recommendations and clear next steps.</Desctiption>
      </article>
    </Flex>
  </Space>
)

const Title = styled(Typography)`
  text-align: center;
  color: ${themeGet('colors.black')};
  font: ${themeGet('fonts.primary')};
  font-weight: ${themeGet('fontWeights.bold')};
`

const Name = styled(Typography)`
  color: ${themeGet('colors.black')};
  font-family: ${themeGet('fonts.primary')};
  font-weight: ${themeGet('fontWeights.bold')};
`

const Desctiption = styled(Typography)`
  color: ${themeGet('colors.black')};
  font-family: ${themeGet('fonts.complementary')};
`

export default Features
