class Polymorphism {
  display() {
    console.log(`Cat is meowing`);
  }
  display(rollNo) {
    console.log(`Cat roll Number is ${rollNo}`);
  }
  display(rollNo, name) {
    console.log(`Cat roll Number is ${rollNo} and name is ${name}`);
  }
  display(rollNo, name, collegeName) {
    console.log(
      `Cat roll Number is ${rollNo} and name is ${name} and college name is ${collegeName}`);
  }
}
const poly = new Polymorphism();
poly.display(4, "rakesh");
