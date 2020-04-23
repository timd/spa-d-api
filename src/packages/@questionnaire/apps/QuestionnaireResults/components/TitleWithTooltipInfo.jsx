import React from 'react'
import PropTypes from 'prop-types'
import { Flex, IconButton, Space, Tooltip, Typography } from '@kogaio'

import { useBoolean } from '@shared-utils/hooks/useBoolean'

const TitleWithTooltipInfo = ({title, titleColor, tooltipInfo, ...props}) => {
  const [isTooltipShown, setTooltipShown] = useBoolean()

  const _showTooltip = () => setTooltipShown(true)
  const _hideTooltip = () => setTooltipShown(false)

  return (
    <Flex alignItems='center' position='relative' {...props}>
        <Typography color={titleColor} variant='super-title'>
          {title}
        </Typography>
      <Space ml={2}>
        <IconButton color='headerShadow' name='help' onClick={_showTooltip} fontSize={3} />
      </Space>
      {isTooltipShown && (
        <Space ml={{ xs: '106px', md: '118px' }}>
          <Tooltip
            arrow={{ direction: 'bottom', alignment: 'left' }}
            borderRadius={4}
            boxShadow='tooltip-white'
            visible
            width={1}
            maxWidth={{ xs: '264px', md: '320px' }}
            position='absolute'
            top={{xs: '-140px', md: '-116px'}}>
            <Flex alignItems='center' justifyContent='space-between'>
              <Typography color='brand' fontWeight='bold' variant='tooltip'>
                {tooltipInfo?.title}
              </Typography>
              <IconButton color='dark-grey' fontSize={3} name='close' onClick={_hideTooltip} />
            </Flex>
            <Space mt={1}>
              <Typography color='dark-grey' variant='tooltip'>
                {tooltipInfo?.description}
              </Typography>
            </Space>
          </Tooltip>
        </Space>
      )}
    </Flex>
  )
}

TitleWithTooltipInfo.propTypes= {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  tooltipInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}

TitleWithTooltipInfo.defaultTypes = {
  titleColor: 'dark-grey'
}

export default TitleWithTooltipInfo
