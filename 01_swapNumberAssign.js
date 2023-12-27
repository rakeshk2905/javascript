console.log("🚩🚩🚩🚩Using temprory variable🚩🚩🚩🚩");
var no1 = 10;
var no2 = 20;

//Using temprory variable
var temp = no1;
no1 = no2;
no2 = temp;

console.log("after swapping:");
console.log("no1 =", no1); // Output: 20
console.log("no2 =", no2); // Output: 10

console.log("🚩🚩🚩🚩Without Using temprory variable🚩🚩🚩🚩");
var value1 = 10;
var value2 = 20;

// Without using a third variable
value1 = value1 + value2;
value2 = value1 - value2;
value1 = value1 - value2;

console.log("after swapping:");
console.log("no1 =", value1); // Output: 20
console.log("no2 =", value2); // Output: 10