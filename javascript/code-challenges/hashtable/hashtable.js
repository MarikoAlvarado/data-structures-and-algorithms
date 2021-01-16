'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, value) => {
      return acc + value.charCodeAt(0);
    }, 0) * 199 % this.size;
  }

  set(key, value) {
    // console.log('FROM TEST:', key, ',', value);
    let index = this.hash(key);
    // console.log('HASHED DOG?:', index);
    let entry = { [key]: value };
    // console.log('NEW ENTRY?:', entry);

    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }
    this.map[index].add(entry);
  }

  // GET

  // TRAVERSE LINKED LIST IN THAT BUCKET TO FIND MATCHING KEY AND RETURN IT'S VALUE

  //TAKES IN KEY
  get(key) {
    // HASH KEY FOR BUCKET LOCATION
    let index = this.hash(key);
    console.log('IN GET:', index);
    if (this.map[index]) {
      let current = this.map[index].head;
      console.log('CURRENT IN KEY:', current.value[key]);
      while (current) {
        let keyOfObject = Object.keys(current.value);
        let valueOfObject = Object.values(current.value);

        if (keyOfObject[0] === key) {
          return valueOfObject[0];
        }
        current = current.next;
      }
    }
  }
}
module.exports = HashMap;

