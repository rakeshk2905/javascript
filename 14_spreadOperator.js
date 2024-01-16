let array=["jenny","bill","stew"];
console.log(array);
console.log(...array);

console.log(`rest parameter`);
function show(n1,n2,...arg) { //rest parameter
    console.log(n1);
    console.log(n2);
    console.log(arg);
}
show(10,20,30);









