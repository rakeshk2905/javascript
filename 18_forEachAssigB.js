class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`=============Question 1===============`);
arrayEmployee.forEach((value)=>{
    if (value.emp_company == "TCS") {
        console.log(`Employee Name is : ${value.emp_name} & Company is : ${value.emp_company}`);
    }
});

console.log(`=============Question 2===============`);
const arrayOfQuestion2 = [];
arrayEmployee.forEach((value)=>{
    if (value.emp_salary >= 50000) {
        return arrayOfQuestion2.push(value);
    }
});
console.log(arrayOfQuestion2);
arrayOfQuestion2.forEach((value)=>{
    console.log(value);
});

console.log(`=============Question 3===============`);
let arrayOfQuestion3 = 0;
arrayEmployee.forEach((value)=>{
    return arrayOfQuestion3 = arrayOfQuestion3+value.emp_salary;
});
console.log(`Total Employee salary is : ${arrayOfQuestion3}`);

console.log(`=============Question 4===============`);
let arrayOfQuestion4 = 0;
let average = 0;
arrayEmployee.forEach((value)=>{
     arrayOfQuestion4 = arrayOfQuestion4+value.emp_salary;
return average= arrayOfQuestion4/arrayEmployee.length;
    });
console.log(`Employee average salary is : ${average}`);

console.log(`=============Question 5===============`);
arrayEmployee.forEach((value)=>{
    if ((value.emp_dept == "IT" || value.emp_dept == "HR") && value.emp_salary >= 75000) {
        console.log(value);
    }
});































