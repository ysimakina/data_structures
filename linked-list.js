class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  get(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  update(oldValue, newValue) {
    let current = this.head;
    while (current) {
      if (current.data === oldValue) {
        current.data = newValue;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      if (this.head === this.tail) {
        this.tail = null;
      }
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        if (current.next === this.tail) {
          this.tail = current;
        }
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    if (!this.head) return console.log("Список пуст");

    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.get(20));
linkedList.print();

linkedList.prepend(111);
linkedList.print();

linkedList.update(20, 25);
linkedList.print();

linkedList.remove(10);
linkedList.print();
