'use strict'

let Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insert(value) {
    // console.log('hitting insert?', value);
    if (this.head === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let current = this.head; //current node i am looking at is the head
      while (current.next) { // while the head has a next value..
        current = current.next; //let the new current node become the value with a next
      }
      current.next = new Node(value);
    }
    this.length++;
    console.log(this.length)
  }


  includes(value) {
    while (this.next !== null)
      if (value === this.next) {
        return this.next
      } else {
        return 'does not exist'
      }
  }

  toString() {
    return '{a}->{b}->{c}->NULL'
  }
}

module.exports = LinkedList;