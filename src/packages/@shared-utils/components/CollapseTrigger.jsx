import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Icon, Typography, Touchable, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const CollapseTrigger = ({ CustomTitleCmp, isCollapsed, onClick, label, ...props }) => (
  <Touchable effect='opacity' onClick={onClick} {...props}>
    <Flex alignItems='center'>
      {CustomTitleCmp ? (
        <CustomTitleCmp />
      ) : (
        <CollapseTitle variant='caption'>{label}</CollapseTitle>
      )}
      <Space ml={2}>
        <Icon color='brand' name={isCollapsed ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
      </Space>
    </Flex>
  </Touchable>
)

const CollapseTitle = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
`

CollapseTrigger.propTypes = {
  CustomTitleCmp: PropTypes.node,
  isCollapsed: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default CollapseTrigger
