import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Hide, Icon, Space, Typography, Touchable } from '@kogaio'
import { themeGet } from '@kogaio/utils'

import { useBoolean } from '@shared-utils/hooks/useBoolean'
import { normalizeCamelCase } from '@shared-utils/funcs'

const DetailedCosts = ({ costs }) => {
  // eslint-disable-next-line no-unused-vars
  const [isCollapsed, _notUsed, toggleDetails] = useBoolean(false)

  return (
    <Flex flexDirection={isCollapsed ? 'column-reverse' : 'column'}>
      <Hide md lg xlg>
        <Space mx='auto' mt={isCollapsed ? 8 : 3}>
          <Touchable effect='opacity' onClick={toggleDetails}>
            <Flex alignItems='center'>
              <CollapseTitle variant='caption'>{isCollapsed ? 'Show less' : 'Show details'}</CollapseTitle>
              <Space ml={2}>
                <Icon color='brand' name={isCollapsed ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
              </Space>
            </Flex>
          </Touchable>
        </Space>
      </Hide>
      <Hide md lg xlg>
        <Space mt={2}>{isCollapsed && <ExpectationCosts costs={costs} />}</Space>
      </Hide>
      <Hide xs sm>
        <Space mt={4}>
          <ExpectationCosts costs={costs} />
        </Space>
      </Hide>
    </Flex>
  )
}

const ExpectationCosts = ({ costs, ...props }) => (
  <Flex flexDirection='column' {...props}>
    {Object.keys(costs).map(keyName => (
      <Space key={keyName} mt={2}>
        <Flex justifyContent='space-between'>
          <Typography color='dark-grey' variant='body'>
            {normalizeCamelCase(keyName)}
          </Typography>
          <Typography color='dark-grey' variant='body'>
            {costs[keyName]}
          </Typography>
        </Flex>
      </Space>
    ))}
  </Flex>
)

const CollapseTitle = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
`

ExpectationCosts.propTypes = {
  costs: PropTypes.shape({
    familyCourt: PropTypes.number,
    lawyer: PropTypes.number,
    notary: PropTypes.number,
  }),
}

DetailedCosts.propTypes = {
  costs: PropTypes.shape({
    familyCourt: PropTypes.number,
    lawyer: PropTypes.number,
    notary: PropTypes.number,
  }),
}

export default DetailedCosts
