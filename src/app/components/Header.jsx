import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Flex, Space } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { TextLogo } from '.'

const Header = () => (
  <Space mx='auto' py={{ xs: 3, md: 6 }}>
    <Container>
      <TextLogo />
      <AboutUsLink to='about-us'>About us</AboutUsLink>
    </Container>
  </Space>
)

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${themed('LandingContainer')};
`

const AboutUsLink = styled(Link)`
  text-decoration: none;
  color: ${themeGet('colors.dark-grey')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
`

export default Header
