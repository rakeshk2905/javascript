console.log(`-------------Grade System--------------`);

var gradeSystem = function (marks) {
  var returnValue = "";
  if (marks < 0 || marks > 100 || marks == undefined || isNaN(marks)) {
    returnValue = `Marks are ${marks}... Invalid input... Please Enter correct marks}`;
  } else if (marks < 35 && marks > 0) {
    returnValue = `Marks are ${marks}... Unfortunately you are Fail... Better luck for next time.... `;
  } else if (marks >= 35 && marks <= 50) {
    returnValue = `Marks are ${marks}... Congratulations You are pass & Grade is C`;
  } else if (marks >= 50 && marks <= 75) {
    returnValue = `Marks are ${marks}... Congratulations You are pass & Grade is B`;
  } else if (marks >= 75 && marks <= 100) {
    returnValue = `Marks are ${marks}... Congratulations You are pass & Grade is A`;
  }
  return returnValue;
};

var result = gradeSystem(50);
console.log(`Your result is : ${result}`);

var result = gradeSystem(NaN);
console.log(`Your result is : ${result}`);

var result = gradeSystem(0);
console.log(`Your result is : ${result}`);

var result = gradeSystem(null);
console.log(`Your result is : ${result}`);

var result = gradeSystem(-50);
console.log(`Your result is : ${result}`);
