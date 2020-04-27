import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input } from '@kogaio'

import { themed, themeGet } from '@kogaio/utils'

const CurrencyInput = ({ id, value, placeholder, onChange, ...props }) => {
  const MIN = 0

  const handleOnChange = event => {
    event.preventDefault()

    const newValue = event.target.value
    if (newValue >= MIN) {
      onChange(newValue)
    } else {
      onChange(value)
    }
  }
  return (
    <Container {...props}>
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        type='number'
        min={0}
        variant='questionnaire'
        noBottomSpace
        onChange={handleOnChange}
      />
    </Container>
  )
}

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
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default CurrencyInput
