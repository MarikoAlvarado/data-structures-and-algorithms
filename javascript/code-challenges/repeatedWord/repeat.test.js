'use strict';

let HashMap = require('../hashtable');
let findWord = require('./reapeated-word');

describe('Repeated word', () => {
  it('should add words to hash table', () => {
    let str = 'i should not eat anymore burritos';
    let undo = findWord(str);
    let newMap = new HashMap(5);
    newMap.set('dog', 'soup');


    expect(newMap.get('dog')).toEqual('soup');
  })

})