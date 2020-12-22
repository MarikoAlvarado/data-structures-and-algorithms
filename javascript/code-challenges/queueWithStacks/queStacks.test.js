'use strict';

let PseudoQueue = require('./queue-with-stacks');
//test 1
describe('enqueueing', () => {
  it('should push multiple people into stack A', () => {
    const queue = new PseudoQueue();
    queue.enqueue('simon')
    queue.enqueue('nathan')
    queue.enqueue('ricardo')
    console.log(this.stackA);
    expect(queue.stackA[0]).toEqual('simon');
  })
})

describe('dequeueing', () => {
  it('should push person from end of stackA into stackB', () => {
    const queue = new PseudoQueue();
    queue.enqueue('simon')
    queue.enqueue('nathan')
    queue.enqueue('ricardo')

    queue.dequeue();
    expect(queue.stackB[0]).toEqual('ricardo');
  })
})