'use strict';

const { BinaryTree, Node } = require('./tree');

describe('findMaxValue', () => {
  it('returns the highest numerical value from a binary tree', () => {
    let node = new Node()
    let tree = new BinaryTree(node);
    tree.add(5);
    tree.add(4);
    tree.add(4);
    tree.add(99);
    tree.add(85);
    tree.add(12);
    expect(tree.findMaxValue()).toEqual(99);
  })
})