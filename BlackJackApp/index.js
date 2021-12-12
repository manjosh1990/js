let firstCard;
let secondCard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let result;
let newCard;
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let startGameEl = document.getElementById("startgame-el");
let necardEl = document.querySelector("#newcard-el");
let playerEl = document.getElementById("player-el");
let quitEl = document.getElementById("quit-el");
let sumDisp;
let cardsDisp;
let cards = []

let player = {
    name:"manjosh",
    chips:145
}
quitEl.style.visibility = 'hidden';
necardEl.style.visibility = 'hidden';

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsDisp = "Cards: ";
    sumDisp = "Sum :"
    if (sum <= 20) {
        result = "Do you want to draw a new card?";
    } else if (sum === 21) {
        result = " you've got Black Jack";
        hasBlackJack = true;
    } else {
        result = "You're out of the game !";
        isAlive = false;
    }
    for (let i = 0; i < cards.length; i++) {
        cardsDisp += cards[i] + " ";
    }
    cardsEl.textContent = cardsDisp;
    messageEl.textContent = result;
    sumEl.textContent = sumDisp + sum;
    // console.log(result);
    // console.log("hasBlackJack : " + hasBlackJack)
    // console.log("isAlive : " + isAlive)
    startGameEl.style.visibility = 'hidden';
    quitEl.style.visibility = 'visible';
    if(isAlive){
        necardEl.style.visibility = 'visible';
    }else{
        necardEl.style.visibility = 'hidden';
    
    }
    playerEl.textContent = player.name + ": $" +player.chips;
}

function drawCard() {
    if(isAlive && !hasBlackJack){
        console.log("Drawing new card");
        newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
//function to draw random cards
function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    console.log(random);
    return Math.floor(random);
}
//function to refresh the page
function quit(){
   location.reload();
}
