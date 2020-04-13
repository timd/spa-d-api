import React from 'react'
import { Flex } from '@kogaio'
import { Hero } from './components'

const Landing = () => (
  <Flex flexDirection='column'>
    <Hero></Hero>
    <div id='featured'>
      <h1>Why Divorcy?</h1>
      <div>
        <article>
          <img url='' alt='' />
          <h2>Understanding</h2>
          <p>
            The reason for your divorce? That’s not our business. But to give you personalized recommendations, we need
            to understand your current situation with just a couple of clicks.
          </p>
        </article>
        <article>
          <img url='' alt='' />
          <h2>Calculating</h2>
          <p>
            Money is unfortunately a big topic. With just a little information, we can estimate the one time and ongoing
            cost you have to bear or the alimony you receive.
          </p>
        </article>
        <article>
          <img url='' alt='' />
          <h2>Action</h2>
          <p>Get your individual results incl. tailored recommendations and clear next steps.</p>
        </article>
      </div>
    </div>
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
