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
    meowing() {
        console.log(`Baby Cat is meowing and asking for milk`);
        console.log(`Eye color is :${this.eayColor} and total legs are: ${this.totalLegs}`);
        console.log(`Body color is :${this.bodyColor} and name is: ${this.name}`);
      
    }
  }
  
  const kittyCat = new BabyCat("Brown", "Kitty","Gray",4);
  console.log(kittyCat);
  kittyCat.meowing();
  