import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, IconButton, Space, Tooltip, Typography } from '@kogaio'

import { useBoolean } from '@shared-utils/hooks/useBoolean'
import { ExpandableCostCard } from '.'

const ExpectationCosts = ({ chargeTypes, ...props }) => {
  const [isTooltipShown, setTooltipShown] = useBoolean()

  const _showTooltip = () => setTooltipShown(true)
  const _hideTooltip = () => setTooltipShown(false)

  return (
    <Space mx='auto' px={{ xs: 4, md: 0 }}>
      <Flex flexDirection='column' maxWidth={{ md: 780 }} width={1} {...props}>
        <Flex alignItems='center' position='relative'>
          <Space ml={{ md: 3 }}>
            <Typography color='white' variant='super-title'>
              Expectation Costs
            </Typography>
          </Space>
          <Space ml={2}>
            <IconButton color='headerShadow' name='help' onClick={_showTooltip} fontSize={3} />
          </Space>
          {isTooltipShown && (
            <Space ml={{ xs: 28, md: 31 }}>
              <Tooltip
                arrow={{ direction: 'bottom', alignment: 'left' }}
                borderRadius={4}
                boxShadow='tooltip-white'
                visible
                width={1}
                maxWidth={{ xs: '264px', md: '320px' }}
                position='absolute'
                top='-116px'>
                <Flex alignItems='center' justifyContent='space-between'>
                  <Typography color='brand' fontWeight='bold' variant='tooltip'>
                    Expectation Cost?
                  </Typography>
                  <IconButton color='dark-grey' fontSize={3} name='close' onClick={_hideTooltip} />
                </Flex>
                <Space mt={1}>
                  <Typography color='dark-grey' variant='tooltip'>
                    If you don&apos;t know exact amount of money, it&apos;s fine for now. blah blah..
                  </Typography>
                </Space>
              </Tooltip>
            </Space>
          )}
        </Flex>
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
          <Typography color='white' variant='caption'>
            * It&apos;s average cost based on your condition
          </Typography>
        </Space>
      </Flex>
    </Space>
  )
}
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
}

export default ExpectationCosts
