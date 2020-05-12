import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { Box, Flex, Space, Hide, Typography } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { TextLogo } from '.'

import { withTranslation } from 'react-i18next'

const Footer = ({ t }) => (
  <Space px={{ xs: 4, md: 16 }} py={10} mx='auto'>
    <Container flexDirection={{ xs: 'column-reverse', md: 'row' }}>
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <Flex flexDirection='column'>
          <Hide xs sm>
            <TextLogo />
          </Hide>
          <Space mt={11}>
            <Flex justifyContent='space-between'>
              <TextLink to='/imprint' target='_blank'>
                {t('Imprint')}
              </TextLink>
              <TextLink to='/data-protection' target='_blank'>
                {t('Data Protection')}
              </TextLink>
              <TextLink to='/conditions' target='_blank'>
                {t('Conditions')}
              </TextLink>
            </Flex>
          </Space>
        </Flex>
      </Box>
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <Flex flexDirection='column' textAlign={{ xs: 'center', md: 'right' }}>
          <Typography variant='sh3'>{t('Contact')}</Typography>
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

const TextLink = styled(Link)`
  color: ${themeGet('colors.dark-grey')};
  font-family: ${themeGet('fonts.complementary')};
  font-weight: ${themeGet('fontWeights.regular')};
  font-size: 12px;
  text-decoration: none;
  line-height: 16px;
  &:hover {
    text-decoration: underline;
  }
`

Footer.propTypes = {
  t: PropTypes.func,
}
export default withTranslation()(Footer)
