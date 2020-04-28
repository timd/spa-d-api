import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from '@reach/router'
import styled, { css } from 'styled-components'
import { Flex, Space } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'
import { withTranslation } from 'react-i18next'

import { TouchableWithIcon } from '@shared-utils/components'
import { TextLogo } from '.'
import { withLocation } from 'app/services/navigation/withLocation'

const Header = ({ location: { pathname }, t }) => (
  <Space mx='auto' py={{ xs: 3, md: 4 }}>
    <Container pathname={pathname}>
      {pathname !== '/recommendations' ? (
        <TextLogo />
      ) : (
        <Space ml={-3}>
          <TouchableWithIcon
            icon={{ name: 'keyboard_arrow_left', fontSize: '24px' }}
            label={t('Result')}
            labelStyle={{
              fontWeight: 'bold',
            }}
            onClick={() => navigate('/questionnaire/results')}
            showLabelOnMobile
          />
        </Space>
      )}
      {pathname === '/' && <AboutUsLink to='about-us'>{t('About us')}</AboutUsLink>}
      {pathname.includes('results') && (
        <TouchableWithIcon icon={{ name: 'arrow_upward', fontSize: '24px' }} label={t('Share')} onClick={() => {}} />
      )}
    </Container>
  </Space>
)

const containerStyle = ({ pathname }) =>
  pathname === '/questionnaire'
    ? css`
        box-shadow: 0px 1px 0px ${themeGet('colors.headerShadow')};
        justify-content: center;
        margin-left: -${themeGet('space.4')}px;
        padding-left: ${themeGet('space.4')}px;
        padding-right: ${themeGet('space.4')}px;
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
  t: PropTypes.func,
}

export default withTranslation()(withLocation(Header))
