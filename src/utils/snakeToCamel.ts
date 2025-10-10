const toCamel = (str: string): string =>
  str.replace(/([-_][a-z])/gi, s => s.toUpperCase().replace(/[-_]/g, ""));

// Recursively convert object keys
export const keysToCamel = (input: any): any => {
    if (input === null || input === undefined) return input;

  if (Array.isArray(input)) {
    return input.map(key => keysToCamel(key));
  } else if (input !== null && input.constructor === Object) {
      return Object.keys(input).reduce((acc: any, key) => {
          acc[toCamel(key)] = keysToCamel(input[key]);
      return acc;
    }, {});
  }
  return input;
};