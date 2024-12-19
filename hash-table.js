class HashTable {
  constructor(size = 42) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size; //индекс
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    const existingIndex = this.table[index].findIndex(
      (pair) => pair[0] === key
    );

    if (existingIndex !== -1) {
      this.table[index][existingIndex][1] = value;
    } else {
      this.table[index].push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) return undefined; 

    const foundPair = this.table[index].find((pair) => pair[0] === key);
    return foundPair ? foundPair[1] : undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (!this.table[index]) return false; 

    const existingIndex = this.table[index].findIndex(
      (pair) => pair[0] === key
    );
    if (existingIndex !== -1) {
      this.table[index].splice(existingIndex, 1);
      return true;
    }
    return false;
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        for (const [key, value] of this.table[i]) {
          console.log(`${key}: ${value}`);
        }
      }
    }
  }
}

const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); 
console.log(hashTable.get("age"));

hashTable.remove("age");
hashTable.print();
