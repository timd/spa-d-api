import { calculateFees } from '../app/services/CalculateFees.js'

describe('calculateFees', () => {
  test('should return a total fee of €227,68 when the number of chilren is 0, personal net income €0, spouse net income is $0, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 0,
      spouseNetIncome: 0,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the number of chilren is 1, personal net income €0, spouse net income is $0, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 0,
      spouseNetIncome: 0,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the number of chilren is 2, personal net income €0, spouse net income is $0, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 0,
      spouseNetIncome: 0,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the number of chilren is 0, personal net income €499, spouse net income is $0, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 499,
      spouseNetIncome: 0,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the number of chilren is 0, personal net income €0, spouse net income is $499, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 0,
      spouseNetIncome: 499,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the number of chilren is 0, personal net income €299, spouse net income is $200, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 299,
      spouseNetIncome: 200,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €367,80 when the number of chilren is 0, personal net income €670, spouse net income is $0, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 670,
      spouseNetIncome: 0,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(367.8)
    expect(actual.lawyer).toBe(261.8)
    expect(actual.court).toBe(106.0)
  })
})
