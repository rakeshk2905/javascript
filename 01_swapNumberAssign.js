// var a = 10;
// var b = 20;

// // Using a temporary variable
// var temp = a;
// a = b;
// b = temp;

// console.log("After swapping:");
// console.log("a =", a); // Output: 20
// console.log("b =", b); // Output: 10

var a = 10;
var b = 20;

// Without using a third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a =", a); // Output: 20
console.log("b =", b); // Output: 10