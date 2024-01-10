var daysSwitchCase = function (dayNum) {
  switch (dayNum) {
    case 1:
      returnValue = `Day number ${dayNum} ==> Monday`;
      break;

    case 2:
      returnValue = `Day number ${dayNum} ==> Tuesday`;
      break;

    case 3:
      returnValue = `Day number ${dayNum} ==> Wednsday`;
      break;

    case 4:
      returnValue = `Day number ${dayNum} ==> Thursday`;
      break;

    case 5:
      returnValue = `Day number ${dayNum} ==> Friday`;
      break;

      case 6:
      returnValue = `Day number ${dayNum} ==> Saturday`;
      break;

      case 7:
      returnValue = `Day number ${dayNum} ==> Sunday`;
      break;

    default:
        returnValue=`invalid input`
      break;
  }
  return returnValue;
};
var result=daysSwitchCase(5);
console.log(result);

var result=daysSwitchCase(null);
console.log(result);


var result=daysSwitchCase(NaN);
console.log(result);

