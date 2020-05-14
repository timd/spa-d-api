import React from 'react'
import PropTypes from 'prop-types'
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
        <TextLink href='/imprint' target='_blank'>
          {t('Imprint')}
        </TextLink>
        <Space mx={8}>
          <TextLink href='/data-protection' target='_blank'>
            {t('Data Protection')}
          </TextLink>
        </Space>
        <TextLink href='/conditions' target='_blank'>
          {t('Conditions')}
        </TextLink>
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

const TextLink = styled.a`
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
