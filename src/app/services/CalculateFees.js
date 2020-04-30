const LAWYER_FEES = [
  { start: 0.0, end: 499.99, fee: 45.0 },
  { start: 500.0, end: 999.99, fee: 80 },
  { start: 1000.0, end: 1499.99, fee: 115.0 },
  { start: 1500.0, end: 1999.99, fee: 150.0 },
  { start: 2000.0, end: 2999.99, fee: 201.0 },
  { start: 3000.0, end: 3999.99, fee: 252.0 },
  { start: 4000.0, end: 4999.99, fee: 303.0 },
  { start: 5000.0, end: 5999.99, fee: 354.0 },
  { start: 6000.0, end: 6999.99, fee: 405.0 },
  { start: 7000.0, end: 7999.99, fee: 456.0 },
  { start: 8000.0, end: 8999.99, fee: 507.0 },
  { start: 9000.0, end: 9999.99, fee: 558.0 },
  { start: 10000.0, end: 12999.99, fee: 604.0 },
  { start: 13000.0, end: 15999.99, fee: 650.0 },
  { start: 16000.0, end: 18999.99, fee: 696.0 },
  { start: 19000.0, end: 21999.99, fee: 742.0 },
  { start: 22000.0, end: 24999.99, fee: 788.0 },
  { start: 25000.0, end: 29999.99, fee: 863.0 },
  { start: 30000.0, end: 34999.99, fee: 938.0 },
  { start: 35000.0, end: 39999.99, fee: 1013.0 },
  { start: 40000.0, end: 44999.99, fee: 1088.0 },
  { start: 45000.0, end: 49999.99, fee: 1163.0 },
  { start: 50000.0, end: 64999.99, fee: 1248.0 },
  { start: 65000.0, end: 79999.99, fee: 1333.0 },
  { start: 80000.0, end: 94999.99, fee: 1418.0 },
  { start: 95000.0, end: 109999.99, fee: 1503.0 },
  { start: 110000.0, end: 124999.99, fee: 1588.0 },
  { start: 125000.0, end: 139999.99, fee: 1673.0 },
  { start: 140000.0, end: 154999.99, fee: 1758.0 },
  { start: 155000.0, end: 169999.99, fee: 1843.0 },
  { start: 170000.0, end: 184999.99, fee: 1928.0 },
  { start: 185000.0, end: 199999.99, fee: 2013.0 },
  { start: 200000.0, end: 229999.99, fee: 2133.0 },
  { start: 230000.0, end: 259999.99, fee: 2253.0 },
  { start: 260000.0, end: 290000.99, fee: 2373.0 },
  { start: 290001.0, end: 319999.99, fee: 2493.0 },
  { start: 320000.0, end: 349999.99, fee: 2613.0 },
  { start: 350000.0, end: 379999.99, fee: 2733.0 },
  { start: 380000.0, end: 409999.99, fee: 2853.0 },
  { start: 410000.0, end: 439999.99, fee: 2973.0 },
  { start: 440000.0, end: 469999.99, fee: 3093.0 },
  { start: 470000.0, end: 499999.99, fee: 3213.0 },
]

