class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  peek() {
    if (!this.size) return 'Список пуст';
    return this.head;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.size) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.head) return 'Список пуст';

    if (this.head == this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return this;
  }

  print() {
    if (!this.size) {
      console.log('Список пуст');
      return;
    }
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }
}

const queue = new Queue();

queue.print();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log(queue.peek());

queue.dequeue();
queue.print();
console.log(queue.peek());

queue.dequeue();
queue.dequeue();
queue.dequeue();
