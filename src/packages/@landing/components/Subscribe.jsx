import React from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'
import { themeGet } from '@kogaio/utils'
import Typography from '@ivoryio/kogaio/Typography'
import { themed } from '@ivoryio/kogaio/utils/helpers'

const Features = () => (
  <Space mx={-4}>
    <Flex flexDirection='column' alignItems='center' bg='brand'>
      <Space py={12} px={{ xs: 4, md: 16 }}>
        <Container>
          <Flex flexDirection='column' width={{ xs: 1, md: 1 / 2 }}>
            <Typography variant='h3' color='white'>
              Why Divorcy?
            </Typography>
            <Space mt={2}>
              <Typography variant='body' color='white'>
                Money is unfortunately a big topic. With just a little information, we can estimate the one time and
                ongoing cost you have to bear or the alimony you receive.
              </Typography>
            </Space>
          </Flex>
        </Container>
      </Space>
    </Flex>
  </Space>
)

const Container = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  ${themed('LandingContainer')};
`

export default Features
