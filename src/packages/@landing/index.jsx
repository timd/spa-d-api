import React from 'react'
import { Space } from '@kogaio'
import { Hero, Features, Subscribe } from './components'

const Landing = () => (
  <>
    <Space mt={7}>
      <Hero />
    </Space>
    <Features />
    <Subscribe />
  </>
)

export default Landing
