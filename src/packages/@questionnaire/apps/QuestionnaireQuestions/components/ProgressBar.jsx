import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const ProgressBar = ({ progress, ...props }) => (
  <Container left={{ xs: -24, md: 0 }} right={{ xs: -24, md: 0 }}>
    <Bar bg='brand' width={progress}></Bar>
  </Container>
)

const Container = styled(Flex)`
  height: 6px;
  background: ${themeGet('colors.progress-bg')};
  position: absolute;
  top: 0;
`

const Bar = styled(Box)`
  background: ${themeGet('colors.brand')};
`

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
