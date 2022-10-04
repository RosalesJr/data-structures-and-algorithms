'use strict';

const { Pseudo } = require('../index');


describe('PsuedoQueue Test', () => {
  it('Can enqueue ', () => {
    const queue = new Pseudo();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.stack1.top.value).toEqual('b');
  });

  it('Expected Failure', () => {
    const queue = new Pseudo();
    expect(queue.enqueue()).toEqual('value is null');
  });

  it('Can dequeue, then enqueue, then dequeue again', () => {
    const queue = new Pseudo();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.stack1.top.value).toEqual('c');
    expect(queue.dequeue()).toEqual('b');

  });


});
