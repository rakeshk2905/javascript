console.log("====================Question 1====================");
// const arrayNum = [11, 3, 4, 11, 4, 7, 3 ];
// Remove duplicate element from array using for loop
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
var sortedArray=arrayNum.sort();
const tempArray=[];
var j=0;

for (let i = 0; i < sortedArray.length-1; i++) {
  if(sortedArray[i] == sortedArray[i+1]){
    tempArray[j]=sortedArray[i]
    j++;
  } 
}
tempArray[j]=sortedArray[sortedArray.length-1];

for (let j = 0; j < tempArray.length; j++) {
  var element = tempArray[j];
  console.log(element);
}




console.log("====================Question 2====================");
// Given String value -->const str = "How are you mate";
// Expected output → "HoW ARE YOU MatE"

function capitalizeFirstLast(input) {
  let words = input.split(" ");

  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1, -1) + word.slice(-1).toUpperCase();
  }

  return words.join(' ');
}

const str = "how are you mate";
const outputString = capitalizeFirstLast(str);
console.log(outputString);
