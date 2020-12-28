'use strict';

let Node = require('./node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      if (this.root.left === null) {
        this.root.left = new Node(value)
      } else {
        if (this.root.right === null) {
          this.root.right = new Node(value)
        }
      }
    }
  }
}
module.exports = BinarySearchTree;