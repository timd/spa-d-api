import React from 'react'
import PropTypes from 'prop-types'
import { Card, Flex, Hide, Space } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { HorizontalTimeline, VerticalTimeline } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'
import { checkpoints } from '../constants'

const DivorceJourney = ({ processStage, t, ...props }) => {
  const activeTimelineIdx = checkpoints.findIndex(checkpoint => checkpoint.id === processStage)

  return (
    <Space mx='auto'>
      <Flex flexDirection='column' maxWidth={{ md: 'auto', lg: 1440 }} width={1} {...props}>
        <Hide xs>
          <Space ml={{ sm: 0, md: '12.5%' }}>
            <TitleWithTooltipInfo
              title={t('Divorce journey')}
              tooltipInfo={{
                title: `${t('Divorce journey')}`,
                description: t('result.journeytooltip'),
              }}
              tooltipSpacing={{
                ml: { xs: 0, sm: '147px' },
                top: { xs: '-140px', sm: '-160px' },
              }}
            />
          </Space>
        </Hide>
        <Hide sm md lg xlg>
          <TitleWithTooltipInfo
            arrow={{
              direction: 'bottom',
              alignment: 'top',
            }}
            title={t('Divorce journey')}
            tooltipInfo={{
              title: `${t('Divorce journey')}?`,
              description: t('result.journeytooltip'),
            }}
            tooltipSpacing={{
              ml: { xs: 0, sm: '-147px' },
              top: { xs: '-140px', sm: '-160px' },
            }}
          />
        </Hide>
        <Space mt={{ xs: 3, md: 7 }} p={6}>
          <Card display={{ md: 'none' }} variant='journey'>
            <VerticalTimeline
              activeIndex={activeTimelineIdx !== -1 ? activeTimelineIdx : 1}
              checkpoints={checkpoints}
            />
          </Card>
        </Space>
        <Space mt={{ xs: 3, md: 7 }} mx='auto'>
          <HorizontalTimeline
            activeIndex={activeTimelineIdx !== -1 ? activeTimelineIdx : 0}
            checkpoints={checkpoints}
            display={{ xs: 'none', md: 'inherit' }}
          />
        </Space>
      </Flex>
    </Space>
  )
}
DivorceJourney.propTypes = { processStage: PropTypes.string, t: PropTypes.func }

export default withTranslation()(DivorceJourney)
