'use strict';

// Require our linked list implementation

let ll = require('../linked-list');
//test 1
describe('instantiate', () => {
  it('should instantiate empty linked list', () => {
    const empty = new ll();
    expect(empty.head).toEqual(null)
  })
});

//test 2
describe('my linked list', () => {
  it('should insert node at beginning of empty list', () => {
    const list = new ll();
    list.insert('cookie');
    expect(list.head.value).toEqual('cookie');
  })
});
//test 3
describe('head property', () => {
  it('should point to first node in list', () => {
    const list = new ll();//making a list to build and test against
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
  })
})

//test 4
describe('insert multiple', () => {
  it('should insert multiple nodes into list', () => {
    const list = new ll();//making a list to build and test against
    list.insert('a');
    list.insert('b');
    list.insert('c');

    let current = list.head.value;
    expect(current).toEqual('c');
    current = list.head.next;
    expect(current.value).toEqual('b');
    current = current.next;
    expect(current.value).toEqual('a');

  })
})

//test 5
describe('find value', () => {
  it('should return true if a value exists in linked list', () => {
    const list = new ll();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.includes('b')).toBeTruthy();
  })
})

//test 6
describe('find value', () => {
  it('should return true if a value exists in linked list', () => {
    const list = new ll();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.includes('abc')).toBeFalsy();
  })
})

//test 7
describe('return all', () => {
  it('should return all values from linked list', () => {
    const list = new ll();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.toString()).toEqual('{a}->{b}->{c}-null');
  })
})