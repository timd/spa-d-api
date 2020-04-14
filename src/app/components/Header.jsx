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
  width: 100%;
  justify-content: space-between;
  ${themed('LandingContainer')};
`

const AboutUsLink = styled(Link)`
  color: ${themeGet('colors.dark-grey')};
  font-family: ${themeGet('fonts.complementary')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
  text-decoration: none;
`

export default Header
