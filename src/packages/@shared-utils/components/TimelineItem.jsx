import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTranslation } from 'react-i18next'

import { Box, Flex, Icon, Space, Touchable, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const TimelineItem = ({
  isActive,
  isDone,
  isExpanded,
  isLastOne,
  index,
  hideIndex,
  i18n,
  onClick,
  title,
  description,
  ...props
}) => {
  const hasDescription = !!description

  return (
    <Flex width={1} {...props}>
      <DashedContainer isLastOne={isLastOne}>
        {isActive ? <ActiveCheckpoint /> : isDone ? <DoneCheckpoint /> : <UnreachedCheckpoint />}
      </DashedContainer>
      <Space ml={{ xs: 3, md: 5 }}>
        <ContentWrapper isActive={isActive} isLastOne={isLastOne} minHeight={isLastOne ? 0 : 56}>
          <Touchable effect='no-feedback' onClick={hasDescription ? onClick : null}>
            <Flex alignItems='center'>
              <Space mt={isActive ? -1 : -2}>
                <Typography
                  color={isActive ? 'brand' : 'dark-grey'}
                  fontWeight={isActive ? 'bold' : 'regular'}
                  variant='body'>
                  {!hideIndex && `${index + 1}.`} {title}
                </Typography>
              </Space>
              {hasDescription && (
                <Space ml={2}>
                  <Icon color='brand' fontSize={4} name={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
                </Space>
              )}
            </Flex>
          </Touchable>
          {isExpanded && hasDescription && (
            <Space pb={isLastOne ? 0 : 10} pt={4}>
              <Typography color='dark-grey' variant='body'>
                {description[i18n.language]}
              </Typography>
            </Space>
          )}
        </ContentWrapper>
      </Space>
    </Flex>
  )
}

const _dashedContainerStyle = ({ isLastOne }) =>
  !isLastOne &&
  css`
    :after {
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 0;
      content: '';
      min-height: 100%;
      width: fit-content;
      border-left: 3px dashed ${themeGet('colors.headerShadow')};
      position: absolute;
      z-index: 0;
    }
  `

const ContentWrapper = styled(Flex)`
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 526px;
`

const ActiveCheckpoint = styled(Box)`
  width: 16px;
  height: 16px;
  position: absolute;
  background: ${themeGet('colors.brand')};
  border-radius: ${themeGet('radii.round')};
  z-index: 2;
  :after {
    background: ${themeGet('colors.white')};
    border-radius: ${themeGet('radii.round')};
    margin: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    height: 8px;
    width: 8px;
    position: absolute;
    z-index: 3;
  }
`

const UnreachedCheckpoint = styled(ActiveCheckpoint)`
  background: ${themeGet('colors.brand')};
  width: 8px;
  height: 8px;
  margin-left: 4px;
  :after {
    width: 6px;
    height: 6px;
  }
`

const DoneCheckpoint = styled(Box)`
  background: ${themeGet('colors.brand')};
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-left: 4px;
`

const DashedContainer = styled(Box)`
  min-height: 100%;
  min-width: 16px;
  position: relative;
  ${_dashedContainerStyle};
`

TimelineItem.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  isActive: PropTypes.bool,
  isDone: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isLastOne: PropTypes.bool,
  index: PropTypes.number,
  hideIndex: PropTypes.bool,
  i18n: PropTypes.object,
  onClick: PropTypes.func,
}

export default withTranslation()(TimelineItem)
