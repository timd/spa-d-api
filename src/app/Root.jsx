import React from 'react'
import { ThemeProvider } from 'styled-components'
import { buildTheme } from '@kogaio/utils'

import Router from './services/navigation/Router'
import { GlobalStyle } from 'assets/GlobalStyle'

import appTheme from 'assets/theme'

const Root = () => (
  <ThemeProvider theme={buildTheme(appTheme)}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
)

export default Root
