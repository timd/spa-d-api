import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Image, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import images from '../assets'

const Hero = props => (
  <Space mx={{ md: 'auto' }} pb={{ xs: 0, md: 30 }}>
    <Container {...props}>
      <Typography color='dark-grey' maxWidth='640px' variant={{ xs: 'h2', md: 'h1' }} as='title'>
        Divorcy will help you plan and estimate the costs of your divorce
      </Typography>
      <Space mt={6}>
        <Typography color='dark-grey' maxWidth='640px' variant='body'>
          Having a divorce sucks! Divorcy helps you make smart and swift decisions. Sou you can start focusing on your
          future - not your past!
        </Typography>
      </Space>
      <Space mt={8} mx='auto'>
        <Button onClick=''>Get started</Button>
      </Space>
      <Space mt={4}>
        <Typography color='dark-grey' maxWidth='640px' variant='caption'>
          * We use all information very discretly
        </Typography>
      </Space>
      <Image display={{ md: 'none' }} objectFit='contain' src={images.heroImageMobile} width='100%' />
      <Image
        bottom={0}
        display={{ xs: 'none', md: 'inherit' }}
        position={{ xs: 'inherit', md: 'absolute' }}
        src={images.heroImageDesktop}
        objectFit='contain'
        width='100%'
        zIndex={-1}
      />
    </Container>
  </Space>
)

const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;
  ${themed('LandingContainer')}
`

export default Hero
