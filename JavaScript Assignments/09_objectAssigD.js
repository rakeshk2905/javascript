console.log(`=====Step First=====1. Think of all the properties that you could add (Add minimum 5 properties)`);
let professorStepFirst = {
    firstName: "Rakesh",
    lastName: "Kawade",
    age: 24,
    isMarried: false,
    country: "India"
}
console.log(professorStepFirst);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`=====Step Second=====2. Also include nested object 'degrees' like engineering: 'CSC', PHD: 'Adv Computing' and few more.`);
let professorStepSecond = {
    firstName: "Rakesh",
    lastName: "Kawade",
    age: 24,
    isMarried: false,
    country: "India",
}

professorStepSecond.degrees = {
    engineering: "CSC",
    PHD: "Adv Programming",
    PG: "MSC",
}
console.log(professorStepSecond.degrees);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Third=====3. Also add one array → 'certificates' with his certificates like 'Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'`);
let professorStepThird = {
    firstName: "Rakesh",
    lastName: "Kawade",
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    }
}
professorStepThird.certificates = ["Hacker Rank Participation", "Certificate in IFE Cource", "Certificate in Adv Programming"];
console.log(professorStepThird.certificates);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Four=====4. Try to add new property like totalExperience: "14 years" and log object on console`);
let professorStepFour = {
    firstName: "Rakesh",
    lastName: "Kawade",
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Certificate in Adv Programming"]
}
professorStepFour.totalExperience = "14 years";
console.log(professorStepFour.totalExperience);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Five=====5. Modify any existing property and log object on console`);
let professorStepFive = {
    firstName: "Rakesh",
    lastName: "Kawade",
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Certificate in Adv Programming"],
    totalExperience : "14 years"
}

professorStepFive.lastName="Patil";
console.log(professorStepFive);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Six=====6. Add one new certificate → "Oracle Certified" at the 2nd index of array → certificates`);
let professorStepSix = {
    firstName: "Rakesh",
    lastName: "patil", // lastName: "Kawade", 
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Certificate in Adv Programming"],
    totalExperience : "14 years"
}

professorStepSix.certificates.splice(2,0,"Oracle certified");
console.table(professorStepSix.certificates);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Seven=====7. Log the last element of the array →certificates.`);
let professorStepSeven = {
    firstName: "Rakesh",
    lastName: "patil", // lastName: "Kawade", 
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Oracle certified", "Certificate in Adv Programming"],
    totalExperience : "14 years"
}
console.log(`${professorStepSeven.certificates.pop()}`);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Eight=====8. Log complete object on console.`);
let professorStepEight = {
    firstName: "Rakesh",
    lastName: "patil", // lastName: "Kawade", 
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Oracle certified"],
    totalExperience : "14 years"
}
console.table(professorStepEight);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);


console.log(`=====Step Nine=====9. Traverse array certificates using for of loop`);
let professorStepNine = {
    firstName: "Rakesh",
    lastName: "patil", // lastName: "Kawade", 
    age: 24,
    isMarried: false,
    country: "India",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Programming",
        PG: "MSC",
    },

    certificates : ["Hacker Rank Participation", "Certificate in IFE Cource", "Oracle certified"],
    totalExperience : "14 years"
}

for (const iterator of professorStepNine.certificates) {
    console.log(iterator);
}

console.log(`----------------------------------------------------------------------------------`);






