const COURT_FEES = [
  { start: 0.0, end: 499.99, fee: 35.0 },
  { start: 500.0, end: 999.99, fee: 53.0 },
  { start: 1000.0, end: 1499.99, fee: 71.0 },
  { start: 1500.0, end: 1999.99, fee: 89.0 },
  { start: 2000.0, end: 2999.99, fee: 108.0 },
  { start: 3000.0, end: 3999.99, fee: 127.0 },
  { start: 4000.0, end: 4999.99, fee: 146.0 },
  { start: 5000.0, end: 5999.99, fee: 165.0 },
  { start: 6000.0, end: 6999.99, fee: 184.0 },
  { start: 7000.0, end: 7999.99, fee: 203.0 },
  { start: 8000.0, end: 8999.99, fee: 222.0 },
  { start: 9000.0, end: 9999.99, fee: 241.0 },
  { start: 10000.0, end: 12999.99, fee: 267.0 },
  { start: 13000.0, end: 15999.99, fee: 293.0 },
  { start: 16000.0, end: 18999.99, fee: 319.0 },
  { start: 19000.0, end: 21999.99, fee: 345.0 },
  { start: 22000.0, end: 24999.99, fee: 371.0 },
  { start: 25000.0, end: 29999.99, fee: 406.0 },
  { start: 30000.0, end: 34999.99, fee: 441.0 },
  { start: 35000.0, end: 39999.99, fee: 476.0 },
  { start: 40000.0, end: 44999.99, fee: 511.0 },
  { start: 45000.0, end: 49999.99, fee: 546.0 },
  { start: 50000.0, end: 64999.99, fee: 666.0 },
  { start: 65000.0, end: 79999.99, fee: 786.0 },
  { start: 80000.0, end: 94999.99, fee: 906.0 },
  { start: 95000.0, end: 109999.99, fee: 1026.0 },
  { start: 110000.0, end: 124999.99, fee: 1146.0 },
  { start: 125000.0, end: 139999.99, fee: 1266.0 },
  { start: 140000.0, end: 154999.99, fee: 1386.0 },
  { start: 155000.0, end: 169999.99, fee: 1506.0 },
  { start: 170000.0, end: 184999.99, fee: 1626.0 },
  { start: 185000.0, end: 199999.99, fee: 1746.0 },
  { start: 200000.0, end: 229999.99, fee: 1925.0 },
  { start: 230000.0, end: 259999.99, fee: 2104.0 },
  { start: 260000.0, end: 290000.99, fee: 2283.0 },
  { start: 290001.0, end: 319999.99, fee: 2462.0 },
  { start: 320000.0, end: 349999.99, fee: 2641.0 },
  { start: 350000.0, end: 379999.99, fee: 2820.0 },
  { start: 380000.0, end: 409999.99, fee: 2999.0 },
  { start: 410000.0, end: 439999.99, fee: 3178.0 },
  { start: 440000.0, end: 469999.99, fee: 3357.0 },
  { start: 470000.0, end: 499999.99, fee: 3536.0 },
]

const PARAM = {
  vat: 1.19,
  expensesFlatRate: 20,
  claimForMentainance: 250,
  childExemption: 7500,
  spouseExemption: 15000,
  netIncomeAdjustmentRate: 3.0,
  assetsAdjustmentRate: 0.05,
  proceduralFeeRate: 1.3,
  appointmentFeeRate: 1.2,
  courtFeeRate: 2.0,
}

const lookupFees = (value, fees) =>
  fees
    .filter(item => item.start <= value && value <= item.end)
    .map(item => item.fee)
    .pop()

const ceil = value => Math.ceil(value * 100) / 100

export const calculateFees = input => {
  const totalNetIncome = input.personalNetIncome
  const adjustedTotalNetIncome = totalNetIncome * PARAM.netIncomeAdjustmentRate

  const supousesExemption = PARAM.spouseExemption * 2
  const totalAssets = input.joinedAssets - supousesExemption
  const adjustedTotalAssets = totalAssets * PARAM.assetsAdjustmentRate

  const proceduralValue = Math.max(adjustedTotalNetIncome + adjustedTotalAssets, 0)
  const netFees = Math.round(lookupFees(proceduralValue, LAWYER_FEES))

  const proceduralFees = ceil(netFees * PARAM.proceduralFeeRate)
  const appointmentFees = ceil(netFees * PARAM.appointmentFeeRate)

  const lawyerFees = ceil((proceduralFees + appointmentFees + PARAM.expensesFlatRate) * PARAM.vat)
  const courtFees = ceil(lookupFees(proceduralValue, COURT_FEES) * PARAM.courtFeeRate)
  const totalFees = lawyerFees + courtFees

  return {
    total: totalFees,
    lawyer: lawyerFees,
    court: courtFees,
  }
}
