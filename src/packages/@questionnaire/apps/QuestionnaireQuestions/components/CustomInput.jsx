import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Image, Input, Space, Touchable, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { icons } from '../assets'

const CustomInput = ({
  id,
  type,
  value,
  title,
  placeholder,
  validation,
  isSelected,
  onSelect,
  onValueChange,
  ...props
}) => {
  const handleOnChange = event => {
    event.preventDefault()

    const newValue = event.target.value
    if (type === 'number') {
      var options = {
        min: 0,
        ...validation,
      }

      if (newValue >= options.min && newValue <= options.max) {
        onValueChange(newValue)
      }
    } else {
      onValueChange(newValue)
    }
  }

  return (
    <Wrapper>
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
      <Space mt={3}>
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          variant='questionnaire'
          display={isSelected ? 'inherit' : 'none'}
          noBottomSpace
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
  type: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  onValueChange: PropTypes.func,
}
CustomInput.defaultProps = {
  type: 'text',
  validation: {},
}

export default CustomInput
