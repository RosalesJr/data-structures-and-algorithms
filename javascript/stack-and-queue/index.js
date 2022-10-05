'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value) {
    let top = this.top;
    let result = new Node(value);
    result.next = top;
    this.top = result;

  }

  pop(){
    let temporary = this.top;
    if(this.isEmpty()){
      return 'Empty Stack';
    }
    this.top = temporary.next;
    return temporary.value;
  }

  peek(){
    let top = this.top;
    if(this.isEmpty()){
      return 'Empty Stack';
    }
    return top.value;
  }

  isEmpty(){
    let top = this.top;
    if(!top){
      return true;
    }
    else{
      return false;
    }
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let result = new Node(value);
    let current = this.back;

    if(current){
      current.next = result;
    }

    this.back = result;

    if(!this.front){
      this.front = result;
    }

  }

  dequeue(){

    if(this.isEmpty()){
      return 'Empty Queue';
    }

    let result = this.front;
    this.front = result.next;

    if(this.back === result){
      this.back = result.next;
    }
  }

  peek(){

    if(this.isEmpty()){
      return 'Empty Queue';
    }
    this.front.value;
    return this.front.value;
  }

  isEmpty(){
    let current = this.front;
    if(!current){
      return true;
    }
    else{
      return false;
    }
  }
}

class Pseudo{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    if(!value){
      return 'value is null';
    }
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack1.isEmpty() && this.stack2.isEmpty()){
      return 'Empty Queue';
    }
    if(this.stack2.isEmpty()){
      while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.top.value);
        this.stack1.pop();
      }
    }
    let top = this.stack2.top.value;
    this.stack2.pop();
    return top;
  }
}

class AnimalShelter{
  constructor(){
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {

    if(animal === 'dog'){
      this.dogQueue.enqueue(animal);
    }
    else if(animal === 'cat'){
      this.catQueue.enqueue(animal);
    }
    else{
      return 'Only dogs and cats at this shelter';
    }
  }

  dequeue(pref){
    if(pref === 'dog'){
      let dog = this.dogQueue.dequeue();
      return dog;
    }
    if(pref === 'cat'){
      let cat = this.catQueue.dequeue();
      return cat;
    }
    if(pref !== 'cat' && pref !== 'dog'){
      return null;
    }
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
  Pseudo,
  AnimalShelter,
};
