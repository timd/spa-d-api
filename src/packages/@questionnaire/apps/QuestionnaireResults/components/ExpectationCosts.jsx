import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, IconButton, Space, Typography } from '@kogaio'

import { ExpandableCostCard } from '.'

const ExpectationCosts = ({ chargeTypes, ...props }) => (
  <Space mx='auto' px={{ xs: 4, md: 0 }}>
    <Flex flexDirection='column' maxWidth={{ md: 780 }} width={1} {...props}>
      <Flex alignItems='center'>
        <Space ml={{ md: 3 }}>
          <Typography color='white' variant='super-title'>
            Expectation Costs
          </Typography>
        </Space>
        <Space ml={2}>
          <IconButton color='headerShadow' name='help' fontSize={3} />
        </Space>
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
