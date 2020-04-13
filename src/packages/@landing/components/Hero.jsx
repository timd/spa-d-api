import React from 'react'
import styled from 'styled-components'
import { Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'
import Typography from '@ivoryio/kogaio/Typography'

const Hero = () => (
  <Space p={4}>
    <Title fontSize={{ xs: 4, md: 5 }}>Divorcy will help you plan and estimate the costs of your divorce</Title>
    <Description fontSize={{ xs: 1, md: 1 }}>
      Having a divorce sucks! Divorcy helps you make smart and swift decisions. Sou you can start focusing on your
      future - not your past!
    </Description>

    <a href='/'>Get started</a>
    <FootNote fontSize={{ xs: 1, md: 1 }}>* We use all information very discretly</FootNote>
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

const FootNote = styled(Typography)`
  color: ${themeGet('colors.black')};
  font-family: ${themeGet('fonts.complementary')};
`

export default Hero
