import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import { TimelineContent } from '.'

const HorizontalTimeline = ({ activeIndex, checkpoints, height, isRow, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [collapsedContent, setCollapsedContent] = useState([checkpoints[activeIndex].id])
  const [containerMarginBottom, setContainerMarginBottom] = useState(checkpoints[activeIndex].collapseHeightDesktop)

  const handleCollapseToggle = (contentId, collapseHeight) => () => {
    let collapsed = [...collapsedContent]
    const idx = collapsedContent.indexOf(contentId)
    if (idx >= 0) {
      if (collapsed.length === 1) {
        setContainerMarginBottom(0)
      }
      collapsed.splice(idx, 1)
    } else {
      setContainerMarginBottom(collapseHeight)
      collapsed.push(contentId)
    }

    setCollapsedContent(collapsed.slice(0))
  }

  const progressWidth = `${checkpoints[activeIndex].progress * 100}%`
  const containerMB = containerMarginBottom
    ? Object.keys(containerMarginBottom).reduce(
        (acc, deviceSizeKey) => ({ ...acc, [deviceSizeKey]: `${containerMarginBottom[deviceSizeKey] + 44}px` }),
        {}
      )
    : 0

  return (
    <Space mb={containerMB}>
      <Container id='timeline' isRow={isRow} maxWidth={isRow ? '100%' : height} {...props}>
        <Space pl={activeIndex === 0 ? 0 : 1}>
          <Box bg='brand' borderRadius={4} height={8} width={progressWidth} />
        </Space>
        {checkpoints.map((checkpoint, idx) => {
          const isActive = idx === activeIndex
          const isDone = idx < activeIndex
          const isLastOne = idx === checkpoints.length - 1
          const progress = `${checkpoint.progress * 100}%`

          return idx < activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} mt='1px' ml={idx === 0 ? 1 : 0}>
              <Box bg='white' borderRadius='round' left={progress} top={0} size={6} position='absolute' zIndex={2}>
                <TimelineContent
                  collapsedContent={collapsedContent}
                  handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightDesktop)}
                  title={checkpoint.title}
                  id={checkpoint.id}
                  isActive={isActive}
                  isDone={isDone}
                  index={idx}
                />
              </Box>
            </Space>
          ) : idx === activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} p={2} ml={idx === 0 ? 0 : -4} mt={-1}>
              <ActiveCheckpoint left={progress} top={0} size={8}>
                <Space key={checkpoint.id} ml={isRow ? 0 : 6}>
                  <TimelineContent
                    collapsedContent={collapsedContent}
                    handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightDesktop)}
                    title={checkpoint.title}
                    id={checkpoint.id}
                    description={checkpoint.description}
                    isActive={isActive}
                    isDone={isDone}
                    index={idx}
                  />
                </Space>
              </ActiveCheckpoint>
            </Space>
          ) : (
            <Space key={`checkpoint-${checkpoint.id}`} top={0} p='2px'>
              <UnreachedCheckpoint left={isLastOne ? 'unset' : progress} right={isLastOne ? 0 : 'unset'} size={8}>
                <Space key={checkpoint.id} ml={isRow ? 0 : 6}>
                  <TimelineContent
                    collapsedContent={collapsedContent}
                    handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightDesktop)}
                    title={checkpoint.title}
                    id={checkpoint.id}
                    description={checkpoint.description}
                    isActive={isActive}
                    isDone={isDone}
                    index={idx}
                  />
                </Space>
              </UnreachedCheckpoint>
            </Space>
          )
        })}
      </Container>
    </Space>
  )
}

const containerStyle = ({ isRow }) =>
  !isRow &&
  css`
    transform-origin: 0 100%;
    transform: rotate(90deg);
  `

const Container = styled(Box)`
  position: relative;
  width: 100%;
  margin-bottom: ${themeGet('space.11')}px;
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

HorizontalTimeline.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  checkpoints: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  isRow: PropTypes.bool,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}

HorizontalTimeline.defaultProps = {
  activeIndex: 0,
  isRow: true,
}

export default HorizontalTimeline
