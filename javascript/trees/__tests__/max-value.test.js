'use strict';

const { Node } = require('../index');
const { BinaryTree } = require('../index');

describe('Testing Max Value Method', () => {
  it('Returns null if no data present', () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toEqual(null);
  });


  it('Finds max value in tree after adding new node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.right = new Node(100);
    binaryTree.root.left = new Node(10);
    expect(binaryTree.findMax()).toEqual(100);
  });

  it('Finds max value in tree', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.right = new Node(100);
    expect(binaryTree.findMax()).toEqual(100);
  });

  it('Finds max value in tree with many nodes', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.right = new Node(100);
    binaryTree.root.right.left = new Node(33);
    expect(binaryTree.findMax()).toEqual(100);
  });
});
