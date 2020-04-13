import React from 'react'
import { Flex } from '@kogaio'
import { Hero, Features } from './components'

const Landing = () => (
  <Flex flexDirection='column'>
    <Hero></Hero>
    <Features></Features>
    <div id='subscribe'>
      <div>
        <h3>Subscribe to our insights</h3>
        <p>It&apos;ll help you to understand whole process as well as save time & cost</p>
      </div>
      <div>
        <form>
          <input type='email'></input>
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  </Flex>
)

export default Landing
