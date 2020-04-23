import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Hide, Space, Typography } from '@kogaio'

import { useBoolean } from '@shared-utils/hooks/useBoolean'
import { normalizeCamelCase } from '@shared-utils/funcs'
import { CollapseTrigger } from '@shared-utils/components'

const DetailedCosts = ({ costs }) => {
  // eslint-disable-next-line no-unused-vars
  const [isCollapsed, _notUsed, toggleDetails] = useBoolean(false)

  return (
    <Flex flexDirection={isCollapsed ? 'column-reverse' : 'column'}>
      <Hide md lg xlg>
        <Space mx='auto' mt={isCollapsed ? 8 : 3}>
          <CollapseTrigger
            isCollapsed={isCollapsed}
            label={isCollapsed ? 'Show less' : 'Show details'}
            onClick={toggleDetails}
          />
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
