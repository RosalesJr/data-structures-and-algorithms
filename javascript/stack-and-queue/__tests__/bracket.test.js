'use strict';

const validateBrackets = require('../bracket');

describe('Testing Validate Brackets', () => {
  it('returns true if all brackets are balanced', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
  });

  it('returns false if not balanced', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
  });

  it('returns false if different brackets are not balanced', () => {
    expect(validateBrackets('{(')).toBe(false);
    expect(validateBrackets('[}')).toBe(false);
    expect(validateBrackets('((')).toBe(false);
  });

  it('returns true if all brackets are balanced in string', () => {
    expect(validateBrackets('[({[]})]')).toBe(true);
  });

  it('returns false if no brackets', () => {
    expect(validateBrackets('no')).toBe(false);
    expect(validateBrackets('brackets')).toBe(false);
    expect(validateBrackets('here')).toBe(false);
  });
});
