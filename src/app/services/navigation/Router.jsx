import React from 'react'
import { Router } from '@reach/router'
import { Flex, Space } from '@kogaio/Responsive'
import styled from 'styled-components'

import { Header } from 'app/components'
import {
  Landing as LandingScreen,
  NotFound,
  QuestionnaireQuestions,
  QuestionnaireResults,
  Imprint,
  Conditions,
  DataProtection,
  AboutUs,
} from 'app/screens'

const AppRouter = () => (
  <Space px={4}>
    <Wrapper id='app-body' role='app-body'>
      <Header />
      {/* Set to false to prevent dumb scroll on navigation */}
      <Router primary={false}>
        <LandingScreen path='/' />
        <Imprint path='/imprint' />
        <Conditions path='/conditions' />
        <DataProtection path='/data-protection' />
        <AboutUs path='/about-us' />
        <QuestionnaireQuestions path='/questionnaire' />
        <QuestionnaireResults path='/questionnaire/results' />
        <NotFound default />
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
