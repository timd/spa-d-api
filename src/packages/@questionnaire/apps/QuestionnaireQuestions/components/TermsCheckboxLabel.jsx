import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import { Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

const TermsCheckboxLabel = ({ anchorURL, anchorLabel, t }) => (
  <Space ml={2}>
    <Typography variant='body' color='dark-grey' fontSize={1}>
      {t('I agree to the')}&nbsp;
      <Anchor className='anchor-bold' href={anchorURL} rel='noopener noreferrer' target='_blank'>
        {anchorLabel}
      </Anchor>
      &nbsp;{t('of Divorcy')}
    </Typography>
  </Space>
)

const Anchor = styled.a`
  ${themed('Anchor')};
`

TermsCheckboxLabel.propTypes = {
  anchorLabel: PropTypes.string,
  anchorURL: PropTypes.string,
  t: PropTypes.func,
}

export default withTranslation()(TermsCheckboxLabel)
