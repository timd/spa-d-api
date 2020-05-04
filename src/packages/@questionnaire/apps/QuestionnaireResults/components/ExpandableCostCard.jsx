import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Card, Flex, Image, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'
import { themeGet } from '@kogaio/utils'

import { DashedLine, DetailedCosts } from '.'
import { localize } from '../../../services'

const ExpandableCostCard = ({ costs, chargeType, description, iconSrc, t, ...props }) => {
  const totalCost = Object.values(costs).reduce((counter, cost) => counter + cost, 0)

  return (
    <Space px={{ xs: 4, md: 6 }} pb={{ xs: 3, md: 6 }} pt={{ xs: 2, md: 6 }}>
      <Card display='flex' flexDirection='column' position='relative' variant='white' {...props}>
        <Flex alignItems='center' justifyContent='space-between' position='relative'>
          <Box>
            <ChargeType variant='sh3'>{t(chargeType)}</ChargeType>
            <Space mt={4}>
              <Description variant='super-title'>{t(description)}</Description>
            </Space>
          </Box>
          <Image src={iconSrc} size={80} />
          <Flex
            flexDirection='column'
            minWidth={80}
            position='absolute'
            right={0}
            bottom='auto'
            top='auto'
            textAlign='center'>
            <Typography color='dark-grey' fontWeight='bold' variant='sh1'>
              {localize(totalCost)} &euro;
            </Typography>
            {chargeType === 'Monthly' && (
              <Space mt={1}>
                <Typography color='dark-grey' variant='caption'>
                  {t('per month')}
                </Typography>
              </Space>
            )}
          </Flex>
        </Flex>
        <Space mt={6}>
          <DashedLine />
        </Space>
        <DetailedCosts costs={costs} />
      </Card>
    </Space>
  )
}

const ChargeType = styled(Typography)`
  color: ${themeGet('colors.brand')};
  font-weight: ${themeGet('fontWeights.bold')};
`

const Description = styled(Typography)`
  font-weight: ${themeGet('fontWeights.regular')};
`

ExpandableCostCard.propTypes = {
  costs: PropTypes.shape({
    familyCourt: PropTypes.number,
    lawyer: PropTypes.number,
    notary: PropTypes.number,
  }),
  chargeType: PropTypes.oneOf(['One time', 'Monthly']),
  description: PropTypes.string,
  iconSrc: PropTypes.string,
  t: PropTypes.func,
}

export default withTranslation()(ExpandableCostCard)
