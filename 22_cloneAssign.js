const arrayNums = [20, 3, 4, 56, 90, 400, 49];

console.log(`===================Question 1===================`);
const cloneArray = [...arrayNums];
cloneArray.push(55, 66);
console.log("Cloned array is : ", cloneArray);
console.log("Original Array is :", arrayNums);

console.log(` `);
console.log(`===================Question 2===================`);
arrayNums.splice(3, 0, 25);
arrayNums.splice(3, 0, 10);
console.log("Cloned array is : ", cloneArray);
console.log("Original Array is :", arrayNums);

console.log(` `);
console.log(`===================Question 3===================`);
let arrayEven = [2, 30, 14, 8];
const spreadArrayNums = [...arrayNums];
const spreadarrayEven = [...arrayEven];
console.log("Original arrayNums array is ", arrayNums);
console.log("arrayEven array is ", arrayEven);
const concatedArray = arrayNums.concat(arrayEven);
console.log("After Concatination : ", concatedArray);

console.log(` `);
console.log(`===================Question 4===================`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"],
};
console.log(employee_info);

console.log(` `);
console.log(`===================Question 5 a===================`);
console.log("Locality is : " , employee_info.address.locality);
console.log("City is : " , employee_info.address.city);
console.log("State is : " , employee_info.address.state);
console.log("Country is : " , employee_info.address.country);

console.log(` `);
console.log(`===================Question 5 b===================`);
console.log("Mobile Numbers is : " , employee_info.mobiles);

console.log(` `);
console.log(`===================Question 6 c===================`);
const OriginalArray = employee_info;
console.table(OriginalArray);

console.log(` `);
console.log(`===================Question 6 a===================`);
const clonedArray= JSON.parse(JSON.stringify(employee_info.salary.july_month = "80,000INR"));
console.table(employee_info);

console.log(` `);
console.log(`===================Question 6 b===================`);
JSON.stringify(employee_info.address.country = "United Kingdom");
console.table(employee_info.address);

console.log(` `);
console.log(`===================Question 6 c===================`);
console.table(employee_info);

