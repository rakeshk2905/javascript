var arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`===========Question 1 - Reverse the Array ===========`);
const reverseArray = arrayRollNumbers.reverse();
console.log(reverseArray);

console.log(` `);
console.log(
  `====Question 2 - Use the sort() method as it is without any custom sorting \n logic (Without passing any arguments) & notice the issue====`
);
const sortArray = arrayRollNumbers.sort();
console.log(sortArray);

console.log(` `);
console.log(
  `====Question 3 - Sort the array in ascending order, by writing your custom logic====`
);
function selectionSort(arrayRollNumbers) {
  for (let i = 0; i < arrayRollNumbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrayRollNumbers.length; j++) {
      if (arrayRollNumbers[j] < arrayRollNumbers[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // Swap arr[i] and arr[minIndex]
      const temp= arrayRollNumbers[i];
      arrayRollNumbers[i] = arrayRollNumbers[minIndex];
      arrayRollNumbers[minIndex] = temp;
    }
  }
  return arrayRollNumbers;
}
const accendingArray =  selectionSort(arrayRollNumbers);
console.log(accendingArray);

console.log(` `);
console.log(
  `====Question 4 - Find the Greatest number from the array====`
);

function findGreatestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    
    let greatest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
        }
    }
    return greatest;
}

var arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
var greatestNumber = findGreatestNumber(arrayRollNumbers);
console.log(greatestNumber);

// console.log(` `);
// console.log(
//   `====Question 5 - Find the smallest number from the array====`
// );

// function findSmallestNumber(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }
    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[0]) {
//             arr[0] = arr[i];
//         }
//     }
//     return arr[0];
// }

// var arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
// var smallestNumber = findSmallestNumber(arrayRollNumbers);
// console.log(smallestNumber);

console.log(` `);
console.log(
  `====Question 6 - Remove duplicates from array====`
);

var arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
var set = new Set(arrayRollNumbers);
var duplicate= Array.from(set);
console.log(duplicate);





















