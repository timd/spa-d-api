import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'
import { Flex, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const Header = () => (
  <Space p={4}>
    <Flex alignItems='center' justifyContent='space-between'>
      <LandigLink
        as='a'
        fontSize={{ xs: 3, md: 4 }}
        onClick={e => {
          e.preventDefault()
          navigate('/')
        }}>
        Divorcy
      </LandigLink>
      <AboutUsLink to='about-us'>About us</AboutUsLink>
    </Flex>
  </Space>
)

const LandigLink = styled(Typography)`
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
