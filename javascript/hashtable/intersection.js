'use strict';

const HashTable = require('./index');


function _treeSet(tree) {
  let newTable = new HashTable(100);
  // preOrder will come from BinaryTree
  tree.preOrder((value) => {
    newTable.set(value, true);
  });
  return newTable;
}

function _treeCheck(tree, newTable) {
  let arr = [];
  // preOrder will come from BinaryTree
  tree.preOrder((value) => {
    if (newTable.get(value)) {
      arr.push(value);
    }
  });
  return arr;
}

function treeIntersection(tree1, tree2) {
  let set = _treeSet(tree1);
  let newArr = _treeCheck(tree2, set);
  return newArr;
}

module.exports = treeIntersection;

