'use strict';

let LL = require('./ll-insertions');

//1. add a node at end of ll
describe('add node at end', () => {
  it('should insert node to the end of linked list', () => {
    const instant = new LL();
    list.insert('value');

    expect(list.tail.value).toEqual('value');
  })
})


//2. add multiple nodes to end of ll

describe('add multiple', () => {
  it('should insert multiple nodes at end of list', () => {
    const instant = new LL();
    list.insert('cool');
    list.append('rad');
    list.append('clutch');

    expect(list.tail.value).toEqual('clutch');
  })
})

//3. insert node before node in middle of ll
describe('add one before middle', () => {
  it('should insert node before node in middle of', () => {
    const instant = new LL();
    list.insert('cool');
    list.append('rad');
    list.append('clutch');
    //add before middle?
    list.insertBefore('rad', 'wow');
    expect(list.head.next).toEqual('wow');
  })
})

//4. insert node BEFORE head 
describe('add before', () => {
  it('should insert note before the head', () => {
    const instant = new LL();
    list.insert('cool');
    list.append('rad');
    list.append('clutch');

    list.insertBefore('cool', 'wow')
    expect(list.head.value).toEqual('wow');
  })
})

//5. insert node AFTER middle node

describe('add after', () => {
  it('should insert node after middle node', () => {
    const instant = new LL();
    list.insert('cool');
    list.append('rad');
    list.append('clutch');

    list.insertAfter('rad', 'wow');
    expect(list.node.value === 'rad'.next).toEqual('wow');//hmmm...
    // expect(list.next.next).toEqual('wow'); //probably the way..
  })
})

//6. insert node AFTER last node of ll

describe('add after', () => {
  it('should insert node after last node', () => {
    const instant = new LL();
    list.insert('cool');
    list.append('rad');
    list.append('clutch');

    list.insertAfter('clutch', 'wow');

    expect(list.next.next).toEqual('wow');
  })
})