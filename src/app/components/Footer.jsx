import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Box, Flex, Space, Hide, Typography } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { TextLogo } from '.'

const Footer = () => (
  <Space px={{ xs: 4, md: 16 }} py={10} mx='auto'>
    <Container flexDirection={{ xs: 'column-reverse', md: 'row' }}>
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <Flex flexDirection='column'>
          <Hide xs sm>
            <TextLogo />
          </Hide>
          <Space mt={11}>
            <Flex justifyContent='space-between'>
              <MoreLink to='/imprint'>Imprint</MoreLink>
              <MoreLink to='/data-protection'>Data Protection</MoreLink>
              <MoreLink to='/conditions'>Conditions</MoreLink>
            </Flex>
          </Space>
        </Flex>
      </Box>
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <Flex flexDirection='column' textAlign={{ xs: 'center', md: 'right' }}>
          <Typography variant='sh3'>Contact</Typography>
          <Space pt={4}>
            <Typography variant='caption'>support@divorcy.org</Typography>
          </Space>
          <Space pt={4}>
            <Typography variant='caption'>Hardenbergstraße 32, 10623 Berlin</Typography>
          </Space>
        </Flex>
      </Box>
    </Container>
  </Space>
)

const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  ${themed('LandingContainer')};
`

const MoreLink = styled(Link)`
  color: ${themeGet('colors.dark-grey')};
  font-family: ${themeGet('fonts.complementary')};
  font-weight: ${themeGet('fontWeights.regular')};
  font-size: 12px;
  text-decoration: none;
  line-height: 16px;
`

export default Footer
