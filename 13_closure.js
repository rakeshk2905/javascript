var globalVariable = 100;
function outer() {
  let outerFunVariable = 200;

  let innerFunction = function () {

    let innerFunctionVariable=300;
    console.log(`${innerFunctionVariable}`);
    console.log(`${globalVariable}`);
    console.log(`${outerFunVariable}`);
  };

  return innerFunction;
}

// let result=outer();
// result();
outer()();
