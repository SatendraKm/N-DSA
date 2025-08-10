/**
 * Performs a binary search on a SORTED array.
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} x - The element to search for.
 * @returns {string} A message indicating if the element was found and at what index.
 */
function binarySearch(arr, x) {
  if (x === undefined) {
    return "!!enter a number to search for!!";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Find the middle index
    const mid = Math.floor(left + (right - left) / 2);

    // Check if x is present at mid
    if (arr[mid] === x) {
      return `Element ${x} found at index ${mid}`;
    }

    // If x is greater, ignore the left half
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      // If x is smaller, ignore the right half
      right = mid - 1;
    }
  }

  // If we reach here, then the element was not present
  return `Element ${x} not found in the array`;
}

// NOTE: The array MUST be sorted for binary search to work.
const sortedArr = [1, 2, 5, 35, 56];
let result = binarySearch(sortedArr, 56);
console.log(result); // Output: Element 56 found at index 4

let resultNotFound = binarySearch(sortedArr, 99);
console.log(resultNotFound); // Output: Element 99 not found in the array
