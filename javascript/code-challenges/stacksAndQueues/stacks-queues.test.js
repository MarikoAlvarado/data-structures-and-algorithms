'use strict';

const Stack = require('./stack');
const Queue = require('./queues');
const Node = require('./node');

describe('stacks', () => {
  describe('push())', () => {
    it('can successfully push onto a stack', () => {
      let stack = new Stack();
      stack.push('riko');
      expect(stack.top.value).toEqual('riko');
    });

  });


  describe('push())', () => {
    it('can successfully push multiple values onto a stack', () => {
      let stack = new Stack();
      stack.push('ricardo');
      stack.push('riko');
      stack.push('jane');
      expect(stack.top.value).toEqual('jane');
    });
  });

  describe('pop()', () => {
    it('Can successfully pop off the stack', () => {
      let stack = new Stack();
      stack.push('riko');
      stack.push('ricardo');
      expect(stack.pop()).toEqual('ricardo');
    });
  });

  describe('pop()', () => {
    it('Can successfully empty a stack after multiple pops', () => {
      let stack = new Stack();
      stack.push('riko');
      stack.push('ricardo');
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toEqual(true);
    })
  });

  describe('peek()', () => {
    it('returns value of top node of stack', () => {
      let stack = new Stack();
      stack.push('simon');
      stack.push('riko');
      expect(stack.peek()).toEqual('riko');
    })
  });

  describe('instantiate', () => {
    it('Can successfully instantiate an empty stack', () => {
      let stack = new Stack();
      expect(stack.isEmpty()).toEqual(true);
    });
  });

  describe('pop()/peek() on empty', () => {
    it('Calling pop or peek on empty stack raises exception', () => {
      let stack = new Stack();
      expect(() => { stack.pop(); }).toThrow(new Error('Stack is empty'));
      expect(() => { stack.peek(); }).toThrow(new Error('Stack is empty'));
    })
  });
});

describe('queue', () => {
  describe('enqueue()', () => {
    it('Can successfully enqueue into a queue', () => {
      const queue = new Queue();
      queue.enqueue('riko');
      expect(queue.rear.value).toEqual('riko');
    })
  })

  describe('enqueue()', () => {
    it('Can successfully enqueue multiple values into a queue', () => {
      const queue = new Queue();
      queue.enqueue('riko');
      queue.enqueue('tahmina');
      queue.enqueue('ashley');

      expect(queue.rear.value).toEqual('ashley');
    })
  })

  describe('dequeue()', () => {
    it('Can successfully dequeue out of a queue the expected value', () => {
      const queue = new Queue();
      queue.enqueue('riko');
      queue.enqueue('tahmina');
      queue.enqueue('ashley');

      expect(queue.dequeue().value).toEqual('riko');
    })
  })

  describe('peek()', () => {
    it('Can successfully peek into a queue, seeing the expected value', () => {
      const queue = new Queue();
      queue.enqueue('riko');
      queue.enqueue('tahmina');
      queue.enqueue('ashley');

      expect(queue.peek().value).toEqual('riko');
    })
  })

  // describe('dequeue()', () => {
  //   it('Can successfully empty a queue after multiple dequeues', () => {
  //     const queue = new Queue();
  //     queue.enqueue('riko');
  //     queue.enqueue('tahmina');
  //     queue.enqueue('ashley');

  //     // let current = this.front;
  //     // while (current != null) {
  //     //   this.front = this.current.next;
  //     //   queue.dequeue();
  //     //   if (current == null) { return current };
  //     // }

  //     expect(queue.isEmpty()).toEqual(true);
  //   })
  // })

  describe('instantiate', () => {
    it('Can successfully instantiate an empty queue', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toEqual(true);
    });
  });

  describe('dequeue()/peek() on empty', () => {
    it('Calling dequeue or peek on empty queue raises exception', () => {
      let stack = new Queue();
      expect(() => { stack.dequeue(); }).toThrow(new Error('Queue is empty'));
      expect(() => { stack.peek(); }).toThrow(new Error('Queue is empty'));
    })
  });

})