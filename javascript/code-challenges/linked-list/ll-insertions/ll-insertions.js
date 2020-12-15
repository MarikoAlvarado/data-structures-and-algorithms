'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    if (this.head === null) {
      let newNode = new Node(value);
      newNode.next = this.head
      this.head = newNode
    } else {
      append(value);//send it to be appended
    }
  }

  append(value) {

  }

  insertBefore(value, newVal) {

  }

  insertAfter(value, newVal) {

  }
}