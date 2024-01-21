class Emlpoyee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    getDetails(){
        console.log(`Emp Id : ${this.emp_id}, Emp Name: ${this.emp_name}, Emp Dept: ${this.emp_dept}, Emp Salary: ${this.emp_salary}, Emp Company: ${this.emp_company}`);
    }
}
const emp_anil = new Emlpoyee(22, "Anil" , "IT" ,50000, "TCS");
const emp_radha = new Emlpoyee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Emlpoyee(55, "Rishi" , "Finance" , 47000,"TCS");
const emp_sonali = new Emlpoyee(66, "Sonali" , "Finance",45000, "Infy");
const emp_monika = new Emlpoyee(77, "Monika" , "IT", 40000, "Wipro");
const emp_viny = new Emlpoyee(88, "Vinayak" ,"IT", 75000, "TCS");
const emp_mahi = new Emlpoyee(99 , "Mahesh", "HR", 85000, "Infy");


const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("==================Question 1 Employee salary Array===================");

const arrayOfSalary = arrayEmployees.map((element)=> {

  return element.emp_salary

})
console.log(arrayOfSalary);

console.log("==================Question 2 Employee Depertment Array======================");


const arrayOfDept = arrayEmployees.map((element)=> {

    return element.emp_dept;
})

console.log(arrayOfDept);

console.log("==================Question 3 Employee Id Array======================");

const arrayOfIds = arrayEmployees.map((element) => {


    return element.emp_id;

})
console.log(arrayOfIds);

































