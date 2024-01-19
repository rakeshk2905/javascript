const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`=============Question 1===============`);
const arrayOfQuestion1=[];
arrayNumber.forEach((currentValue, index) => {
   return arrayOfQuestion1.push(currentValue);
  });
console.table(arrayOfQuestion1);

console.log(`=============Question 2===============`);
const arrayOfQuestion2=[];
arrayNumber.forEach(currentValue=>{
    if (currentValue > 0 ) {
        return arrayOfQuestion2.push(currentValue);
    }
});
console.log(`Positive Numbers are : [${arrayOfQuestion2}]`);

console.log(`=============Question 3===============`);
const arrayOfQuestion3=[];
arrayNumber.forEach(currentValue=>{
    if (currentValue < 0 ) {
        return arrayOfQuestion3.push(currentValue);
    }
});
console.log(`Negative Numbers are : [${arrayOfQuestion3}]`);

console.log(`=============Question 4===============`);
const arrayOfQuestion4=[];
arrayNumber.forEach(currentValue=>{
    if (currentValue % 2 ===0 ) {
        return arrayOfQuestion4.push(currentValue);
    }
});
console.log(`Even Numbers are : [${arrayOfQuestion4}]`);

console.log(`=============Question 5===============`);
let arrayOfQuestion5=0;
arrayNumber.forEach(currentValue=>{
    return arrayOfQuestion5 = arrayOfQuestion5+currentValue;
});
console.log(`sum of Numbers are : [${arrayOfQuestion5}]`);

console.log(`=============Question 6===============`);
const arrayOfQuestion6=[];
arrayNumber.forEach((currentValue , index) =>{
    if (index % 2 == 0 ) {
        return arrayOfQuestion6.push(currentValue);
    }
});
console.log(`Even index value are : [${arrayOfQuestion6}]`);















































































































