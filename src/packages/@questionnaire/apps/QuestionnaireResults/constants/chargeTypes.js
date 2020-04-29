import { circleIconSecondary, circleIconTertiary } from '../assets'

export const chargeTypes = [
    {
      id: 'one-time',
      name: 'One time',
      costs: {
        lawyer: 2500,
        notary: 700,
        familyCourt: 800,
      },
      description: 'You pay at the beginning',
      icon: circleIconTertiary
    },
    {
      id: 'monthly',
      name: 'Monthly',
      costs: {
        lawyer: 2500,
        notary: 700,
        familyCourt: 800,
      },
      description: 'You pay for 12 months',
      icon: circleIconSecondary
    },
  ]
  