import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Input } from '@kogaio'

import { themed, themeGet } from '@kogaio/utils'

const CurrencyInput = ({ placeholder, value, onChange, ...props }) => (
  <Container {...props}>
    <Input
      variant='questionnaire'
      value={value}
      placeholder={placeholder}
      type='number'
      onChange={onChange}
      noBottomSpace
    />
  </Container>
)

const Container = styled(Flex)`
  ${themed('QuestionnaireInput')};

  position: relative;

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
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default CurrencyInput
