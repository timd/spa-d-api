import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input, Typography, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const CurrencyInput = ({ id, value, label, placeholder, onValueChange, ...props }) => {
  const MIN = 0

  const localize = value => value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  const normalize = value => value.replace(/\./g, '')

  const localisedValue = localize(value ?? '')

  const handleOnChange = event => {
    event.preventDefault()

    let newValue = event.target.value
    if (!newValue) {
      onValueChange(newValue)
    }

    newValue = normalize(newValue)
    newValue = parseInt(newValue)
    if (newValue >= MIN) {
      onValueChange(newValue)
    }
  }

  return (
    <Container {...props}>
      <Space mr={4}>
        <Label variant='body' display={label ? 'inherit' : 'none'} width={label ? 3 / 4 : 0}>
          {label}
        </Label>
      </Space>
      <Input
        id={id}
        value={localisedValue}
        placeholder={placeholder}
        variant='questionnaire'
        noBottomSpace
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
