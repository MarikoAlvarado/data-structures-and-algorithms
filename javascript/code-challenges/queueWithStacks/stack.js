'use strict';

const Node = require('./queue-with-stacks');


class Stack {
  constructor() {
    this.top = null;
  }


  push(value) {
    // O(1)
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    // O(1)
    // if (!this.top) { return this.top; }
    if (!this.top) { throw new Error('Stack is empty'); }

    const item = this.top.value;
    this.top = this.top.next;
    return item;
  }

  peek() {
    // O(1)
    if (!this.top) { throw new Error('Stack is empty'); }
    return this.top.value;
  }

  isEmpty() {
    return (!this.top) ? true : false;
  }
}
module.exports = Stack;