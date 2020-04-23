import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Flex, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const checkpoints = [
  {
    id: 'checkpoint-1',
    title: 'Title1',
    description: '',
    progress: '0%',
  },
  {
    id: 'checkpoint-2',
    title: 'Title2',
    description: '',
    progress: '25%',
  },
  {
    id: 'checkpoint-3',
    title: 'Title3',
    description: '',
    progress: '50%',
  },
  {
    id: 'checkpoint-4',
    title: 'Title4',
    description: '',
    progress: '100%',
  },
]

const StepProgress = ({ activeIndex, isRow, minWidth, ...props }) => {
  const progressWidth = checkpoints[activeIndex].progress

  return (
    <>
      <Container isRow={isRow} {...props} minWidth={minWidth}>
        <Space pl={activeIndex === 0 ? 0 : 1}>
          <Box bg='brand' borderRadius={4} height={8} minWidth={progressWidth} />
        </Space>
        {checkpoints.map((checkpoint, idx) =>
          idx < activeIndex ? (
            <Space key={`ccheckpoint-${checkpoint.id}`} mt='1px' ml={idx === 0 ? 1 : 0}>
              <Box bg='white' borderRadius='round' left={checkpoint.progress} size={6} position='absolute' zIndex={2} />
            </Space>
          ) : idx === activeIndex ? (
            <Space p={2} ml={idx === 0 ? 0 : -4} mt={-1}>
              <ActiveCheckpoint left={checkpoint.progress} size={8} />
            </Space>
          ) : (
            <Space p='2px'>
              <UnreachedCheckpoint left={checkpoint.progress} size={8} />
            </Space>
          )
        )}
      </Container>
      {isRow ? (
        <Flex width={1} position='relative'>
          {checkpoints.map((checkpoint, idx) => {
            const isLastOne = idx === checkpoints.length - 1

            return (
              <TimelineTitle
                key={checkpoint.id}
                position='absolute'
                isLastOne={isLastOne}
                isRow={isRow}
                progress={checkpoint.progress}>
                {checkpoint.title}
              </TimelineTitle>
            )
          })}
        </Flex>
      ) : (
        <Flex flexDirection='column' minWidth={minWidth} width={1} position='relative'>
          {checkpoints.map((checkpoint, idx) => {
            const isActive = idx === activeIndex
            const isLastOne = idx === checkpoints.length - 1

            return (
              <Space key={checkpoint.id} ml={6}>
                <TimelineTitle
                  position='absolute'
                  isActive={isActive}
                  isLastOne={isLastOne}
                  isFirst={idx === 0}
                  isRow={isRow}
                  progress={checkpoint.progress}>
                  {checkpoint.title}
                </TimelineTitle>
              </Space>
            )
          })}
        </Flex>
      )}
    </>
  )
}

const timelineTitleStyle = ({ isActive, isFirst, isLastOne, isRow, progress }) => {
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

const TimelineTitle = styled(Typography)`
  position: absolute;
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
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}

StepProgress.defaultProps = {
  activeIndex: 1,
  isRow: false,
}

export default StepProgress
