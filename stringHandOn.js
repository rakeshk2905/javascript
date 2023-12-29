
function stringHandsOn(){

    var str="   Hey you are doing good, keep it up    ";

    console.log(`Given string is : ${str}`);

    var strLength=str.length;
    console.log(`Length of string is : ${strLength}`);

    var whiteSpaces=str.trim();
    console.log(`After Removing white spaces :${whiteSpaces}`);

    var oldLength=str.length;
    var newLength=whiteSpaces.length;
    var resultOfNewLength=oldLength-newLength;
    console.log(`White spaces count are: ${resultOfNewLength}`);

    var firstChar=whiteSpaces.charAt(0);
    var lastChar=whiteSpaces.charAt(whiteSpaces.length-1);
    console.log(`First Character is: ${firstChar} & Last Character is: ${lastChar}`);

    // //1)used tream
    var totalWords=whiteSpaces.split(" ");
    var totalLength=totalWords.length;
    console.log(`Total Words are : ${totalLength}`);
    
    var indexOfGood=whiteSpaces.indexOf("good");
    console.log(`Index of good is: ${indexOfGood}`);

    var subStringgood=whiteSpaces.substring(22)
    var slicegood=whiteSpaces.slice(22)
    console.log(`Substring is: ${subStringgood} & slice is: ${slicegood}`);

    //1)used trim
    var endWithUp=whiteSpaces.endsWith("up");
    console.log(`End With "up": ${endWithUp}`);

     //1)used trim
     var startsWithHey=whiteSpaces.startsWith("Hey");
     console.log(`Starts With "Hey": ${startsWithHey}`);

}
stringHandsOn() //Function call