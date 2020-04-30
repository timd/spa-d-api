import { calculateFees } from '../app/services/CalculateFees.js'

describe('calculateFees', () => {
  test('should return a total fee of €227,68 when the input is missing', () => {
    // Arrange
    // Act
    const actual = calculateFees()

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

  test('should return a total fee of €227,68 when the input is partial', () => {
    // Arrange
    const input = {
      childrenCount: 2,
      personalNetIncome: 499,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(227.68)
    expect(actual.lawyer).toBe(157.68)
    expect(actual.court).toBe(70.0)
  })

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
      childrenCount: 1,
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
      childrenCount: 2,
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

  test('should return a total fee of €367,80 when the number of chilren is 0, personal net income €370, spouse net income is $300, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 370,
      spouseNetIncome: 300,
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

  test('should return a total fee of €1027,5 when the number of chilren is 1, personal net income €1000, spouse net income is $1000, joined assets are $0 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 1,
      personalNetIncome: 1000,
      spouseNetIncome: 1000,
      joinedAssets: 0,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(1027.5)
    expect(actual.lawyer).toBe(773.5)
    expect(actual.court).toBe(254.0)
  })

  test('should return a total fee of €1786,4 when the number of chilren is 0, personal net income €1000, spouse net income is $1000, joined assets are $50,000 and open loans are $0', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 1000,
      spouseNetIncome: 1000,
      joinedAssets: 50000,
      openLoans: 0,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(1786.4)
    expect(actual.lawyer).toBe(1380.4)
    expect(actual.court).toBe(406.0)
  })

  test('should return a total fee of €1596,68 when the number of chilren is 0, personal net income €1000, spouse net income is $1000, joined assets are $50,000 and open loans are $10,000', () => {
    // Arrange
    const input = {
      childrenCount: 0,
      personalNetIncome: 1000,
      spouseNetIncome: 1000,
      joinedAssets: 50000,
      openLoans: 10000,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(1596.68)
    expect(actual.lawyer).toBe(1228.68)
    expect(actual.court).toBe(368)
  })

  test('should return a total fee of €1406,95 when the number of chilren is 3, personal net income €1000, spouse net income is $1000, joined assets are $100,000 and open loans are $10,000', () => {
    // Arrange
    const input = {
      childrenCount: 3,
      personalNetIncome: 1000,
      spouseNetIncome: 1000,
      joinedAssets: 100000,
      openLoans: 10000,
    }

    // Act
    const actual = calculateFees(input)

    // Assert
    expect(actual.total).toBe(1406.95)
    expect(actual.lawyer).toBe(1076.95)
    expect(actual.court).toBe(330)
  })
})
