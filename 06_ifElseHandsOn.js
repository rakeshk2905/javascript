console.log(`------------Step 1--------------`);
var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};
var result = isEvenOrOdd(45);
console.log(`Given number is 45 : ${result}`);

var result = isEvenOrOdd(70);
console.log(`Given number is 70 : ${result}`);

var result = isEvenOrOdd(67);
console.log(`Given number is 67 : ${result}`);

var result = isEvenOrOdd(98);
console.log(`Given number is 98 : ${result}`);

console.log(`----------Step 2-----------`);
var eligibleOrNot=function(age){
  if (age>=18) {
    returnvalueis= "You are Eligible";
  } else {
    returnvalueis= "You are not Eligible";
  }
  return returnvalueis;
}
var resultis=eligibleOrNot(18);
console.log(`Age 18 : `+resultis);

var resultis=eligibleOrNot(20);
console.log(`Age 20 : `+resultis);

var resultis=eligibleOrNot(17);
console.log(`Age 17 : `+resultis);

var resultis=eligibleOrNot(40);
console.log(`Age 40 : `+resultis);

console.log(`----------Step 3-----------`);
var isString=function(str){
  var strLength=str.length;
  if(strLength>10){
    returnValue="String contains more than 10 character";
  }
  else{
    returnValue="String contains less than 10 character";
  }
  return returnValue;
}
var isResult=isString("JavaScript-ES6");
console.log(`"JavaScript-ES6" : ${isResult}`);

console.log(`----------Step 4-----------`);
var checkStart = function (word) {
  if ( word.startsWith("Java") ) {
    console.log(`Given word - "${word}" starts with "java" `);
  } else {
    console.log(`Given word - "${word}" not starts with "java" `);
  }
};
checkStart("JavaScript Language");













