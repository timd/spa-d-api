import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Image, Space, Touchable, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'

const AnswerTouchable = ({ onClick, isSelected, ...props }) => (
  <Touchable effect='opacity' onClick={onClick}>
    <Space pl={4} pr={isSelected ? 2 : 4} py={3}>
      <Container className={isSelected ? 'selected' : ''}>
        <Typography variant='body' textAlign='left'>
          I am in the middle of my divorce and waiting for the court to rule
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
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
}

export default AnswerTouchable
