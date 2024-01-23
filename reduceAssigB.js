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

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log("======================Question 1==============================");
console.log('=========Find all the employees from "Wipro" company==========');
let wiproEmp = arrayEmps.filter((value) => {
  return value.emp_company == "Wipro";
});
//console.log(wiproEmp);

wiproEmp.forEach((element) => {
  console.log(element);
});

console.log("======================Question 2==============================");
console.log('=====Find all the employees from "HR" OR "IT" department=======');
let hrOrITEmp = arrayEmps.filter((value) => {
  return value.emp_dept == "HR" || value.emp_dept == "IT";
});
//console.log(hrOrITEmp);

hrOrITEmp.forEach((element) => {
  console.log(element);
});

console.log("======================Question 3==============================");
console.log("====Find all the employees whos emp id's are greater than 50===");
let empIdGreaterThan50 = arrayEmps.filter((value) => {
  return value.emp_id > 50;
});
//console.log(empIdGreaterThan50);

empIdGreaterThan50.forEach((element) => {
  console.log(element);
});

console.log("======================Question 4==============================");
console.log(
  '====Find all the employees whose names starts with letter "A" or "V" or "M" ==='
);
let empNameStartsWithAVM = arrayEmps.filter((value) => {
  return (
    value.emp_name.startsWith("A") ||
    value.emp_name.startsWith("V") ||
    value.emp_name.startsWith("M")
  );
});
//console.log(empNameStartsWithAVM);

empNameStartsWithAVM.forEach((element) => {
  console.log(element);
});

console.log("======================Question 5==============================");
console.log("====Find the Average salary for all department===");

//Function to calculate the average salary for a given department
function calculateAverageSalary(department) {
  // Filter employees based on the department
  const departmentEmployees = arrayEmps.filter(emp => emp.emp_dept === department);

  // Use reduce to calculate the sum of salaries
  const totalSalary = departmentEmployees.reduce((sum, emp) => sum + emp.emp_salary, 0);

  // Calculate the average salary
  const averageSalary = totalSalary / departmentEmployees.length;

  return averageSalary;
}

// Get the unique departments from the array
const uniqueDepartments = [...new Set(arrayEmps.map(emp => emp.emp_dept))];

// Calculate and print the average salary for each department
uniqueDepartments.forEach(department => {
  const averageSalary = calculateAverageSalary(department);
  console.log(`Average Salary for ${department} department: ${averageSalary}`);
});


console.log("======================Question 6==============================");
console.log("====Find the Average salary for IT department===");

const itEmployees = arrayEmps.filter(emp => emp.emp_dept === 'IT');

if (itEmployees.length > 0) {
  const totalSalary = itEmployees.reduce((acc, emp) => acc + emp.emp_salary, 0);
  const averageSalary = totalSalary / itEmployees.length;

  console.log(`Average salary for 'IT' department using filter() and reduce() methods: ${averageSalary}`);
} else {
  console.log('No employees found in the IT department.');
}

