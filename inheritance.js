class MotherCat {
  constructor(eayColor, totalLegs) {
    this.eayColor = eayColor;
    this.totalLegs = totalLegs;
  }

  meowing() {
    console.log(`Cat is meowing`);
    console.log(`Eye color is :${this.eayColor} and total legs are: ${this.totalLegs}`);
  }
}

class BabyCat extends MotherCat {
  constructor(bodyColor, name,colorOfEye,legs) {
    super(colorOfEye,legs);
    this.bodyColor = bodyColor;
    this.name = name;
  }
  eating(){
      console.log(`Baby Cat eating`);
  }
}

const kittyCat = new BabyCat("Brown", "Kitty","Gray",4);
console.log(kittyCat);
kittyCat.meowing();
