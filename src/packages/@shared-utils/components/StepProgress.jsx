import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Flex, Space, Typography } from '@kogaio'
import { ConditionalWrap, themeGet } from '@kogaio/utils'

import { CollapseTrigger } from '@shared-utils/components'

const checkpoints = [
  {
    id: 'checkpoint-1',
    title: 'Marriage Crisis',
    description: '',
    progress: '0%',
  },
  {
    id: 'checkpoint-2',
    title: 'Split Up',
    description: '',
    progress: '25%',
  },
  {
    id: 'checkpoint-3',
    title: 'Getting Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: '50%',
  },
  {
    id: 'checkpoint-4',
    title: 'Being Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: '100%',
  },
]

const StepProgress = ({ activeIndex, display, isRow, maxWidth, minWidth, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [collapsedContent, setCollapsedContent] = useState([])

  const handleCollapseToggle = contentId => () => {
    let collapsed = [...collapsedContent]
    const idx = collapsedContent.indexOf(contentId)
    if (idx >= 0) {
      collapsed.splice(idx, 1)
    } else {
      collapsed.push(contentId)
    }

    setCollapsedContent(collapsed.slice(0))
  }

  const progressWidth = checkpoints[activeIndex].progress

  return (
    <>
      <Container display={display} isRow={isRow} maxWidth={maxWidth} minWidth={minWidth} {...props}>
        <Space pl={activeIndex === 0 ? 0 : 1}>
          <Box bg='brand' borderRadius={4} height={8} minWidth={progressWidth} />
        </Space>
        {checkpoints.map((checkpoint, idx) =>
          idx < activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} mt='1px' ml={idx === 0 ? 1 : 0}>
              <Box bg='white' borderRadius='round' left={checkpoint.progress} size={6} position='absolute' zIndex={2} />
            </Space>
          ) : idx === activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} p={2} ml={idx === 0 ? 0 : -4} mt={-1}>
              <ActiveCheckpoint left={checkpoint.progress} size={8} />
            </Space>
          ) : (
            <Space key={`checkpoint-${checkpoint.id}`} p='2px'>
              <UnreachedCheckpoint left={checkpoint.progress} size={8} />
            </Space>
          )
        )}
      </Container>
      <Flex
        display={display}
        flexDirection={isRow ? 'row' : 'column'}
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={1}
        position='relative'>
        {checkpoints.map((checkpoint, idx) => {
          const isActive = idx === activeIndex
          const isDone = idx < activeIndex
          const isLastOne = idx === checkpoints.length - 1

          return (
            <Space key={checkpoint.id} ml={isRow ? 0 : 6}>
              <TimelineContent
                position='absolute'
                isActive={isActive}
                isLastOne={isLastOne}
                isFirst={idx === 0}
                isRow={isRow}
                progress={checkpoint.progress}
                flexDirection='column'>
                <ConditionalWrap
                  condition={!!checkpoint.description}
                  wrap={() => (
                    <CollapseTrigger
                      isCollapsed={collapsedContent.includes(checkpoint.id)}
                      onClick={handleCollapseToggle(checkpoint.id)}
                      CustomTitleCmp={() => (
                        <TimelineTitle
                          isDone={isDone}
                          isActive={isActive}
                          color={isActive ? 'brand' : 'dark-grey'}
                          variant='body'>
                          {checkpoint.title}
                        </TimelineTitle>
                      )}
                    />
                  )}>
                  <TimelineTitle
                    isDone={isDone}
                    isActive={isActive}
                    color={isActive ? 'brand' : 'dark-grey'}
                    variant='body'>
                    {checkpoint.title}
                  </TimelineTitle>
                </ConditionalWrap>
                {collapsedContent.includes(checkpoint.id) && (
                  <Space mt={4}>
                    <Typography color='dark-grey' maxWidth={{ xs: 280, md: 200, lg: 280 }} variant='tooltip'>
                      {checkpoint.description}
                    </Typography>
                  </Space>
                )}
              </TimelineContent>
            </Space>
          )
        })}
      </Flex>
    </>
  )
}

const timelineContentStyle = ({ isActive, isFirst, isLastOne, isRow, progress }) => {
  if (isRow) {
    return isLastOne
      ? css`
          right: 0;
          margin-left: 0;
        `
      : css`
          margin-left: ${progress};
        `
  }
  if (isActive) {
    return isFirst
      ? css`
          margin-top: -2px;
        `
      : css`
          margin-top: calc(${progress} - 18px);
        `
  }
  return isFirst
    ? css`
        margin-top: -5px;
      `
    : css`
        margin-top: calc(${progress} - 7px);
      `
}

const containerStyle = ({ isRow }) =>
  !isRow &&
  css`
    transform-origin: 0 100%;
    transform: rotate(90deg);
  `

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

const TimelineContent = styled(Flex)`
  ${timelineContentStyle};
`

const TimelineTitle = styled(Typography)`
  ${timelineTitleStyle};
`

const Container = styled(Flex)`
  position: relative;
  width: 100%;
  :after {
    margin: auto 0;
    bottom: 0;
    top: 0;
    content: '';
    width: 100%;
    height: fit-content;
    border-top: 3px dashed ${themeGet('colors.headerShadow')};
    position: absolute;
    z-index: -1;
  }
  ${containerStyle};
`

const ActiveCheckpoint = styled(Box)`
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
  :after {
    width: 6px;
    height: 6px;
  }
`

StepProgress.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  isRow: PropTypes.bool,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}

StepProgress.defaultProps = {
  activeIndex: 1,
  isRow: false,
}

export default StepProgress
