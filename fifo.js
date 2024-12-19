class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
}

  dequeue() {
      if (this.isEmpty()) return undefined;  
      return this.items.shift();
  }

  peek() {
      if (this.isEmpty()) return undefined; 
      return this.items[0];
  }

  print() {
      console.log(this.items.join(', '));
  }
}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.peek());
queue.print();

queue.dequeue();
console.log(queue.peek());
queue.print();
