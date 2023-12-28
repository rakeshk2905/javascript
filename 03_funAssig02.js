
function bankDetails(bankName,accountNum,location,pinCode){
var citybank=("Bank Name->"+ bankName+" | "+"Account Number->"+accountNum+" | "+"Location->"+location+" | "+"Pin Code->"+pinCode);
var axisbank=("Bank Name->"+ bankName+" | "+"Account Number->"+accountNum+" | "+"Location->"+location+" | "+"Pin Code->"+pinCode);
var hdfcbank=("Bank Name->"+ bankName+" | "+"Account Number->"+accountNum+" | "+"Location->"+location+" | "+"Pin Code->"+pinCode);

return citybank,axisbank,hdfcbank;
}

var cityBankDetails=bankDetails("CITI Bank",3456782345,'Pune',431202);
console.log(cityBankDetails);
var axisBankDetails=bankDetails("Axis Bank",7856782345,'Mumbai',441202);
console.log(axisBankDetails);
var hdfcBankDetails=bankDetails("HDFC Bank",8956782345,'Pune',631202,"Open");
console.log(hdfcBankDetails);
