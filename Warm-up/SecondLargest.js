function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element !== largest) {
      secondLargest = element;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const arr = [1, 2, 56, 35, 5];
let result = secondLargest(arr);
console.log(result);
