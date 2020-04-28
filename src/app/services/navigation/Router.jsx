import React from 'react'
import { Router } from '@reach/router'
import { Flex, Space } from '@kogaio/Responsive'
import styled from 'styled-components'

import { Header } from 'app/components'
import { ScrollToTop } from './ScrollToTop'
import {
  Landing as LandingScreen,
  NotFound,
  QuestionnaireQuestions,
  QuestionnaireResults,
  Imprint,
  Conditions,
  DataProtection,
  Recommendations,
} from 'app/screens'

const AppRouter = () => (
  <Space px={4}>
    <Wrapper id='app-body' role='app-body'>
      <Header />
      {/* Set to false to prevent dumb scroll on navigation */}
      <Router primary={false}>
        <ScrollToTop path='/'>
          <LandingScreen path='/' />
          <Imprint path='/imprint' />
          <Conditions path='/conditions' />
          <DataProtection path='/data-protection' />
          <QuestionnaireQuestions path='/questionnaire' />
          <QuestionnaireResults path='/questionnaire/results' />
          <Recommendations path='/recommendations' />
          <NotFound default />
        </ScrollToTop>
      </Router>
    </Wrapper>
  </Space>
)

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: 100%;
  transition: margin 330ms cubic-bezier(0.32, 1.25, 0.375, 1.15);
`

export default AppRouter
