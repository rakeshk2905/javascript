var greet = "Good Morning";
console.log("Length : " + greet.length);

var charAtIndex5 = greet.charAt(5);
console.log("5th number position character : " + charAtIndex5);
console.log("Type of index5 : " + typeof charAtIndex5);

var str1 = "Hey ";
var str2 = "Smarty";
var concatresult = str1.concat(str2);
console.log("Concated string is : " + concatresult);

var indexOfD = greet.indexOf("D");
console.log("Index of D : " + indexOfD);

var indexOfd = greet.indexOf("d");
console.log("Index of d : " + indexOfd);

var indexOfnin = greet.indexOf("nin");
console.log("Index of nin : " + indexOfnin);

var indexOfo = greet.lastIndexOf("o");
console.log("Index of o : " + indexOfo);

var myName = "Gajanan Kharat";
var name = myName.replace("Kharat", "Prabhakar Kharat");
console.log("My name : " + name);

var city = "  pune  ";
console.log("Lenth is : " + city.length);
var trimResult = city.trim();
//console.log("After trim city is :"+trimResult+", "+"its length is: "+trimResult.length);
console.log("Variable Substitution");
console.log(
  `After trim city is : ${trimResult}, Its length is: ${trimResult.length} `
);
console.log('My name is "Rakesh"');

var num = 15;
var result = num.toString();
//var numResult=num.toString();
console.log(`Number is: ${num} and its Type is: ${typeof num}`);
console.log(
  `After Conversesion Number is: ${result}, its Type is: ${typeof result} `
);

var greet = "Good Morning";
var isAvailable = greet.includes("ing");
console.log(`is substring "ing" available => ${isAvailable}`);

var sliceof = greet.slice(5, 8);
console.log(`Slice is : ${sliceof}`);

var word = "Jeeny Herry";
var result = greet.split(" ");
console.log(result);
console.log(`Total words in the string is : ${result.length}`);
console.log(typeof result);

var givenString = "Hey I am UI and Java Developer";
var result = givenString.split(" ");
console.log(result);
console.log(`Total Words in string is : ${result.length}`);
