import { calculateRecurrentFees } from '../app/services/FeesCalculator.js'

describe('calculateRecurrentFees', () => {
  test('should return [] when there are no children ages', () => {
    // Arrange
    const input = {
      netIncome: 0,
      childrenAges: [],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([])
  })

  test('should return [0] when the provider income is €0 and there is only one child of age 0', () => {
    // Arrange
    const input = {
      netIncome: 0,
      childrenAges: [0],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([0])
  })

  test('should return [267] when the provider income is €1600 and there is only one child of age 0', () => {
    // Arrange
    const input = {
      netIncome: 1600,
      childrenAges: [0],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([267])
  })

  test('should return [145.20, 214.80] when the provider income is €1600 and there is child of age 0 and one of age 12', () => {
    // Arrange
    const input = {
      netIncome: 1600,
      childrenAges: [0, 12],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([145.2, 214.8])
  })

  test('should return [163.19, 196.81] when the provider income is €1600 and there is child of age 1 and one of age 6', () => {
    // Arrange
    const input = {
      netIncome: 1600,
      childrenAges: [1, 6],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([163.19, 196.81])
  })

  test('should return [267, 322] when the provider income is €2000 and there is child of age 1 and one of age 6', () => {
    // Arrange
    const input = {
      netIncome: 2000,
      childrenAges: [1, 6],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([267, 322])
  })

  test('should return [0, 0] when the provider income is €1000 and there is child of age 1 and one of age 6', () => {
    // Arrange
    const input = {
      netIncome: 1000,
      childrenAges: [1, 6],
    }

    // Act
    const actual = calculateRecurrentFees(input)

    // Assert
    expect(actual).toEqual([0, 0])
  })
})

describe('calculateRecurrentFees with 0 decimals precision', () => {
  test('should return [145, 215] (rounded up from [145.20, 214.80]) when the provider income is €1600 and there is child of age 0 and one of age 12', () => {
    // Arrange
    const input = {
      netIncome: 1600,
      childrenAges: [0, 12],
    }

    // Act
    const actual = calculateRecurrentFees(input, 0)

    // Assert
    expect(actual).toEqual([145, 215])
  })
})

test('should return [163, 197] (rounded up from [163.19, 196.81]) when the provider income is €1600 and there is child of age 1 and one of age 6', () => {
  // Arrange
  const input = {
    netIncome: 1600,
    childrenAges: [1, 6],
  }

  // Act
  const actual = calculateRecurrentFees(input, 0)

  // Assert
  expect(actual).toEqual([163, 197])
})
