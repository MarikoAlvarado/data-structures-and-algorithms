'use strict';

const { BinaryTree, Node } = require('./tree');

describe('tree', () => {

  describe('new tree', () => {
    it('should instantiate an empty tree', () => {
      let tree = new BinaryTree();
      expect(tree.root).toEqual(null);
    });
  })

  describe('new tree with single root node', () => {
    it('should instantiate a tree with a single root node', () => {
      let tree = new BinaryTree();
      expect(tree.root).toEqual(tree.root);
    });
  })

  describe('add left and right child', () => {
    it('add left and right child to single root node', () => {
      let node = new Node()
      let tree = new BinaryTree(node);
      tree.add(5);
      tree.add(6);
      tree.add(4);
      expect(tree.root.value).toEqual(5);
      expect(tree.root.left.value).toEqual(4);
      expect(tree.root.right.value).toEqual(6);
    });
  })

  describe('preOrder()', () => {
    it('should should return collection from preOrder()', () => {
      let node = new Node();
      let addTree = new BinaryTree(node);
      addTree.add(5);
      addTree.add(6);
      addTree.add(7);
      expect(addTree.preOrder()).toEqual([5, 6, 7]);
    });
  })

  describe('inOrder()', () => {
    it('should should return collection from inOrder()', () => {
      let node = new Node();
      let addTree = new BinaryTree(node);
      addTree.add(5);
      addTree.add(6);
      addTree.add(7);
      expect(addTree.inOrder()).toEqual([5, 6, 7]);
    });
  })

  describe('postOrder()', () => {
    it('should should return collection from postOrder()', () => {
      let node = new Node();
      let addTree = new BinaryTree(node);
      addTree.add(5);
      addTree.add(6);
      addTree.add(7);
      expect(addTree.postOrder()).toEqual([7, 6, 5]);
    });
  })
})