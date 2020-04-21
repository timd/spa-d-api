import React from 'react'
import styled from 'styled-components'
import { Box, Space } from '@kogaio/Responsive'
import { themeGet } from '@kogaio/utils'

const DashedLine = props => <Space ml={{ md: -6 }}><HorizontalLine position={{ xs: 'initial', md: 'relative' }} {...props} /></Space>

const HorizontalLine = styled(Box)`
  :after {
    border-top: 1px dashed ${themeGet('colors.headerShadow')};
    content: '';
    left: 0;
    width: 100%;
    position: absolute;
  }
`

export default DashedLine
