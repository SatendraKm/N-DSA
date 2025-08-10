function searchArray(arr, x) {
  //TODO- search the index of the element x and return the index
  if (x === undefined) {
    return "!!enter a number to search for!!";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return `Element ${x} found at index ${i}`;
    }
  }
  return `Element ${x} not found in the array`;
}

const arr = [1, 2, 56, 35, 5];
let result = searchArray(arr, 56);
console.log(result);

/**
  function searchArray(arr, x) {
  //TODO- search the index of the element x and return the index
  if (x === undefined) {
    return "!!enter a number to search for!!";
  }

  // findIndex is a clean, built-in way to do a linear search.
  const index = arr.findIndex(element => element === x);

  // findIndex returns -1 if the element is not found.
  if (index !== -1) {
    return `Element ${x} found at index ${index}`;
  } else {
    return `Element ${x} not found in the array`;
  }
}

const arr = [1, 2, 56, 35, 5];
let result = searchArray(arr, 56);
console.log(result);

 */
