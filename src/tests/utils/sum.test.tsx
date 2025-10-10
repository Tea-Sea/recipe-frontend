import { expect, test } from 'vitest'
import { sum } from '../../utils/sum'

// This is a dummy file to help set up the testing environment.
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})