import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Image, Input, Space, Touchable, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'

const CustomInput = ({ id, title, value, placeholder, isSelected, type, validation, onClick, onChange, ...props }) => {
  const handleOnChange = event => {
    event.preventDefault()

    const newValue = event.target.value
    if (type === 'number') {
      var options = {
        min: 0,
        ...validation,
      }

      if (newValue >= options.min && newValue <= options.max) {
        onChange(newValue)
      } else {
        onChange(value)
      }
    } else {
      onChange(newValue)
    }
  }

  return (
    <Wrapper>
      <Touchable effect='opacity' onClick={onClick}>
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
      <Space mt={3}>
        <Input
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          variant='questionnaire'
          noBottomSpace
          display={isSelected ? 'inherit' : 'none'}
          onChange={handleOnChange}
        />
      </Space>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex-direction: column;
`

const Container = styled(Flex)`
  ${themed('QuestionnaireOption')};
`

CustomInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}
CustomInput.defaultProps = {
  type: 'text',
  validation: {},
}

export default CustomInput
