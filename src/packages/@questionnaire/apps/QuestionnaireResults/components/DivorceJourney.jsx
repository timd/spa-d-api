import React from 'react'
import PropTypes from 'prop-types'
import { Card, Flex, Hide, Space } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { HorizontalTimeline, VerticalTimeline } from '@shared-utils/components'
import { TitleWithTooltipInfo } from '.'
import { checkpoints } from '../constants'

const DivorceJourney = ({ t, ...props }) => (
  <Space maxWidth={{ md: 600, lg: 1080 }} mx='auto'>
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
          <VerticalTimeline activeIndex={2} checkpoints={checkpoints} height={300} />
        </Card>
      </Space>
      <Space mt={{ xs: 3, md: 7 }} mx='auto'>
        <HorizontalTimeline checkpoints={checkpoints} display={{ xs: 'none', md: 'inherit' }} />
      </Space>
    </Flex>
  </Space>
)

DivorceJourney.propTypes = { t: PropTypes.func }

export default withTranslation()(DivorceJourney)