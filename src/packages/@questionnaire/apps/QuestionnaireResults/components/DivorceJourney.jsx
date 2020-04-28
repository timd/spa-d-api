import React from 'react'
import { Card, Flex, Hide, Space } from '@kogaio'

import { HorizontalTimeline, VerticalTimeline } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'
import { checkpoints } from '../constants'

const DivorceJourney = props => (
  <Space maxWidth={{ md: 600, lg: 1080 }} mx='auto'>
    <Flex flexDirection='column' width={1} {...props}>
      <Hide xs>
        <TitleWithTooltipInfo
          title='Expectation Cost'
          tooltipInfo={{
            title: 'Expectation Cost?',
            description: "If you don't know exact amount of money, it's fine for now. blah blah...",
          }}
        />
      </Hide>
      <Hide sm md lg xlg>
        <TitleWithTooltipInfo
          arrow={{
            direction: 'bottom',
            alignment: 'top',
          }}
          title='Expectation Cost'
          tooltipInfo={{
            title: 'Expectation Cost?',
            description: "If you don't know exact amount of money, it's fine for now. blah blah...",
          }}
        />
      </Hide>
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
