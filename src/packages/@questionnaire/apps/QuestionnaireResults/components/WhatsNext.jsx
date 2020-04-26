import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Button, Card, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const WhatsNext = props => (
  <Space px={4} py={6}>
    <Card display='flex' flexDirection='column' variant='next' {...props}>
      <SectionTitle variant='sh3'>What&apos;s next</SectionTitle>
      <Space mt={2}>
        <Typography color='dark-grey' variant='body'>
          After assessment we recommends some following steps that can help you to process further...
        </Typography>
      </Space>
      <Space mt={8} mx='auto'>
        <Button title='Check what to do next' onClick={() => navigate('/recommendations')} width={1} />
      </Space>
      <Space mt={4} mx='auto'>
        <Button title='Send me the result' onClick={() => {}} variant='outline' width={1} />
      </Space>
    </Card>
  </Space>
)

const SectionTitle = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
`

export default WhatsNext
