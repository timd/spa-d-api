import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, IconButton, Space, Tooltip, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import { useBoolean } from '@shared-utils/hooks/useBoolean'

const TitleWithTooltipInfo = ({ title, tooltipInfo, ...props }) => {
  const [isTooltipShown, setTooltipShown] = useBoolean()

  const _showTooltip = () => setTooltipShown(true)
  const _hideTooltip = () => setTooltipShown(false)

  return (
    <Flex justifyContent='flex-end' position='relative' {...props}>
      <Space ml={2}>
        <IconButton color='headerShadow' name='help' onClick={_showTooltip} fontSize={3} />
      </Space>
      {isTooltipShown && (
        <BorderlessTooltip arrow={{ direction: 'bottom', alignment: 'right' }} visible>
          <Flex alignItems='center' justifyContent='space-between'>
            <Typography color='brand' fontWeight='bold' variant='tooltip'>
              {tooltipInfo?.title}
            </Typography>
            <IconButton background='headerShadow' color='brand' fontSize={3} name='close' onClick={_hideTooltip} />
          </Flex>
          <Space mt={1}>
            <Typography color='dark-grey' variant='tooltip'>
              {tooltipInfo?.description}
            </Typography>
          </Space>
        </BorderlessTooltip>
      )}
    </Flex>
  )
}

const BorderlessTooltip = styled(Tooltip)`
  border: none;
  border-radius: 4px;
  box-shadow: ${themeGet('shadows.tooltip-white')};
  width: 100%;
  position: absolute;
  right: -10px;
  bottom: 28px;
  &:after {
    border: none;
    bottom: -4px;
  }
`

TitleWithTooltipInfo.propTypes = {
  title: PropTypes.string,
  tooltipInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default TitleWithTooltipInfo
