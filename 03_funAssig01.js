console.log("🚩🚩🚩🚩🚩🚩🚩🚩Question 1🚩🚩🚩🚩🚩🚩🚩🚩");

function fun(){
    console.log("First Function");
}

function gun(){
    console.log("Second Function");
}

fun();
gun();

console.log("🚩🚩🚩🚩🚩🚩🚩🚩Question 2🚩🚩🚩🚩🚩🚩🚩🚩");

function personalDetails(firstName,lastName,collegeName){
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("College Name: "+collegeName);
}
personalDetails("Rakesh","Kawade","Sangamner College Sangamner");

console.log("🚩🚩🚩🚩🚩🚩🚩🚩Question 3🚩🚩🚩🚩🚩🚩🚩🚩");

function swapValues(Value1,Value2){
    console.log("Before Swap: "+"Value 1->"+Value1+" , "+"Value 2->"+Value2);

    var temp=Value1;
    Value1=Value2;
    Value2=temp;

    console.log("After Swap: "+"Value 1->"+Value1+" , "+"Value 2->"+Value2);
}

swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("🚩🚩🚩🚩🚩🚩🚩🚩Question 4🚩🚩🚩🚩🚩🚩🚩🚩");

function addThreeValues(no1,no2,no3){
    var addition=no1+no2+no3;
    return addition;
}

var result1=addThreeValues(10.23,600,40);
console.log("Addition of Result 1 is : "+result1);

var result2=addThreeValues("Hello","Good","Morning")
console.log("Addition of Result 2 is : "+result2);


