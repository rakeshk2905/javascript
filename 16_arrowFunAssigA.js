console.log(`=========Question 1==========`);
const question1=()=>{
    console.log(`"Good Moring, Today is Thursday"`);
}
question1();

console.log(`=========Question 2 a==========`);
const question2=(num1,num2,num3)=>{
    let multiplication =num1*num2*num3;
    return multiplication;
}
var returnValue=question2(5,5,2);
console.log(`Multiplcation of first call is : ${returnValue}`);

console.log(`=========Question 2 b==========`);
const question2b=(num1,num2,num3=1)=>{
    let multiplication =num1*num2*num3;
    return multiplication;
}
var returnValue=question2b(10,4);
console.log(`Multiplcation of second call is : ${returnValue}`);


console.log(`=========Question 3 a==========`);
var question3=(num1,num2,num3,num4,num5)=>{
    let addition =num1+num2+num3+num4+num5;
    return addition;
}
var returnValue=question3(100,100,200,349,756);
console.log(`Addition of 3.a is : ${returnValue}`);

console.log(`=========Question 3 c==========`);
var question3=(num1,num2,num3,num4,num5)=>{
    let addition =num1+" "+num2+" "+num3+" "+num4+" "+num5;
    return addition;
}
var returnValue=question3("I am" , "learning" ,"ES6" , 'features' , "in depth");
console.log(` Addition of 3.c is : ${returnValue}`);










































