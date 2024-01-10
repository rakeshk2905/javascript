console.log("---------Marriage Eligibility---------");

var marriageEligibility = function (gender, age) {
var returnValue="";
    if (isNaN(age) || age<18 || age<0 || gender=="" || age== undefined) {
        returnValue=`Hey.... ${gender} your age is ${age} & its invald details`;
    } else if(gender == "Female" && age >= 18){
        returnValue=`Hey.... ${gender} your age is ${age} & you are eligible for marriage`;
    }
    else if(gender == "Male" && age >= 21){
        returnValue=`Hey.... ${gender} your age is ${age} & you are eligible for marriage`;
    }
    else if(gender == "Other" && age >= 21){
        returnValue=`Hey.... ${gender} your age is ${age} & you are eligible for marriage`;
    }
    else{
        returnValue=`Hey.... ${gender} your age is ${age} & you are not eligible for marriage`;
    }
return returnValue;
};

var result = marriageEligibility("Male", 17);
console.log(result);

var result = marriageEligibility("Male", 25);
console.log(result);

var result = marriageEligibility("Female", 28);
console.log(result);

var result = marriageEligibility("Female", 16);
console.log(result);

var result = marriageEligibility("", );
console.log(result);

var result = marriageEligibility("Other", 35);
console.log(result);

var result = marriageEligibility("Other", 41);
console.log(result);



