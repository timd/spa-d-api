import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const CurrencyInput = ({ id, value, placeholder, onChange, ...props }) => {
  const MIN = 0

  const localize = value => value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  const normalize = value => value.replace(/,/g, '')

  const handleOnChange = event => {
    event.preventDefault()

    let newValue = event.target.value ?? ''
    newValue = normalize(newValue)
    newValue = parseInt(newValue) || 0

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
        value={localize(value || '')}
        placeholder={placeholder}
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
