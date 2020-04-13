import React from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'
import Typography from '@ivoryio/kogaio/Typography'

const Features = () => (
  <Space p={4}>
    <Flex alignItems='center' justifyContent='space-between'>
      <Space>
        <Title fontSize={{ xs: 2, md: 3 }}>Why Divorcy?</Title>
        <Description>
          Money is unfortunately a big topic. With just a little information, we can estimate the one time and ongoing
          cost you have to bear or the alimony you receive.
        </Description>
      </Space>
      <Space>
        <form>
          <input type='email'></input>
          <button>Subscribe</button>
        </form>
      </Space>
    </Flex>
  </Space>
)

const Title = styled(Typography)`
  color: ${themeGet('colors.black')};
  font: ${themeGet('fonts.primary')};
  font-weight: ${themeGet('fontWeights.bold')};
`

const Description = styled(Typography)`
  color: ${themeGet('colors.black')};
  font-family: ${themeGet('fonts.complementary')};
`

export default Features
