let num1 = 8;
let num2 = 2;
let result = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
    console.log("add clicked");
    result.textContent = num1 + num2;
}
function subtract(){
    console.log("subtract clicked");
    result.textContent = num1 - num2;
}
function divide(){
    console.log("divide clicked");
    result.textContent = num1 / num2;
}
function multiply(){
    console.log("multiply clicked");
    result.textContent = num1 * num2;
}