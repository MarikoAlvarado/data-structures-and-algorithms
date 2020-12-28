'use strict';

const BinaryTree = require('./tree');
const BinarySearchTree = require('./binarySearchTree');

describe('tree', () => {

  describe('new tree', () => {
    it('should instantiate an empty tree', () => {
      let tree = new BinarySearchTree();
      expect(tree.root).toEqual(null);
    });
  })

  describe('new tree with single root node', () => {
    it('should instantiate a tree with a single root node', () => {
      let tree = new BinarySearchTree();
      expect(tree.root).toEqual(tree.root);
    });
  })

  describe('add left and right child', () => {
    it('add left and right child to single root node', () => {
      let tree = new BinarySearchTree();
      tree.add('5');
      tree.add('6');
      tree.add('7');
      expect(tree.root.value).toEqual('5');
      expect(tree.root.left.value).toEqual('6');
      expect(tree.root.right.value).toEqual('7');
    });
  })

  describe('preOrder()', () => {
    it('should should return collection from preOrder()', () => {
      let binTree = new BinaryTree();
      let addTree = new BinarySearchTree();
      addTree.add('5');
      addTree.add('6');
      addTree.add('7');
      expect(binTree.preOrder(addTree.root)).toEqual([5, 6, 7]);
    });
  })
})