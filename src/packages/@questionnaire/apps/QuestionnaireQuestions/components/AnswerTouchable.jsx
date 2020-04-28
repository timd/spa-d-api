import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Image, Space, Touchable, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'

const AnswerTouchable = ({ id, title, isSelected, onSelect, ...props }) => (
  <Touchable effect='opacity' onClick={onSelect}>
    <Space pl={4} pr={isSelected ? 2 : 4} py={3}>
      <Container {...props} className={isSelected ? 'selected' : ''}>
        <Typography variant='body' textAlign='left'>
          {title}
        </Typography>
        <Space ml={isSelected ? 2 : 0}>
          <Image display={isSelected ? 'block' : 'none'} src={icons.check} />
        </Space>
      </Container>
    </Space>
  </Touchable>
)

const Container = styled(Flex)`
  ${themed('QuestionnaireOption')};
`

AnswerTouchable.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default AnswerTouchable
