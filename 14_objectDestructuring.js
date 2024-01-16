
console.log(`===========object destructuring===================`);

let person = {
    firstName: "Rakesh",
    age: 24,
    isMarried: true,
    city: "pune",
    country:"bharat"
}

// let firstName=person.firstName;
// let age=person.age;
// let city=person.city;

let {firstName,age,country,city="mumbai",Pin=12345} =person;

console.log(firstName,age,country,city,Pin);

console.log(`===========Array destructuring===================`);

let array=["jenny","elon","bill"];
// const element0=array[0];
// const element1=array[1];
// const element2=array[2];

let [element0,element1,element2,element3="tim cook"]= array;
console.log(element0,element1,element2,element3);





