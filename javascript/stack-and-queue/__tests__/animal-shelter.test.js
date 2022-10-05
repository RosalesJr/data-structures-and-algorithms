'use strict';

const { AnimalShelter } = require('../index');

describe('Testing Animal Shelter', () => {
  it('Can enqueue a dog and cat', () => {
    const queue = new AnimalShelter();
    queue.enqueue('dog', 'cat');
    expect(queue.dogQueue.front.value).toEqual('dog', 'cat');
  });

  it('Only accepts dogs and cats', () => {
    const queue = new AnimalShelter();
    expect(queue.enqueue('turtle')).toBe('Only dogs and cats at this shelter');
  });

  it('Returns null if not dog or cat', () => {
    const queue = new AnimalShelter();
    expect(queue.dequeue('turtle')).toBeNull();
  });

  it('Can dequeue a dog', () => {
    const queue = new AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.dequeue('dog');
    expect(queue.dogQueue.back.next).toBeNull();
  });
});
