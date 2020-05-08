import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input, Typography, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import { localize, normalize } from '../../../services'

const CurrencyInput = ({ id, value, label, placeholder, onValueChange, ...props }) => {
  const MIN = 0
  const MAX = 10000000000
  const localisedValue = localize(value ?? '')

  const handleOnChange = event => {
    event.preventDefault()

    let newValue = event.target.value
    if (!newValue) {
      onValueChange(newValue)
    }

    newValue = normalize(newValue)
    newValue = parseInt(newValue)
    if (newValue >= MIN && newValue < MAX) {
      onValueChange(newValue)
    }
  }

  return (
    <Container {...props}>
      <Space mr={4}>
        <Label variant='body' display={label ? 'inherit' : 'none'} width={label ? '150%' : 0}>
          {label}
        </Label>
      </Space>
      <Input
        id={id}
        value={localisedValue}
        placeholder={placeholder}
        variant='questionnaire'
        noBottomSpace
        width={label ? '150px' : '270px'}
        onChange={handleOnChange}
      />
    </Container>
  )
}

const Label = styled(Typography)`
  color: ${themeGet('colors.dark-gray')};
`

const Container = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: flex-end;

  input {
    padding-right: 28px;
  }

  :after {
    font-family: ${themeGet('fonts.complementary')};
    display: block;
    color: ${themeGet('colors.brand')};
    content: '€';
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
  }
`

CurrencyInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onValueChange: PropTypes.func,
}

export default CurrencyInput
