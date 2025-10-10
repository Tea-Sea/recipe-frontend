// Utility class for different input validation

export const isNumericInput = (value: string): boolean => {
    let regex = /^(?:[0-9]*\.?[0-9]*|\.)$/;
  return regex.test(value)
}