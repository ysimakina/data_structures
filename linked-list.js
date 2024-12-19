class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
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
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
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
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

console.log(linkedList.get(20));

linkedList.update(20, 25);
linkedList.print();

linkedList.remove(10);
linkedList.print();
