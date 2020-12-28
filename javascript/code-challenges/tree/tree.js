'use strict';

const BinarySearch = require('./binarySearchTree');

class BinaryTree {
  constructor() {
    this.root = null;
    this.array = [];
  }

  preOrder(root) {
    console.log(root);
    if (!root) { throw new Error('there is no root'); }
    else {
      this.array.push(root)
    }
    if (root.left !== null) {
      this.array.push(root.left.value);
      // preOrder(root.left)
    }
    if (root.right !== null) {
      this.array.push(root.right.value)
      // preOrder(root.right)
    }
    return this.array;
  }

  // inOrder(root) {

  //   if (root.left !== null) { inOrder(root.left) }
  //   else if (root.right !== null) { preOrder(root.right) }

  // }

  // postOrder() {

  // }

}

module.exports = BinaryTree;