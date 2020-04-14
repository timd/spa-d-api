import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const TextLogo = () => (
  <LandingLink
    as='a'
    variant={{ xs: 'textLogoMobile', md: 'textLogoDesktop' }}
    onClick={e => {
      e.preventDefault()
      navigate('/')
    }}>
    Divorcy
  </LandingLink>
)

const LandingLink = styled(Typography)`
  color: ${themeGet('colors.brand')};
  cursor: pointer;
  text-decoration: none;
`

export default TextLogo
