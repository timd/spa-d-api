import React from 'react'
import { Router } from '@reach/router'
import { Flex } from '@kogaio'
import styled from 'styled-components'

import { Header } from 'app/components'
import { Landing as LandingScreen, NotFound } from 'app/screens'

const AppRouter = () => (
  <Wrapper id='app-body' role='app-body'>
    <Header />
    {/* Set to false to prevent dumb scroll on navigation */}
    <Router primary={false}>
      <LandingScreen path='/' />
      <NotFound default />
    </Router>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: 100%;
  transition: margin 330ms cubic-bezier(0.32, 1.25, 0.375, 1.15);
`

export default AppRouter
