function LargestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const arr = [1, 2, 500, 35, 56];
let result = LargestNumber(arr);
console.log(result);

// /**
//  * Finds the largest number in an array of numbers.
//  * @param {number[]} arr The array of numbers.
//  * @returns {number | null} The largest number, or null if the array is empty.
//  */
// function findLargestNumber(arr) {
//   // Edge Case: Handle empty or non-existent arrays.
//   if (!arr || arr.length === 0) {
//     return null; // Returning null is a clear way to indicate "no result".
//   }

//   let largest = arr[0];
//   // We can start the loop from the second element (index 1)
//   // since we already initialized 'largest' with the first one.
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// const arr = [1, 2, 500, 35, 56];
// let result = findLargestNumber(arr);
// console.log(`The largest number is: ${result}`);

// // --- Alternative using a more concise, built-in method ---

// function findLargestWithMathMax(arr) {
//   if (!arr || arr.length === 0) {
//     return null;
//   }
//   // The spread operator (...) passes all array elements as arguments to Math.max.
//   return Math.max(...arr);
// }

// let result2 = findLargestWithMathMax(arr);
// console.log(`The largest number (using Math.max) is: ${result2}`);
