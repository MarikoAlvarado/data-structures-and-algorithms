'use strict';

const { BinaryTree, Node } = require('./tree');

it('Can return an array of values in the Breadth First order.', () => {
  let node = new Node(7)
  let treeInstance = new BinaryTree(node);
  treeInstance.add(5);
  treeInstance.add(99);
  treeInstance.add(4);
  treeInstance.add(9);
  treeInstance.add(85);
  treeInstance.add(12);
  expect(treeInstance.breadthFirst()).toEqual([7, 5, 99, 4, 9, 85, 12]);
})
