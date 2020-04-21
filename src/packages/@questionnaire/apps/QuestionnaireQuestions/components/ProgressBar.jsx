import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const ProgressBar = ({ progress, ...props }) => (
  <Container left={{ xs: -24, md: 0 }} progress={progress} width={{ xs: '100vw', md: '100%' }} {...props} />
)

const Container = styled(Flex)`
  height: 6px;
  background: ${themeGet('colors.progress-bg')};
  position: absolute;
  top: 0;
  :after {
    background: ${themeGet('colors.brand')};
    content: '';
    height: 100%;
    width: ${({ progress }) => progress};
  }
`

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
