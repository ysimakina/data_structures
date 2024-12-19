class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  get(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  update(oldValue, newValue) {
    const nodeToUpdate = this.get(oldValue);
    if (nodeToUpdate) {
      nodeToUpdate.data = newValue;
      return true;
    }
    return false;
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
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
    console.log(elements.join(" <-> "));
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(10);
doublyLinkedList.add(20);
doublyLinkedList.add(30);

doublyLinkedList.print();

doublyLinkedList.update(20, 25);
doublyLinkedList.print();

doublyLinkedList.remove(25);
doublyLinkedList.print();
