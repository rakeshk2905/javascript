const arrayNum = [2, 4, 6, 8];
console.log(arrayNum);
console.log(`Total Elemnts in the array is: ${arrayNum.length}`);
console.log(`array type is: ${typeof arrayNum}`);

console.log(`======Read or access values from array======`);
const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2 is :  ${elementAtIndex2}`);

console.log(`======Traversing value from array======`);
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
}

console.log(`======WAP to sum of values from array======`);
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    sum = sum + arrayNum[index];
}
console.log(sum);

console.log(`======WAP to find even of values from array======`);
let even = 0;
for (let index = 0; index < arrayNum.length; index++) {
    if (index % 2 == 0) {
        console.log();
    }
}

console.log(`======WAP to find index from array======`);
const indexOf6 = arrayNum.indexOf(6);
console.log(`Index of 6 is: ${indexOf6}`);
const indexOf10 = arrayNum.indexOf(10);
console.log(`Index of 10 is: ${indexOf10}`);

let array = ["Jenny", "Menny", "Bill"];
console.log(`====Adding element at  the end====`);
array.push("Elon");
console.log(array);

console.log(`====Remove element at  the end====`);
array.pop();
console.log(array);

console.log(`====Adding element at  the First position====`);
array.unshift("Narayan");
console.log(array);

console.log(`====Remove element at  the first position====`);
array.shift();
console.log(array);

console.log(`====Selecting multiple elements====`);
let arrayNums=[11,22,33,44,55,66,77];
 let element=arrayNums.slice(2);
 console.log(element);

 const elementsMiddle=arrayNums.slice(1,5);
 console.log(elementsMiddle);


console.log(`===Removing or deleting an element====`);
const removedElements=arrayNums.splice(3);
console.log(`===Removed Elements====`);
console.log(removedElements);
console.log(`=====Original Array===`);
console.log(arrayNums);

console.log(`===Removing or deleting an element in middle====`);
let arrayNu=[11,22,33,44,55,66,77];
const removed=arrayNu.splice(3,1);
console.log(`====Deleted Elements===`);
console.log(removed);
console.log(`====Original array===`);
console.log(arrayNu);

console.log(`===insert an elements in the middle===`);
let arrayN=[11,22,33,44,55,66,77];
arrayN.splice(3,0,99);
console.log(arrayN);

console.log(`===Replace an elements in the middle===`);
let arrayReplace=[11,22,33,44,55,66,77];
console.log(`Original array`);
console.log(arrayReplace);
console.log(`After Replace 33 with 100`);
arrayReplace.splice(2,1,100);
console.log(arrayReplace);

console.log(`After Replace 33 with 100 and 44,55 with 200`);
arrayReplace.splice(2,3,100,200);
console.log(arrayReplace);



















