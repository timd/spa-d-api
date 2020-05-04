import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { ExpectationCosts, SectionDescription } from '.'
import { chargeTypes } from '../constants'

const DivorcyForecast = ({ processStage, costs, t, ...props }) => (
  <Space pb={10} pt={{ xs: 8, md: 14 }}>
    <Flex bg='brand' flexDirection='column' width='100vw' {...props}>
      <Typography color='white' variant={{ xs: 'h3', md: 'h2' }} textAlign='center'>
        {`${t('Your divorcy forecast')}`}
      </Typography>
      <Space mt={{ xs: 4, md: 6 }}>
        <SectionDescription
          color='white'
          firstRowPrefix={t('You are in')}
          boldedText={t(processStage)}
          firstRowSuffix={t('phase')}
          bottomText={t('forecast.subtitle')}
        />
      </Space>
      <Space mt={{ xs: 9, md: 15 }}>
        <ExpectationCosts chargeTypes={chargeTypes(costs)} />
      </Space>
    </Flex>
  </Space>
)

DivorcyForecast.propTypes = {
  costs: PropTypes.shape({}),
  processStage: PropTypes.string,
  t: PropTypes.func,
}

export default withTranslation()(DivorcyForecast)
