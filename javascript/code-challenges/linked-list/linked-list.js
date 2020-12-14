'use strict'

let Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insert(value) {
    // if (this.head === null) { //if the head is empty make a new node there
    let newNode = new Node(value);//making a new node of whatever value was passed
    newNode.next = this.head; //the new node points NEXT and whatever was the head value before
    this.head = newNode;//the new node then become the head
    // return this.head;
    // } else {
    //   let current = this.head; //current node i am looking at is the head
    //   while (current.next) { // while the head has a next value..
    //     current = current.next; //let the new current node become the value with a next
    //   }
    //   current.next = new Node(value);

    // }
    // this.length++;
    // console.log(this.length);
  }

  includes(value) {
    let current = this.head;
    if (current.value === value) return true;
    current = this.head.next;
    if (current.value === value) return true;
    current = current.next;
    if (current.value === value) return true;
    else { return false }
  }

  toString(value) {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{${current.value}}` + "->";
      current = current.next;
    }
    string += `null`;
    return string;
  }
}

module.exports = LinkedList;