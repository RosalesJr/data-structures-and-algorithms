'use strict';
const insertionSort = require('../sort');

describe('Can successfully sort', () => {
  it('an array in numerical order', () => {
    let array = insertionSort([8,4,23,42,16,15]);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('an array in numerical order with negative values', () => {
    let array = insertionSort([8,-4,23,-42,16,15]);
    expect(array).toEqual([-42, -4, 8, 15, 16, 23]);
  });
});
