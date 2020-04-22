import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const StepProgress = ({ activeIndex, isRow, ...props }) => {
  const progressWidth = checkpoints[activeIndex].progress

  return (
    <>
      <Container flexDirection={isRow ? 'row' : 'column'} {...props}>
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
      <Flex width={1} position='relative'>
        {checkpoints.map((checkpoint, idx) => {
          const isLastOne = idx === checkpoints.length - 1

          return (
            <Space key={checkpoint.id} ml={!isLastOne ? checkpoint.progress : 0}>
              <TimelineTitle position='absolute' isLastOne={isLastOne}>
                {checkpoint.title}
              </TimelineTitle>
            </Space>
          )
        })}
      </Flex>
    </>
  )
}

const TimelineTitle = styled(Typography)`
  position: absolute;
  ${({ isLastOne }) => isLastOne && 'right: 0;'};
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
}

StepProgress.defaultProps = {
  activeIndex: 3,
  isRow: true,
}

export default StepProgress
