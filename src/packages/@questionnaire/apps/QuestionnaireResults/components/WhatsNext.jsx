import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { withTranslation } from 'react-i18next'
import { Button, Card, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const WhatsNext = ({ t, ...props }) => (
  <Space px={4} py={6}>
    <Card display='flex' flexDirection='column' variant='next' {...props}>
      <SectionTitle variant='sh3'>{t("What's next")}</SectionTitle>
      <Space mt={2}>
        <Typography color='dark-grey' variant='body'>
          {t('result.teaser')}
        </Typography>
      </Space>
      <Space mt={8} mx='auto'>
        <Button title={t('Check what to do next')} onClick={() => navigate('/recommendations')} width={1} />
      </Space>
      <Space mt={4} mx='auto'>
        <Button title={t('Send me the result')} onClick={() => {}} variant='outline' width={1} />
      </Space>
    </Card>
  </Space>
)

const SectionTitle = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
`

WhatsNext.propTypes = {
  t: PropTypes.func,
}

export default withTranslation()(WhatsNext)
