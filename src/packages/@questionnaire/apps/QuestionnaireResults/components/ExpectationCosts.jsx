import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Hide, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { ExpandableCostCard, TitleWithTooltipInfo } from '.'

const ExpectationCosts = ({ chargeTypes, t, ...props }) => (
  <Space mx='auto' px={{ xs: 4, md: 0 }}>
    <Flex flexDirection='column' maxWidth={{ md: 780 }} width={1} {...props}>
      <Hide xs>
        <Space ml={{ md: 3 }}>
          <TitleWithTooltipInfo
            title={t('Expectation Cost')}
            titleColor='white'
            tooltipInfo={{
              title: `${t('Expectation Cost')}`,
              description: t('result.tooltip'),
            }}
          />
        </Space>
      </Hide>
      <Hide sm md lg xlg>
        <Space ml={{ md: 3 }}>
          <TitleWithTooltipInfo
            arrow={{
              direction: 'bottom',
              alignment: 'top',
            }}
            title={t('Expectation Cost')}
            titleColor='white'
            tooltipInfo={{
              title: `${t('Expectation Cost')}`,
              description: t('result.tooltip'),
            }}
          />
        </Space>
      </Hide>
      <Space mt={{ xs: 3, md: 5 }}>
        <Flex flexWrap='wrap'>
          {chargeTypes.map((chargeType, idx) => (
            <Space key={chargeType.id} px={{ xs: 0, md: 3 }} mt={{ xs: idx === 1 ? 4 : 0, md: 0 }}>
              <Box width={{ xs: 1, md: 1 / 2 }}>
                <ExpandableCostCard
                  chargeType={chargeType.name}
                  costs={chargeType.costs}
                  description={chargeType.description}
                  iconSrc={chargeType.icon}
                />
              </Box>
            </Space>
          ))}
        </Flex>
      </Space>
      <Space ml={{ md: 3 }} mt={1}>
        <Typography color='white' variant='body' fontWeight='bold'>
          {t('result.disclaimer')}
        </Typography>
      </Space>
    </Flex>
  </Space>
)
ExpectationCosts.propTypes = {
  chargeTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      costs: PropTypes.shape({
        familyCourt: PropTypes.number,
        lawyer: PropTypes.number,
        notary: PropTypes.number,
      }),
      icon: PropTypes.string,
    })
  ),
  t: PropTypes.func,
}

export default withTranslation()(ExpectationCosts)
