'use strict';
let mergeSort = require('./merge-sort');

describe('should return a sorted array', () => {
  it('sorted array should be [4,8,15,16,23,42]', () => {
    let arr = [8, 4, 23, 42, 16, 15];

    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  })
})