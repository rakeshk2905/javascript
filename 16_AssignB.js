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

console.log("==============Question 1==============");
var question1 = () => {
  for (const element of arrayEmployee) {
    if (element.emp_company == "TCS") {
      console.log(
        `Employee id is : ${element.emp_id}`,
        "----",
        `Employee Name is : ${element.emp_name}`,
        "----",
        `Employee Company Name is : ${element.emp_company}`
      );
      console.log(
        "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
      );
    }
  }
};
question1();

console.log("==============Question 2==============");
var question2 = () => {
  for (const element of arrayEmployee) {
    if (element.emp_dept == "Finance") {
      console.log(
        `Employee Department is : ${element.emp_dept}`,
        "----",
        `Employee Name is : ${element.emp_name}`
      );
      console.log(
        "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
      );
    }
  }
};
question2();

console.log("==============Question 3==============");
const employeesWithR = arrayEmployee.filter((emp) =>
  emp.emp_name.startsWith("R")
);

for (const iterator of employeesWithR) {
  console.log(
    `employee id is : ${iterator.emp_id}`,
    "---",
    `employee Name is : ${iterator.emp_name}`,
    "----",
    `employee department is : ${iterator.emp_dept}`,
    "----",
    `employee Salary is : ${iterator.emp_salary}`,
    "-----",
    `employee company name is : ${iterator.emp_company}`
  );
  console.log(
    "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
}

console.log("==============Question 4==============");
var question4 = () => {
  for (const element of arrayEmployee) {
    if (element.emp_salary > 75000) {
      console.log(
        `Employee Name is : ${element.emp_name}`,
        "---- ",
        `Employee Company Name is : ${element.emp_company}`,
        "---- ",
        `Employee Salary is : ${element.emp_salary}`
      );
      console.log(
        "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
      );
    }
  }
};
question4();

console.log("==============Question 5==============");
var question5 = () => {
  for (const iterator of arrayEmployee) {
    if (iterator.emp_salary >= 50000 && iterator.emp_dept == "IT") {
      console.log(
        `employee id is : ${iterator.emp_id}`,
        "-----",
        `employee Name is : ${iterator.emp_name}`,
        "-----",
        `employee department is : ${iterator.emp_dept}`,
        "-----",
        `employee Salary is : ${iterator.emp_salary}`,
        "-----",
        `employee company name is : ${iterator.emp_company}`
      );
      console.log(
        "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
      );
    }
  }
};
question5();

console.log("==============Question 6==============");
var question6 = () => {
  for (const element of arrayEmployee) {
    if (element.emp_company == "Infy") {
      console.log(
        `Employee id is : ${element.emp_id}`,
        "-----",
        `Employee Name is : ${element.emp_name}`,
        "-----",
        `Employee Department is : ${element.emp_dept}`,
        "-----",
        `Employee Salary is : ${element.emp_salary}`,
        "-----",
        `Employee Company Name is : ${element.emp_company}`
      );

      console.log(
        "-------------------------------------------------------------------------------------------------------------------------------------------------------------------"
      );
    }
  }
};
question6();
