import React from 'react'
import { Card, Flex, Space } from '@kogaio'

import { HorizontalTimeline, VerticalTimeline } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'
import { checkpoints } from '../constants'

const DivorceJourney = props => (
  <Space maxWidth={{ md: 600, lg: 1080 }} mx='auto'>
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
          <VerticalTimeline activeIndex={2} checkpoints={checkpoints} height={300} />
        </Card>
      </Space>
      <Space mt={{ xs: 3, md: 7 }} mx='auto'>
        <HorizontalTimeline checkpoints={checkpoints} display={{ xs: 'none', md: 'inherit' }} />
      </Space>
    </Flex>
  </Space>
)

DivorceJourney.propTypes = {}

export default DivorceJourney
