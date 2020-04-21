import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'

import { ExpectationCosts } from '.'
import { chargeTypes } from '../constants'

const DivorcyForecast = ({ costs, ...props }) => (
  <Space pb={10} pt={{ xs: 8, md: 14 }}>
    <Flex bg='brand' flexDirection='column' width='100vw'>
      <Typography color='white' variant={{ xs: 'h3', md: 'h2' }} textAlign='center'>
        Your divorcy forecast
      </Typography>
      <Space mt={{ xs: 4, md: 6 }}>
        <Description />
      </Space>
      <Space mt={{ xs: 9, md: 15 }}>
        <ExpectationCosts chargeTypes={chargeTypes} />
      </Space>
    </Flex>
  </Space>
)

const Description = props => (
  <>
    <Space mx='auto' px={{ xs: 3, md: 0 }}>
      <Typography
        alignSelf='center'
        color='white'
        display='flex'
        justifyContent='center'
        variant='body'
        width='fit-content'
        {...props}>
        You are in
        <Typography color='white' fontWeight='bold' height='fit-content' width='fit-content'>
          &nbsp;&apos;Getting divorced&apos;&nbsp;
        </Typography>
        phase
      </Typography>
      <Typography color='white' variant='body' textAlign='center'>
        Here&apos;s expected cost & recommendations of next steps.
      </Typography>
    </Space>
  </>
)

DivorcyForecast.propTypes = {
  costs: PropTypes.shape({}),
}

export default DivorcyForecast
