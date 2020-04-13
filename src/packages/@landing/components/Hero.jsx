import React from 'react'
import styled from 'styled-components'
import Typography from '@ivoryio/kogaio/Typography'
import Flex from '@ivoryio/kogaio/Responsive/Flex'
import { Button, Image, Space } from '@kogaio'
import images from '../assets'

const Hero = props => (
  <Space px={4}>
    <Container {...props}>
      <Typography color='dark-grey' variant={{ xs: 'h2', md: 'h1' }} as='title'>
        Divorcy will help you plan and estimate the costs of your divorce
      </Typography>
      <Space mt={6}>
        <Typography color='dark-grey' variant='body'>
          Having a divorce sucks! Divorcy helps you make smart and swift decisions. Sou you can start focusing on your
          future - not your past!
        </Typography>
      </Space>
      <Space mt={8} mx='auto'>
        <Button onClick=''>Get started</Button>
      </Space>
      <Space mt={4}>
        <Typography color='dark-grey' variant='caption'>
          * We use all information very discretly
        </Typography>
      </Space>
      <Image src={images.heroBackgroundImage} objectFit='contain' />
    </Container>
  </Space>
)

const Container = styled(Flex)`
  text-align: center;
  flex-direction: column;
`

export default Hero
