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
    <Space maxWidth={{ md: 'auto', lg: 1080 }} mx='auto'>
      <Flex flexDirection='column' width={1} {...props}>
        <Hide xs>
          <TitleWithTooltipInfo
            title={t('Divorce journey')}
            tooltipInfo={{
              title: `${t('Divorce journey')}?`,
              description: t("If you don't know exact amount of money, it's fine for now. blah blah..."),
            }}
            tooltipSpacing={{
              ml: { xs: 0, sm: '99px' },
              top: { xs: '-140px', sm: '-116px' },
            }}
          />
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
              description: t("If you don't know exact amount of money, it's fine for now. blah blah..."),
            }}
            tooltipSpacing={{
              ml: { xs: 0, sm: '-99px' },
              top: { xs: '-140px', sm: '-116px' },
            }}
          />
        </Hide>
        <Space mt={{ xs: 3, md: 7 }} p={6}>
          <Card display={{ md: 'none' }} minHeight={324} variant='journey'>
            <VerticalTimeline
              activeIndex={activeTimelineIdx !== -1 ? activeTimelineIdx : 0}
              checkpoints={checkpoints}
              height={500}
            />
          </Card>
        </Space>
        <Space mt={{ xs: 3, md: 7 }} mx='auto'>
          <HorizontalTimeline
            // activeIndex={activeTimelineIdx !== -1 ? activeTimelineIdx : 0}
            activeIndex={1}
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
