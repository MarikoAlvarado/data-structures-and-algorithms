'use strict';

const stack = require('./stack');

class PseudoQueue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }
  enqueue(value) {
    this.stackA.push(value)
  }
  dequeue(value) {
    while (this.stackA.length > 0) {
      this.stackB.push(this.stackA.pop());
    }
    return this.stackA.pop();
  }
}
module.exports = PseudoQueue;