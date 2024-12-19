function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const pivot = arr[midIndex];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(array));
