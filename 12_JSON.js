console.log("======string to object conversion======");
const productJSON = `{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    }
`;
console.log(typeof productJSON);
const product=JSON.parse(productJSON);
console.log(`After conversion from json string to object`);
console.log(typeof product);
console.log(product);
console.log(product.price);

console.log("======Objet to string conversion======");
let person = {
    firstName: "Rakesh",
    age: 24,
    isMarried: true,
}
const personObj=JSON.stringify(person);
console.log(typeof person);
console.log(typeof personObj);
console.log(personObj);











