const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("====================Question 1======================")
//Add 10 into each element and log new array on console

const arrayAdd10IntoEle = arrayNumbers.map((element)=>{
    return element +10;
});
console.log(`Adding 10 in Every element:`);
console.log(arrayAdd10IntoEle);

console.log("====================Question 2======================")

const cubEachElement = arrayNumbers.map((element) => {
    return element**3;
});
console.log("Cub of element:");
console.log(cubEachElement);

console.log("====================Question 3======================")
const addIndexValue = arrayNumbers.map((element , index)=> {
  return index + element;
});
console.log("After adding index value in its corresponding array element:");
console.log(addIndexValue);