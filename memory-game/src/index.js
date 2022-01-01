document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        {
            name: "fries",
            img: 'src/images/fries.png'
        },
        {
            name: "cheeseburger",
            img: 'src/images/cheeseburger.png'
        }
        ,
        {
            name: "ice-cream",
            img: 'src/images/ice-cream.png'
        },
        {
            name: "hotdog",
            img: 'src/images/hotdog.png'
        },
        {
            name: "milkshake",
            img: 'src/images/milkshake.png'
        },
        {
            name: "pizza",
            img: 'src/images/pizza.png'
        },
        {
            name: "fries",
            img: 'src/images/fries.png'
        },
        {
            name: "cheeseburger",
            img: 'src/images/cheeseburger.png'
        }
        ,
        {
            name: "ice-cream",
            img: 'src/images/ice-cream.png'
        },
        {
            name: "hotdog",
            img: 'src/images/hotdog.png'
        },
        {
            name: "milkshake",
            img: 'src/images/milkshake.png'
        },
        {
            name: "pizza",
            img: 'src/images/pizza.png'
        }
    ]
    cardsArray.sort(()=> 0.5 - Math.random())
    console.log(cardsArray)
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result")
    let cardChosen = []
    let cardChosenIds =[]
    let cardsWon =[]
    function createBoard(){
        for(let i =0 ; i< cardsArray.length ; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function flipcard(){
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardsArray[cardId].name)
        cardChosenIds.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        if(cardChosen.length ===2){
            setTimeout(checkForMatch ,500)
            //checkForMatch()
        }
    }
    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        console.log(cardChosenIds)
        const optionOneCard = cardChosenIds[0]
        const optionTwoCard = cardChosenIds[1]
        if(optionOneCard == optionTwoCard){
            alert('You have clicked on the same image!')
            cards[optionOneCard].setAttribute('src','src/images/blank.png')
            cards[optionTwoCard].setAttribute('src','src/images/blank.png')
        }else if(cardChosen[0] === cardChosen[1]){
            alert('You have found a match!')
            cards[optionOneCard].setAttribute('src','src/images/white.png')
            cards[optionTwoCard].setAttribute('src','src/images/white.png')
            cards[optionOneCard].removeEventListener('click',flipcard)
            cards[optionTwoCard].removeEventListener('click',flipcard)
            cardsWon.push(cardChosen)
        }else{
            cards[optionOneCard].setAttribute('src','src/images/blank.png')
            cards[optionTwoCard].setAttribute('src','src/images/blank.png')
            alert('sorry try again!')
        }
        cardChosenIds =[]
        cardChosen =[]
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = "Congratulations you have won!!!"
        }
    }

    createBoard()
})