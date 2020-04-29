import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Image, Space, Touchable, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'

const MoreTouchable = ({ title, onClick, ...props }) => (
  <Touchable {...props} effect='opacity' onClick={onClick}>
    <Space px={4} py={3}>
      <Container width={1}>
        <Typography variant='body' textAlign='left'>
          {title}
        </Typography>
        <Space ml={2}>
          <Image src={icons.more} />
        </Space>
      </Container>
    </Space>
  </Touchable>
)

const Container = styled(Flex)`
  ${themed('QuestionnaireOption')};
`

MoreTouchable.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default MoreTouchable
