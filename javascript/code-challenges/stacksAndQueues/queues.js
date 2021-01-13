'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    // O(1)
    console.log('enqueue for test', value);
    let node = new Node(value);
    console.log('NODE???:::', node);
    if (!this.front) {
      this.front = this.rear;
      // this.rear = node;
    } else {
      this.rear = node;
    }
  }

  dequeue() {
    // O(n)
    if (!this.front) { throw new Error('Queue is empty'); }

    const remove = this.front;
    this.front = this.front.next;
    return remove;
  }

  peek(node) {
    // O(1)
    console.log('QUEUE EMPTY???:', this.front);
    if (!this.front) { throw new Error('Queue is empty'); }
    return this.front;
  }

  isEmpty() {
    return (!this.front) ? true : false;
  }
}

module.exports = Queue;