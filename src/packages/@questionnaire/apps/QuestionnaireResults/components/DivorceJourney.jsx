import React from 'react'
import { Card, Flex, Space } from '@kogaio'

import { HorizontalTimeline, VerticalTimeline } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'

const checkpoints = [
  {
    id: 'checkpoint-1',
    title: 'Marriage Crisis',
    description: '',
    progress: '0%',
    collapseHeight: {
      md: 96,
      lg: 136,
    },
  },
  {
    id: 'checkpoint-2',
    title: 'Split Up',
    description: '',
    progress: '25%',
    collapseHeight: {
      md: 96,
      lg: 136,
    },
  },
  {
    id: 'checkpoint-3',
    title: 'Getting Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: '50%',
    collapseHeight: {
      md: 96,
      lg: 136,
    },
  },
  {
    id: 'checkpoint-4',
    title: 'Being Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: '100%',
    collapseHeight: {
      md: 96,
      lg: 136,
    },
  },
]

const mobileCheckpoints = [
  {
    id: 'checkpoint-1',
    title: 'Marriage Crisis',
    description: '',
    progress: 0,
  },
  {
    id: 'checkpoint-2',
    title: 'Split Up',
    description: '',
    progress: 0.25,
  },
  {
    id: 'checkpoint-3',
    title: 'Getting Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: 0.5,
  },
  {
    id: 'checkpoint-4',
    title: 'Being Divorced',
    description: 'Definition about this phase. What do they need to do mainly  & how long it will take time',
    progress: 1,
    collapseHeight: 96,
  },
]

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
          <VerticalTimeline checkpoints={mobileCheckpoints} height={300} />
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
