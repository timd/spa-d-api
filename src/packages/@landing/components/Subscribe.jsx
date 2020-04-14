import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { SubscribeForm } from '.'

const Subscribe = () => (
  <Space mx={-4}>
    <Flex flexDirection='column' alignItems='center' bg='brand'>
      <Space py={12} px={{ xs: 4, md: 16 }}>
        <Container width={1}>
          <Flex flexDirection='column' width={{ xs: 1, md: 1 / 2 }}>
            <Typography variant='h3' color='white' maxWidth={{ md: '340px' }}>
              Subscribe to our insights
            </Typography>
            <Space mt={2}>
              <Typography variant='body' color='white' maxWidth={{ md: '340px' }}>
                Money is unfortunately a big topic. With just a little information, we can estimate the one time and
                ongoing cost you have to bear or the alimony you receive.
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
