console.log(`======change heading color (Bydefault color="Balck")=====`);
const colorChange = document.querySelector("h1");
colorChange.style.color = "orange";
console.log(colorChange);
console.log(colorChange.innerHTML);

console.log("======Remove second element from list=====");
const removeLiElement=document.querySelector("#secondElement");
removeLiElement.remove();
console.log(removeLiElement);
console.log(removeLiElement.innerHTML);



