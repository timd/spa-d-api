import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

const TermsCheckboxLabel = ({ anchorURL, anchorLabel }) => (
  <Space ml={2}>
    <Typography color='gunmetal' display='flex' fontSize={1}>
      I agree to the&nbsp;
      <Anchor className='anchor-bold' href={anchorURL} rel='noopener noreferrer' target='_blank'>
        {anchorLabel}
      </Anchor>
      &nbsp;of Divorcy
    </Typography>
  </Space>
)

const Anchor = styled.a`
  ${themed('Anchor')};
`

TermsCheckboxLabel.propTypes = {
  anchorLabel: PropTypes.string,
  anchorURL: PropTypes.string
}

export default TermsCheckboxLabel
