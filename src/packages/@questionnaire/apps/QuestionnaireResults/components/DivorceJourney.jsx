import React from 'react'
import { Card, Flex, Space } from '@kogaio'

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
    <Space mt={{ xs: 3, md: 7 }} p={6}>
      <Card display={{ md: 'none' }} minHeight={324} variant='journey'>
        <StepProgress isRow={false} maxWidth={300} />
      </Card>
    </Space>
    <Space mt={{ xs: 3, md: 7 }}>
      <StepProgress display={{ xs: 'none', md: 'inherit' }} isRow maxWidth={{ md: 1080, lg: 1280 }} />
    </Space>
  </Flex>
)

DivorceJourney.propTypes = {}

export default DivorceJourney
