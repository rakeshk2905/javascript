function monthOfYear(month) {
  switch (month) {
    case 1:
      returnValue = `Month number ${month} ==> January`;
      break;

    case 2:
      returnValue = `Month number ${month} ==> February`;
      break;

      case 3:
      returnValue = `Month number ${month} ==> March`;
      break;

      case 4:
      returnValue = `Month number ${month} ==> April`;
      break;

      case 5:
      returnValue = `Month number ${month} ==> May`;
      break;

      case 6:
      returnValue = `Month number ${month} ==> June`;
      break;

      case 7:
      returnValue = `Month number ${month} ==> July`;
      break;

      case 8:
      returnValue = `Month number ${month} ==> August`;
      break;

      case 9:
      returnValue = `Month number ${month} ==> September`;
      break;

      case 10:
      returnValue = `Month number ${month} ==> Octomber`;
      break;

      case 11:
      returnValue = `Month number ${month} ==> November`;
      break;

      case 12:
      returnValue = `Month number ${month} ==> December`;
      break;

    default:
        returnValue = `Month number ${month} ==> its invalid month number please enter correct month number`;
      break;
  }
  return returnValue;
}

var monthNumber=monthOfYear(0);
console.log(monthNumber);

var monthNumber=monthOfYear(2);
console.log(monthNumber);

var monthNumber=monthOfYear(5);
console.log(monthNumber);

var monthNumber=monthOfYear(12);
console.log(monthNumber);

var monthNumber=monthOfYear(15);
console.log(monthNumber);

var monthNumber=monthOfYear(100);
console.log(monthNumber);

var monthNumber=monthOfYear(null);
console.log(monthNumber);

var monthNumber=monthOfYear(undefined);
console.log(monthNumber);
