//arrow function with no arguments and no return value
let show = () => {
    console.log(`inside arrow function with no arguments and no return value`);
  }
  show();

  //arrow function with arguments and no return value
const add=(num1,num2)=>{
    console.log(`Addition is : ${num1+num2}`);
}
add(10,40);

//arrow function with arguments and return value
const mult=(num1,num2)=>{
    const result=num1*num2;
    return result;
}
const returnValue=mult(5,5);
console.log(`Multiplication is : ${returnValue}`);

//Write a arrow function with input value 'JavaScript' and return total number of characters

const count = (arg) => {
    return arg.length;
  };
  const result = count ('JavaScript');
  console.log(`Total characters are : ${result}`); // Output: 10

























  