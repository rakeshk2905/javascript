function jenny(arg){
    console.log(`After session jenny started homework`);
    console.log(`jenny completed all the steps`);
    console.log(`then she is ready to call back bill`);
    arg(); //bill function call
}

let bill=function(){
    console.log(`i am bill and I am going to play cricket`);
    console.log(`I know jenny likes me,Hence onces she compltes her homework`);
    console.log(`She will definitely call me back..`);
    console.log(`Then I will copy all the assignments as it is..`);

}   
jenny(bill);


let greet =function(){
    console.log(`Hey....Good Morning`);
}
setTimeout(greet, 5000); //3000 is milisecond of 3 seconds
setTimeout( function(){
    for (let index = 0; index < 5; index++) {
        console.log(index);
        
    }
} , 3000);
let result=setInterval(function(){
    console.log(`hello.......`);
}, 2000);
clearInterval(result);

























