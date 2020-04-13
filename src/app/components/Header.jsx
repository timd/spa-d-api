import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'
import { Flex, Space, Typography } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

const Header = () => (
  <Space px={4} mx='auto' py={4}>
    <Container>
      <LandingLink
        as='a'
        fontSize={{ xs: 3, md: 4 }}
        onClick={e => {
          e.preventDefault()
          navigate('/')
        }}>
        Divorcy
      </LandingLink>
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

const LandingLink = styled(Typography)`
  color: ${themeGet('colors.brand')};
  cursor: pointer;
  text-decoration: none;
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: ${themeGet('lineHeights.paragraph')};
`

const AboutUsLink = styled(Link)`
  text-decoration: none;
  color: ${themeGet('colors.dark-grey')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
`

export default Header
