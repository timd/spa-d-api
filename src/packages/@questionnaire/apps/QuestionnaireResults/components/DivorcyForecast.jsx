import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'

import { ExpectationCosts, SectionDescription } from '.'
import { chargeTypes } from '../constants'

const DivorcyForecast = ({ costs, ...props }) => (
  <Space pb={10} pt={{ xs: 8, md: 14 }}>
    <Flex bg='brand' flexDirection='column' width='100vw' {...props}>
      <Typography color='white' variant={{ xs: 'h3', md: 'h2' }} textAlign='center'>
        Your divorcy forecast
      </Typography>
      <Space mt={{ xs: 4, md: 6 }}>
        <SectionDescription
          color='white'
          firstRowPrefix='You are in'
          boldedText="'Getting divorced'"
          firstRowSuffix='phase'
          bottomText="Here's expected cost & recommendations of next steps."
        />
      </Space>
      <Space mt={{ xs: 9, md: 15 }}>
        <ExpectationCosts chargeTypes={chargeTypes} />
      </Space>
    </Flex>
  </Space>
)

DivorcyForecast.propTypes = {
  costs: PropTypes.shape({}),
}

export default DivorcyForecast
