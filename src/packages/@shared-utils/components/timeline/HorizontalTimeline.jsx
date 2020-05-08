import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import HorizontalTimelineContent from './HorizontalTimelineContent'

const HorizontalTimeline = ({ activeIndex, checkpoints, height, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [collapsedContent, setCollapsedContent] = useState([checkpoints[activeIndex].id])

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

  const progressWidth = `${checkpoints[activeIndex].progress * 100}%`
  const contentBoxWidth = 1 / checkpoints.length

  return (
    <Container id='timeline' width={3 / 4} {...props}>
      <Space pl={activeIndex === 0 ? 0 : 1}>
        <Box bg='brand' borderRadius={4} height={8} position='absolute' width={progressWidth} />
      </Space>
      {checkpoints.map((checkpoint, idx) => {
        const isActive = idx === activeIndex
        const isDone = idx < activeIndex
        const isLastOne = idx === checkpoints.length - 1
        const progress = `${checkpoint.progress * 100}%`

        return idx < activeIndex ? (
          <Box key={`checkpoint-${checkpoint.id}`} width={contentBoxWidth}>
            <Space mt='1px' ml={idx === 0 ? 1 : 0}>
              <Box bg='white' borderRadius='round' left={progress} top={0} size={6} position='absolute' zIndex={2} />
            </Space>
            <HorizontalTimelineContent
              collapsedContent={collapsedContent}
              handleCollapseToggle={handleCollapseToggle(checkpoint.id)}
              title={checkpoint.title}
              id={checkpoint.id}
              index={idx}
              isActive={isActive}
              isLastOne={isLastOne}
              isDone={isDone}
            />
          </Box>
        ) : idx === activeIndex ? (
          <Box key={`checkpoint-${checkpoint.id}`} width={contentBoxWidth}>
            <Space p={2} ml={idx === 0 ? 0 : -4} mt={-1}>
              <ActiveCheckpoint left={progress} top={0} size={8} />
            </Space>
            <HorizontalTimelineContent
              collapsedContent={collapsedContent}
              handleCollapseToggle={handleCollapseToggle(checkpoint.id)}
              title={checkpoint.title}
              id={checkpoint.id}
              description={checkpoint.description}
              isActive={isActive}
              isDone={isDone}
              isLastOne={isLastOne}
              index={idx}
            />
          </Box>
        ) : (
          <Box key={`checkpoint-${checkpoint.id}`} width={contentBoxWidth}>
            <Space top={0} p='2px'>
              <UnreachedCheckpoint left={isLastOne ? 'unset' : progress} right={isLastOne ? 0 : 'unset'} size={8} />
            </Space>
            <HorizontalTimelineContent
              collapsedContent={collapsedContent}
              handleCollapseToggle={handleCollapseToggle(checkpoint.id)}
              title={checkpoint.title}
              id={checkpoint.id}
              description={checkpoint.description}
              isActive={isActive}
              isDone={isDone}
              isLastOne={isLastOne}
              index={idx}
            />
          </Box>
        )
      })}
    </Container>
  )
}

const Container = styled(Box)`
  position: relative;
  margin-bottom: ${themeGet('space.11')}px;
  :after {
    margin-top: 2.5px;
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

HorizontalTimeline.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  checkpoints: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}

HorizontalTimeline.defaultProps = {
  activeIndex: 0,
}

export default HorizontalTimeline
