import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import { TimelineContent } from '.'

const VerticalTimeline = ({ activeIndex, checkpoints, height, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [collapsedContent, setCollapsedContent] = useState([checkpoints[activeIndex].id])
  const [containerMarginBottom, setContainerMarginBottom] = useState(checkpoints[activeIndex].collapseHeightMobile)

  const handleCollapseToggle = (contentId, collapseHeight) => () => {
    let collapsed = [...collapsedContent]
    const idx = collapsedContent.indexOf(contentId)
    if (idx >= 0) {
      if (collapsed.length === 1) {
        setContainerMarginBottom(0)
      }
      collapsed.splice(idx, 1)
    } else {
      if (checkpoints[checkpoints.length - 1].id === contentId) {
        setContainerMarginBottom(collapseHeight)
      }
      collapsed.push(contentId)
    }

    setCollapsedContent(collapsed.slice(0))
  }

  const progressHeight = height * checkpoints[activeIndex].progress

  return (
    <Space mb={`${containerMarginBottom}px`}>
      <Container id='timeline-mobile' minHeight={height} {...props}>
        <Space pt={activeIndex === 0 ? 0 : 1}>
          <Box bg='brand' borderRadius={4} width={8} minHeight={progressHeight} />
        </Space>
        {checkpoints.map((checkpoint, idx) => {
          const isActive = idx === activeIndex
          const isDone = idx < activeIndex
          const isFirst = idx === 0
          const isLastOne = idx === checkpoints.length - 1

          return idx < activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} mt={idx === 0 ? 1 : 0} ml='1px'>
              <Box
                bg='white'
                borderRadius='round'
                top={`${checkpoint.progress * 100}%`}
                left={0}
                size={6}
                position='absolute'
                zIndex={2}>
                <Space ml={6}>
                  <TimelineContent
                    isMobile
                    collapsedContent={collapsedContent}
                    handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightMobile)}
                    title={checkpoint.title}
                    id={checkpoint.id}
                    index={idx}
                    isActive={isActive}
                    isDone={isDone}
                    isFirst={isFirst}
                    width={{ xs: 240, sm: 320 }}
                  />
                </Space>
              </Box>
            </Space>
          ) : idx === activeIndex ? (
            <Space key={`checkpoint-${checkpoint.id}`} p={2} mt={idx === 0 ? 0 : -2} ml={-1}>
              <ActiveCheckpoint top={`${checkpoint.progress * 100}%`} left={0} size={8}>
                <Space key={checkpoint.id} ml={6}>
                  <TimelineContent
                    isMobile
                    collapsedContent={collapsedContent}
                    handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightMobile)}
                    title={checkpoint.title}
                    id={checkpoint.id}
                    description={checkpoint.description}
                    isActive={isActive}
                    isDone={isDone}
                    isFirst={isFirst}
                    width={{ xs: 240, sm: 320 }}
                    index={idx}
                  />
                </Space>
              </ActiveCheckpoint>
            </Space>
          ) : (
            <Space key={`checkpoint-${checkpoint.id}`} p='2px'>
              <UnreachedCheckpoint
                top={isLastOne ? 'unset' : `${checkpoint.progress * 100}%`}
                bottom={isLastOne ? 0 : 'unset'}
                size={8}>
                <Space key={checkpoint.id} ml={6}>
                  <TimelineContent
                    isMobile
                    collapsedContent={collapsedContent}
                    handleCollapseToggle={handleCollapseToggle(checkpoint.id, checkpoint.collapseHeightMobile)}
                    title={checkpoint.title}
                    id={checkpoint.id}
                    description={checkpoint.description}
                    isActive={isActive}
                    isDone={isDone}
                    isFirst={isFirst}
                    width={{ xs: 240, sm: 320 }}
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

const Container = styled(Box)`
  position: relative;
  width: 8px;
  z-index: 0;
  :after {
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    content: '';
    height: 100%;
    width: fit-content;
    border-left: 3px dashed ${themeGet('colors.headerShadow')};
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

VerticalTimeline.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  checkpoints: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}

VerticalTimeline.defaultProps = {
  activeIndex: 0,
}

export default VerticalTimeline
