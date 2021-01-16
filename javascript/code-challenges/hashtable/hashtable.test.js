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

  it('should see if key exists in hashtable', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('cat', 'dog');
    newMap.set('chikkin', 'turkey');
    newMap.set('tofu', 'sweet');
    newMap.set('plant', 'noodles');
    newMap.set('pig', 'chicken');
    newMap.set('chocolate', 'cake');
    newMap.set('spicy', 'chocolate');

    expect(newMap.contains('chocolate')).toEqual(true);
    expect(newMap.contains('wooster')).toEqual(false);
  })
})