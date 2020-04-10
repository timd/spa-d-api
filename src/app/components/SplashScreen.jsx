import React from 'react'
import styled from 'styled-components'
import loadingMessages from '../constants/loadingMessages'

const SplashScreen = () => (
  <Container>
    {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
  </Container>
)

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-family: Rubik, Verdana, Geneva, Tahoma, sans-serif;
`

export default SplashScreen
