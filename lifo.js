class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  update(element) {
    if (this.isEmpty()) return false;
    this.items[this.items.length - 1] = element;
    return true;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.peek());

stack.update(25);
console.log(stack.peek());

stack.pop();
stack.print();
