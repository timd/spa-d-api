import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from '@reach/router'
import { Flex, Space } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { TextLogo } from '.'
import { withLocation } from 'app/services/navigation/withLocation'

const Header = ({ location: { pathname } }) => (
  <Space mx='auto' py={{ xs: 3, md: 6 }}>
    <Container pathname={pathname}>
      <TextLogo />
      {!pathname.includes('questionnaire') && <AboutUsLink to='about-us'>About us</AboutUsLink>}
    </Container>
  </Space>
)

const containerStyle = ({ pathname, ...props }) =>
  pathname.includes('questionnaire')
    ? css`
        box-shadow: 0px 1px 0px ${themeGet('colors.headerShadow')};
        justify-content: center;
        margin-left: -${themeGet('space.4')}px;
        padding-left: ${themeGet('space.4')}px;
        padding-right: ${themeGet('space.4')}px;
        // 32 comes for horizontal padding from router wrapper
        width: calc(100% + 32px);
      `
    : themed('LandingContainer')

const Container = styled(Flex)`
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${containerStyle};
`

const AboutUsLink = styled(Link)`
  color: ${themeGet('colors.dark-grey')};
  font-family: ${themeGet('fonts.complementary')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
  text-decoration: none;
`

Header.propTypes = {
  location: PropTypes.object,
}

export default withLocation(Header)
