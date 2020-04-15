import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { SubscribeForm } from '.'

const Subscribe = () => (
  <Space mx={-4}>
    <Flex flexDirection='column' alignItems='center' bg='brand'>
      <Space py={12} px={{ xs: 6, md: 16 }}>
        <Container width={1}>
          <Flex flexDirection='column' width={{ xs: 1, md: 1 / 2 }}>
            <Typography variant='h3' textAlign={{ xs: 'center', md: 'left' }} color='white' maxWidth={{ md: '340px' }}>
              Subscribe to our insights
            </Typography>
            <Space mt={2}>
              <Typography
                variant='body'
                textAlign={{ xs: 'center', md: 'left' }}
                color='white'
                maxWidth={{ md: '340px' }}>
                It&apos;ll help you to understand whole process as well as save time & cost
              </Typography>
            </Space>
          </Flex>
          <Space mt={{ xs: 6, md: 0 }} pl={{ md: 4 }}>
            <Box width={{ xs: 1, md: 1 / 2 }}>
              <SubscribeForm />
            </Box>
          </Space>
        </Container>
      </Space>
    </Flex>
  </Space>
)

const Container = styled(Flex)`
  align-items: center;
  flex-wrap: wrap;
  ${themed('LandingContainer')};
`

export default Subscribe
