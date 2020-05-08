import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTranslation } from 'react-i18next'
import { Box, Space, Typography } from '@kogaio'
import { ConditionalWrap, themeGet } from '@kogaio/utils'

import { CollapseTrigger } from '@shared-utils/components'

const TimelineContent = ({
  collapsedContent,
  handleCollapseToggle,
  title,
  description,
  id,
  isActive,
  isDone,
  isFirst,
  isLastOne,
  isMobile,
  t,
  i18n,
  index,
  ...props
}) => (
  <Container
    isActive={isActive}
    isFirst={isFirst}
    isLastOne={isLastOne}
    isMobile={isMobile}
    flexDirection='column'
    maxWidth={{ md: 240, lg: 280 }}
    textAlign={isMobile ? 'left' : 'center'}
    width={1}
    {...props}>
    <ConditionalWrap
      condition={!!description}
      wrap={() => (
        <Space mt={{ md: 11 }}>
          <CollapseTrigger
            isCollapsed={collapsedContent.includes(id)}
            onClick={handleCollapseToggle}
            CustomTitleCmp={() => (
              <TimelineTitle
                isDone={isDone}
                isActive={isActive}
                color={isActive ? 'brand' : 'dark-grey'}
                variant='body'>
                {index + 1}. {t(title)}
              </TimelineTitle>
            )}
          />
        </Space>
      )}>
      <Space mt={{ md: 11 }}>
        <TimelineTitle isDone={isDone} isActive={isActive} color={isActive ? 'brand' : 'dark-grey'} variant='body'>
          {index + 1}. {t(title)}
        </TimelineTitle>
      </Space>
    </ConditionalWrap>
    {collapsedContent.includes(id) && !!description && (
      <Space mt={4}>
        <Typography color='dark-grey' maxWidth={{ xs: 220, sm: 240, md: 180, lg: 240 }} variant='tooltip'>
          {description[i18n.language]}
        </Typography>
      </Space>
    )}
  </Container>
)

const timelineTitleStyle = ({ isActive, isDone }) => {
  if (isActive)
    return css`
      color: ${themeGet('colors.brand')};
      font-weight: ${themeGet('fontWeights.bold')};
    `

  return isDone
    ? css`
        color: ${themeGet('colors.timelineDone')};
        opacity: 0.4;
      `
    : css`
        color: ${themeGet('colors.dark-grey')};
      `
}

const containerStyle = ({ isActive, isFirst, isLastOne, isMobile }) => {
  if (!isMobile)
    return isLastOne
      ? css`
          transform: translateX(50%);
        `
      : css`
          transform: translateX(-50%);
        `
  if (isActive) {
    return css`
      margin-top: -12px;
    `
  }
  return isFirst
    ? css`
        margin-top: -9px;
      `
    : css`
        margin-top: -10px;
      `
}

const Container = styled(Box)`
  ${containerStyle};
`

const TimelineTitle = styled(Typography)`
  ${timelineTitleStyle};
`

TimelineContent.propTypes = {
  collapsedContent: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.object,
  handleCollapseToggle: PropTypes.func,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  isDone: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLastOne: PropTypes.bool,
  isMobile: PropTypes.bool,
  title: PropTypes.string,
  t: PropTypes.func,
  i18n: PropTypes.object,
  index: PropTypes.number,
}

export default withTranslation()(TimelineContent)
