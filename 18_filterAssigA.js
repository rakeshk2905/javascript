class Emlpoyee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }

  getDetails() {
    console.log(
      `Emp Id : ${this.emp_id}, Emp Name: ${this.emp_name}, Emp Dept: ${this.emp_dept}, Emp Salary: ${this.emp_salary}, Emp Company: ${this.emp_company}`
    );
  }
}
const emp_anil = new Emlpoyee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Emlpoyee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Emlpoyee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Emlpoyee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Emlpoyee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Emlpoyee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Emlpoyee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(
  "============================Question 1==================================="
);

const arrayEmpFromTCS = arrayEmployees.filter((element) => {
  return element.emp_company == "TCS";
});

arrayEmpFromTCS.forEach((element) => {
  console.log(
    `Employee Name : ${element.emp_name} , Employee Salary : ${element.emp_company}`
  );
});

console.log(
  "============================Question 2 ==================================="
);
//find the avg salary of employee from company wipro.

const avgSalaryOfWiproEmp = arrayEmployees.filter((element) => {
  return element.emp_company == "Wipro";
});
let countOfWiproEmp = avgSalaryOfWiproEmp.length;
//console.log(`Total employees working at Wipro are :${countOfWiproEmp}`);
let count = 0;
avgSalaryOfWiproEmp.forEach((element) => {
  count = element.emp_salary + count;
});
//console.log(`Addition of all employees salary : ${count}`);
let avgSalary = count / countOfWiproEmp;
console.log(`Average salary of employee from company wipro: ${avgSalary}`);

console.log(
  "============================Question 3==================================="
);
//Find the Avarage salary of employees from companys Wipro and Infy.

const wiproAndInfyEmpAvgSalary = arrayEmployees.filter((element) => {
  return element.emp_company == "Wipro" || element.emp_company == "Infy";
});

const countOfEmp = wiproAndInfyEmpAvgSalary.length;
//console.log(`Total employees working at Wipro And Infy are :${countOfEmp}`);
let count1 = 0;
wiproAndInfyEmpAvgSalary.forEach((element) => {
  count1 = element.emp_salary + count1;
});

let avgSalaryIs = count1 / countOfEmp;
//console.log(`Addition of all employees salary : ${count1}`);
console.log(
  `Avarage salary of employees from companys Wipro and Infy : ${avgSalaryIs}`
);
