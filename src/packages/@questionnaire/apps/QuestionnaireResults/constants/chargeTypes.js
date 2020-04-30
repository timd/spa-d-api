import { circleIconSecondary, circleIconTertiary } from '../assets'

export const chargeTypes = oneTimeCosts => [
  {
    id: 'one-time',
    name: 'One time',
    costs: {
      lawyer: oneTimeCosts.lawyer,
      familyCourt: oneTimeCosts.court,
    },
    description: 'You pay at the beginning',
    icon: circleIconTertiary,
  },
  {
    id: 'monthly',
    name: 'Monthly',
    costs: {},
    description: 'You pay for 12 months',
    icon: circleIconSecondary,
  },
]
