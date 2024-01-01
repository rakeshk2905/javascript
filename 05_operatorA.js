console.log("-------------Question 1---------------");

function squareOfWordLength(str1) {
  var length1is = str1.length;
  var square1is = length1is * length1is;
  return square1is;
}

var word1SquareLength = squareOfWordLength("JavaScript");
console.log(`First Word Square Length is : ${word1SquareLength}`);

var word2SquareLength = squareOfWordLength("Google Chrome");
console.log(`Second Word Square Length is : ${word2SquareLength}`);

var word3SquareLength = squareOfWordLength("Developer Smart");
console.log(`Third Word Square Length is : ${word3SquareLength}`);

console.log("-------------Question 2---------------");

function lengthDivide() {
  var str = "I am Angular Developer";

  var splitWords = str.split(" ");
  splitWords = splitWords.length;
  console.log(`Words count is: ${splitWords} `);

  var stringLength = str.length;
  console.log(`Total charactres count is : ${stringLength} `);

  var division = stringLength / splitWords;
  console.log(`After division for stringLength and wordsLength : ${division}`);

  var multiplication = stringLength * splitWords;
  console.log(
    `After multiplication for stringLength and wordsLength : ${multiplication}`
  );
}
lengthDivide();
