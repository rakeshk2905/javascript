console.log("------------Questin 1--------------");
function greaterNumber(no1, no2) {
  if (no1 > no2) {
    console.log(`${no1} is greater value`);
  } else if (no1 < no2) {
    console.log(`${no2} is greater value`);
  } else {
    console.log(`number is zero value`);
  }
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("------------Questin 2--------------");

function isEvenOrOddNum(number){
    if(number%2==0){
        return "Given Number is Even"
    }
    else{
        return "Given Number is Odd";
    }
}
var result=isEvenOrOddNum(20);
console.log(result);

console.log("------------Questin 3--------------");

function wordLength(word){
    word=word.length;
    if(word % 2==0){
        return "EVEN"
    }
    else{
        return "ODD"
    }

}
var firstWord = wordLength("javaScript");
console.log(`Given word length is : ${firstWord} `);

var secondWord = wordLength("developer");
console.log(`Given word length is : ${secondWord} `);

var ThirdWord = wordLength("Google");
console.log(`Given word length is : ${ThirdWord} `);
