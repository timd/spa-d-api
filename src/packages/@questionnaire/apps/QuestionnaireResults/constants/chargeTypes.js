import { circleIconSecondary, circleIconTertiary } from '../assets'

export const chargeTypes = ({ oneTimeCosts, ongoingCosts }) => [
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
    costs: ongoingCosts.reduce((acc, item, index) => {
      acc[`Kid ${index + 1}`] = item
      return acc
    }, {}),
    description: 'You pay for 12 months',
    icon: circleIconSecondary,
  },
]
