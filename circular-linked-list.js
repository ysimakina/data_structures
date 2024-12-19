class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
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
    if (!this.head) return false;

    if (this.head.data === data) {
      if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
      }
      this.size--;

      return true;
    }

    let current = this.head;
    do {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    } while (current !== this.head);

    return false;
  }

  print() {
    if (!this.head) return console.log("Список пуст");

    let current = this.head;
    const elements = [];
    do {
      elements.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(elements.join(" -> ")); 
  }
}

const circularList = new CircularLinkedList();
circularList.add(10);
circularList.add(20);
circularList.add(30);

circularList.print();

console.log(circularList.get(20));

circularList.update(20, 25);
circularList.print();

circularList.remove(10);
circularList.print();
