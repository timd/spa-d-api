import React from 'react'
import { Flex } from '@kogaio'
import { Hero, Features, Subscribe } from './components'

const Landing = () => (
  <Flex flexDirection='column'>
    <Hero></Hero>
    <Features></Features>
    <Subscribe></Subscribe>
  </Flex>
)

export default Landing
