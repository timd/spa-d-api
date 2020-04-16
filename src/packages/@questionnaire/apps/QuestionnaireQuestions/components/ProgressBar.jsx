import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const ProgressBar = ({ progress, ...props }) => (
  <Container>
    <Box bg='brand' width={progress}></Box>
  </Container>
)

const Container = styled(Flex)`
  width: 100%;
  height: 6px;
  background: ${themeGet('colors.progress-bg')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
