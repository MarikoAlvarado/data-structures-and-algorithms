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
    expect(list.head.value).toEqual('a');
  })
})

//test 4
describe('insert multiple', () => {
  it('should insert all multiple nodes into list', () => {
    const list = new ll();//making a list to build and test against
    list.insert('a');
    list.insert('b');
    list.insert('c');
    console.log(list.head);
    expect(list.includes).toEqual('a', 'b', 'c');
  })
})