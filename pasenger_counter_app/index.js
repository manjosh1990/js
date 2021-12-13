//initialize count to 0
//listen to clicks of the increment button
//increment the count variable  when the button is clicked
//change the count-el in the html to reflect the new count
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEL);

let count = 0;
function increment(){
    console.log("button was clicked");
    count = count + 1;
    countEL.textContent = count;
}

function save(){
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count =0;
    countEL.textContent = count;
}
