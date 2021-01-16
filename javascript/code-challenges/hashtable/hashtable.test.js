'use strict';

let HashMap = require('./hashtable');

describe('HASH MAP', () => {
  it('should add a key and value to the hash map', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('cat', 'dog');
    newMap.set('chikkin', 'turkey');
    newMap.set('tofu', 'sweet');

    expect(newMap.get('dog')).toEqual('soup');
  })
})