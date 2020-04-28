import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input, Typography } from '@kogaio'

import { themeGet } from '@kogaio/utils'
import Space from '@ivoryio/kogaio/Responsive/Space'

const AgeInput = ({ id, value, label, placeholder, onChange, ...props }) => {
  const [MIN, MAX] = [0, 99]

  const handleOnChange = event => {
    event.preventDefault()

    const newValue = parseInt(event.target.value) || 0
    if (newValue >= MIN && newValue <= MAX) {
      onChange(newValue)
    }
  }

  return (
    <Container {...props}>
      <Space mr={4}>
        <Label variant='body'>{label}</Label>
      </Space>
      <Input
        id={id}
        value={value}
        min={MIN}
        max={MAX}
        placeholder={placeholder}
        type='number'
        variant='questionnaire'
        width='auto'
        minWidth='120px'
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
  justify-content: flex-end;

  input {
    padding-right: 56px;
  }

  :after {
    font-family: ${themeGet('fonts.complementary')};
    display: block;
    color: ${themeGet('colors.brand')};
    content: 'years';
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
  }
`

AgeInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default AgeInput
