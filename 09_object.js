let person = {
    firstName: "Rakesh",
    age: 24,
    isMarried: true,
};
console.log(person);
console.log(`Dot Notation`);
console.log(person.firstName); //Dot Notation
console.log(`Square bracket notation`);
console.log(person["firstName"]); //Square bracket notation

console.log(`===Add properties in object===`);
person.designantion = "Tech Arch";
console.log(person);

console.log(`=====Update the values====`);
person.age = 33;
console.log(person);

person.isMarried = false;
console.log(person);

console.log(`====Data retrive in tabular format=====`);
console.table(person);

console.log(`====Delete property====`);
delete person.designantion;
console.table(person);

console.log(`===Create empty object===`);
let address = {};
address.city = "pune";
console.log(address);

let user = {
    userName: "Jenny",
    country: "USA",
    address: {
        city: "Pune",
        street: "Wakad",
        pin: 411057,
        getAddress: function () {
            console.log(`complete address : ${this.street} , ${this.city} , ${this.pin},${this.flatNo}`);
        }
    },
    show: function () {
        console.log(`Inside show function`);
    },
};
// console.log(user);
// user.show();
// console.log(user.address.pin);

// user.address.flatNo=101;
// console.log(user.address);

console.log(user.address.getAddress());

console.log(`======Travers on object======`);
let developer = {
    firstName: "Rakesh",
    age: 24,
    isMarried: true,
    skills: ["C", "C++", "Core java", "Javascript", "Microservices"]
};

for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`key===> ${key} , value===>${element}`);
    }

}

console.log(developer.skills);

developer.skills.push("HTML");
console.log(developer.skills);

developer.skills.shift();
console.log(developer.skills);




















