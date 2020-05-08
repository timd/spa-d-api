import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@kogaio'

import TimelineItem from './TimelineItem'

const VerticalTimelineRelative = ({ activeIndex, checkpoints, ...props }) => {
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
  return (
    <Flex flexDirection='column' width={1} {...props}>
      {checkpoints.map((checkpoint, idx) => {
        const { CustomRender } = checkpoint
        return CustomRender ? (
          <CustomRender key={checkpoint.id} />
        ) : (
          <TimelineItem
            key={checkpoint.id}
            isActive={idx === activeIndex}
            isFirst={idx === 0}
            isDone={idx < activeIndex}
            isLastOne={idx === checkpoints.length - 1}
            isExpanded={collapsedContent.includes(checkpoint.id)}
            index={idx}
            hideIndex={checkpoint.hideIndex}
            onClick={handleCollapseToggle(checkpoint.id)}
            title={checkpoint.title}
            description={checkpoint.description}
          />
        )
      })}
    </Flex>
  )
}

VerticalTimelineRelative.propTypes = {
  activeIndex: PropTypes.number,
  checkpoints: PropTypes.arrayOf(PropTypes.object),
}

export default VerticalTimelineRelative
