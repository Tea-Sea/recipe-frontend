import { expect, test } from 'vitest'
import { keysToCamel } from '../../utils/snakeToCamel'

// This is a dummy file to help set up the testing environment.
test('Object keys are converted from snake_case to camelCase', () => {
    expect(keysToCamel({ test_case_conversion: true })).toEqual({ testCaseConversion: true });
})