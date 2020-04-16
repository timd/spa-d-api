import React from 'react'
import { ThemeProvider } from 'styled-components'
import { buildTheme } from '@kogaio/utils'

import Router from './services/navigation/Router'
import { GlobalStyle } from 'assets/GlobalStyle'

import appTheme from 'assets/theme'
import QuestionnaireProvider from './services/QuestionnaireProvider'

const Root = () => (
  <ThemeProvider theme={buildTheme(appTheme)}>
    <QuestionnaireProvider>
      <GlobalStyle />
      <Router />
    </QuestionnaireProvider>
  </ThemeProvider>
)

export default Root
