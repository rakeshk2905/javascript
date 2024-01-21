const array = ["Jenny", "Elon", "Stew", "Bill"];
console.log("=====Before Reverse====");
console.log(array);
console.log("After Reverse");
array.reverse();
console.log(array);

console.log("Before sorting in ascending order");
console.log(array);

console.log("After sorting in ascending order");
array.sort();
console.log(array);

console.log("After sorting in descending order");
array.reverse();
console.log(array);

const arrayNum = [1, 20, 50, 9, 79, 8];
console.log("before sort");
console.log(arrayNum);

console.log("After Sort in ascending order");
// arrayNum.sort(); This will not us the expected result
arrayNum.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(arrayNum);

console.log("After Sort in descending order using custom logic");
arrayNum.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(arrayNum);

// console.log("After Sort in descending order using reverse method");
// arrayNum.reverse();
// console.log(arrayNum);












































