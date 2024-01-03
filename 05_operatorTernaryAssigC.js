console.log(`--------------(maleMarriageEligibility) Using annonumas or unnamed function--------------`);
var maleMarriageEligibility = function(gender,age,boyName){
   var result = gender=="Male" && age>=21 
    ?  `Hey ${boyName} you are eligible for Marriage` 
    : `Hey ${boyName} you are not eligible for Marriage`; ; 
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");

console.log(`---------------------(maleMarriageEligibility) Using named function----------------------`);
function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : `Hey ${boyName} you are not eligible for Marriage`;
  console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");

console.log(`--------------(FemaleMarriageEligibility) Using annonumas or unnamed function--------------`);
var femaleMarriageEligibility = function(gender,age,girlName){
  var result = gender=="Female" && age>=18
   ?  `Hey ${girlName} you are eligible for Marriage` 
   : `Hey ${girlName} you are not eligible for Marriage` ; 
   console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");

console.log(`---------------------(femaleMarriageEligibility) Using named function----------------------`);
function femaleMarriageEligibility(gender, age, girlName) {
 var result =
   gender == "Female" && age >= 18
     ? `Hey ${girlName} you are eligible for Marriage`
     : `Hey ${girlName} you are not eligible for Marriage`;
 console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");