import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Flex, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const Header = () => (
  <Space p={4}>
    <Flex justifyContent='space-between'>
      <LandigLink fontSize={{ xs: 4, md: 5 }} to='/'>
        Divorcy
      </LandigLink>
      <AboutUsLink to='about-us'>
        About us
      </AboutUsLink>
    </Flex>
  </Space>
)

const LandigLink = styled(Link)`
  color: ${themeGet('colors.brand')};
  text-decoration: none;
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: ${themeGet('lineHeights.paragraph')};
`

const AboutUsLink = styled(Link)`
  text-decoration: none;
  color: ${themeGet('colors.dark-grey')};
  font-size: ${themeGet('fontSizes.1')};
  line-height: ${themeGet('lineHeights.paragraph')};
`

export default Header
