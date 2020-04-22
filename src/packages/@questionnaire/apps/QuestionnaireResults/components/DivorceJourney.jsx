import React from 'react'
import { Flex } from '@kogaio'

import { StepProgress } from '@shared-utils/components'

const DivorceJourney = props => (
    <Flex flexDirection='column' width={1} {...props}>
      <StepProgress />
    </Flex>
  )

DivorceJourney.propTypes = {}

export default DivorceJourney
