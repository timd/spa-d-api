import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { Box, Space, Flex, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import styled from 'styled-components'
import { withTranslation } from 'react-i18next'

const QUESTIONNAIRE_CONTAINER_MAX_WIDTH = 950

const Footer = ({ t, ...props }) => (
  <Container
    {...props}
    maxWidth={{ md: `${QUESTIONNAIRE_CONTAINER_MAX_WIDTH}px` }}
    flexDirection={{ xs: 'column-reverse', md: 'row' }}
    alignItems={{ xs: 'center' }}>
    <Space mt={{ xs: 8, md: 0 }}>
      <Box width={1}>
        <Copyright textAlign={{ xs: 'center', md: 'left' }} variant='caption'>
          {t('Copyright 2020 Divorcy')}
        </Copyright>
      </Box>
    </Space>

    <Box width={1}>
      <Flex justifyContent={{ xs: 'center', md: 'flex-end' }}>
        <TextLink to='/imprint'>{t('Imprint')}</TextLink>
        <Space mx={8}>
          <TextLink to='/data-protection'>{t('Data Protection')}</TextLink>
        </Space>
        <TextLink to='/conditions'>{t('Conditions')}</TextLink>
      </Flex>
    </Box>
  </Container>
)

const Container = styled(Flex)`
  width: 100%;
`

const Copyright = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  opacity: 0.6;
`

const TextLink = styled(Link)`
  color: ${themeGet('colors.dark-grey')};
  font-family: ${themeGet('fonts.complementary')};
  font-weight: ${themeGet('fontWeights.regular')};
  font-size: 12px;
  text-decoration: none;
  line-height: 16px;
  opacity: 0.6;
  &:hover {
    text-decoration: underline;
  }
`

Footer.propTypes = {
  t: PropTypes.func,
}

export default withTranslation()(Footer)
