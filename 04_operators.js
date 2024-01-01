var num = 5;
var evenOdd = num % 2 == 0 ? "Given number is Even " : "Its odd number";
//var result=evenOdd==0 ? "Given number is Even " : "Its odd number";
console.log(evenOdd);

var n1="100";
var n2=100;
console.log(`Comparison using == operator is : ${n1==n2} `);
console.log(`Comparison using === operator is : ${n1===n2} `);

//postfix increment
var a=10;
var b=a++;
console.log(b);

//prefix increment
var c=20;
var d=++c;
console.log(d);

var e=100;
var f=e--;
console.log(f);

var g=0;
var h=0;
result=g/h;
console.log(result);  //Output- Not a Number(NaN)

var result=100+true;
console.log(result); //implicit conversion


var s1="101";
console.log(typeof s1);
var s2=+s1;
console.log(s2);
console.log(typeof s2);

var d=+"200";
console.log(d);
console.log(typeof d);

var z=+"Rakesh";
console.log(z);  //Not a Number(NaN)

var d=Number("101");
console.log(typeof d);

var s1="200A";
var res=Number(s1);
console.log("Result=", typeof res);
console.log(res);

var t=100;
//var res=(String)t;
console.log(t);
console.log(typeof t);

var p=Boolean(-10);
console.log(p);






