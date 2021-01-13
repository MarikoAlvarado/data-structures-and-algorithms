'use strict';
let quickSort = require('./quickSort');

describe('should return a sorted array', () => {
  it('sorted array should be [4,8,15,16,23,42]', () => {
    let arr = [8, 4, 23, 42, 16, 15];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
  })
})