class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }

  get(data) {
    if (!this.head) return null;

    let current = this.head;
    do {
      if (current.data === data) {
        return current.data;
      }
      current = current.next;
    } while (current !== this.head);

    return null;
  }

  update(oldValue, newValue) {
    if (!this.head) return false;

    let current = this.head;
    do {
      if (current.data === oldValue) {
        current.data = newValue;
        return true;
      }
      current = current.next;
    } while (current !== this.head);

    return false;
  }

  remove(data) {
    if (!this.head) return;

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.data === data) {
        if (current === this.head) {
          this.tail.next = this.head.next;
          this.head = this.head.next;
        } else {
          prev.next = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  print() {
    if (!this.head) return console.log('Список пуст');

    let current = this.head;
    const elements = [];
    do {
      elements.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(elements.join(' -> '));
  }
}

const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.append(30);

circularList.print();

circularList.prepend(111);
circularList.print();

console.log(circularList.get(20));

circularList.update(20, 25);
circularList.print();

circularList.remove(10);
circularList.print();
