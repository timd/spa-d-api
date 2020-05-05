import { circleIconSecondary, circleIconTertiary } from '../assets'

export const chargeTypes = ({ oneTimeCosts, ongoingCosts }, t) => [
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
    name: 'Ongoing Costs',
    costs: ongoingCosts.reduce((acc, item, index) => {
      acc[`${t('Kid')} ${index + 1}`] = item
      return acc
    }, {}),
    description: 'You pay monthly',
    icon: circleIconSecondary,
  },
]
