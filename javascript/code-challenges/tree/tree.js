
'use strict';

const Queue = require('../stacksAndQueues/queues');

class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (typeof value !== 'number') {
      return null;
    }
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let _insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else if (node.left !== null) {
          return _insert(node.left);
        }
      }
      else if (value >= node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else if (node.right !== null) {
          return _insert(node.right);
        }
      }
    }
    _insert(this.root);
  }

  preOrder() {
    const results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(this.root)
    return results;
  }

  inOrder(root) {
    const results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }
    _walk(this.root)
    return results;
  }

  postOrder() {
    const results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root)
    return results;
  }

  findMaxValue() {
    let tempVar = this.root.value;
    let _walk = (node) => {
      if (node.value > tempVar) tempVar = node.value;
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    }
    _walk(this.root);
    return tempVar;
  }

  breadthFirst() {
    if (!this.root) return null;

    let breadthQueue = new Queue();
    let outputArray = [];
    let frontVariable;
    console.log('ROOT::::', this.root);
    breadthQueue.enqueue(this.root);

    while (breadthQueue.peek() !== false) {

      frontVariable = breadthQueue.dequeue();
      outputArray.push(frontVariable.value.value);
      if (frontVariable.value.left) {
        breadthQueue.enqueue(frontVariable.value.left);
      }
      if (frontVariable.value.right) {
        breadthQueue.enqueue(frontVariable.value.right);
      }
    }

    return outputArray;
  }

}

module.exports = { BinaryTree, Node };