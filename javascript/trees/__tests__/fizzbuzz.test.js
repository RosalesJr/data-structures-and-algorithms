'use strict';

const { KaryNode, KaryTree, fizzBuzzTree } = require('../fizzbuzz');

describe('Testing Fizzbuzz function', () => {
  let testTree = new KaryTree;
  testTree.root = new KaryNode(10);
  testTree.root.addChild(8);
  testTree.root.addChild(3);
  testTree.root.addChild(11);
  testTree.root.children[0].addChild(15);
  testTree.root.children[0].addChild(0);
  testTree.root.children[1].addChild(5);

  let resultTree = new KaryTree();
  resultTree.root = new KaryNode('Buzz');
  resultTree.root.addChild('8');
  resultTree.root.addChild('Fizz');
  resultTree.root.addChild('11');
  resultTree.root.children[0].addChild('FizzBuzz');
  resultTree.root.children[0].addChild('FizzBuzz');
  resultTree.root.children[1].addChild('Buzz');

  it('Returns correct output in new tree', () => {
    expect(fizzBuzzTree(testTree)).toEqual(resultTree);
  });

  it('Returns null if given tree is null/empty', () => {
    let emptyTree = new KaryTree;
    expect(fizzBuzzTree(emptyTree)).toEqual(emptyTree);
  });

  it('Returns Buzz for values divisible by 5', () => {
    let testTree = new KaryTree;
    testTree.root = new KaryNode(10);
    testTree.root.addChild(8);

    let resultTree = new KaryTree();
    resultTree.root = new KaryNode('Buzz');
    resultTree.root.addChild('8');
    expect(fizzBuzzTree(testTree)).toEqual(resultTree);
  });

  it('Returns Fizz for values divisible by 3', () => {
    let testTree = new KaryTree;
    testTree.root = new KaryNode(3);
    testTree.root.addChild(8);

    let resultTree = new KaryTree();
    resultTree.root = new KaryNode('Fizz');
    resultTree.root.addChild('8');
    expect(fizzBuzzTree(testTree)).toEqual(resultTree);
  });

  it('Returns FizzBuzz for values divisible by 3 and 5', () => {
    let testTree = new KaryTree;
    testTree.root = new KaryNode(15);
    testTree.root.addChild(8);

    let resultTree = new KaryTree();
    resultTree.root = new KaryNode('FizzBuzz');
    resultTree.root.addChild('8');
    expect(fizzBuzzTree(testTree)).toEqual(resultTree);
  });

});
