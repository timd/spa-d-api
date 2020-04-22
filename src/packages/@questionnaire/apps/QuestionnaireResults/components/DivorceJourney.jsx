import React from 'react'
import { Flex, Space } from '@kogaio/Responsive'

import { StepProgress } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'

const DivorceJourney = props => (
  <Flex flexDirection='column' width={1} {...props}>
    <TitleWithTooltipInfo
      title='Divorce journey'
      tooltipInfo={{
        title: 'Device journey?',
        description: "If you don't know exact amount of money, it's fine for now. blah blah...",
      }}
    />
    <Space mt={{ xs: 3, md: 7 }}>
      <StepProgress />
    </Space>
  </Flex>
)

DivorceJourney.propTypes = {}

export default DivorceJourney
