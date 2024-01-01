var n1 = 7;
var n2 = 2;
var n3 = 3;

console.log(`=========Arithmatic operators========`);

var result = n1 + n2;
console.log(`Addition is: ${result}`); //Variable substitution

var result = n1 - n2;
console.log(`Substraction is: ${result}`); //Variable substitution

var result = n1 * n2;
console.log(`Multiplication is: ${result}`); //Variable substitution

var result = n1 % n2;
console.log(`Modulus(Reminder) is: ${result}`); //Variable substitution

var result = n1 / n2;
console.log(`Division is: ${result}`); //Variable substitution

var result = n1 ** n3;
console.log(`Exponention is: ${result}`); //Variable substitution

var a = 7;
a++;
a--;
console.log(`Result is: ${a}`);

console.log(`=========Assignment operators========`);

var num = 10;
num += 2;  //compond addition (num=num+2)
console.log(`compond addition is: ${num}`);

var num = 10;
num -= 2;  //compond Subtraction (num=num-2)
console.log(`compond Subtraction is: ${num}`);

var n = 8;
var ternary = n % 2 == 0 ? "Even" : "Odd";
console.log(`Ternary operator result is: ${ternary}`);

var no1 = "100";
var no2 = 100;
var result = no1 == no2 ? true : false; //double equal operator check values only not datatype
console.log(`result is: ${result}`);

var result = no1 === no2 ? true : false; //triple equal operator check values and aslo datatype
console.log(`result is: ${result}`);
 
var value1=8;
var value2="8";

var result = value1 == value2 ? true : false; //double equal operator check values only not datatype
console.log(`equal result is: ${result}`);

var result = value1 != value2 ? true : false;
console.log(`Not equal result is: ${result}`);

var result = value1 !== value2 ? true : false; 
console.log(`Strictly not equal result is: ${result}`);

var result = value1 > value2 ? true : false; 
console.log(`Strictly Greater than result is: ${result}`);

var result = value1 >= value2 ? true : false;
console.log(`Greater than equal result is: ${result}`);

var result = value1 < value2 ? true : false;
console.log(`Strictly less than result is: ${result}`);

var result = value1 <= value2 ? true : false; 
console.log(`less than equal result is: ${result}`);

