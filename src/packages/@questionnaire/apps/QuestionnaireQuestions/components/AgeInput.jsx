import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { themeGet } from '@kogaio/utils'
import Space from '@ivoryio/kogaio/Responsive/Space'

const AgeInput = ({ id, value, label, placeholder, onValueChange, t, ...props }) => {
  const [MIN, MAX] = [0, 99]

  const handleOnChange = event => {
    event.preventDefault()

    let newValue = event.target.value
    if (!newValue) {
      onValueChange(newValue)
    }

    newValue = parseInt(newValue)
    if (newValue >= MIN && newValue <= MAX) {
      onValueChange(newValue)
    }
  }
  return (
    <Container inputSuffix={t('years')} {...props}>
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
    content: '${props => props.inputSuffix}';
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
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onValueChange: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation()(AgeInput)
