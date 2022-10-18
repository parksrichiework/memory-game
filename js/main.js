const cardArray = [
    {
        name: 'ninja',
        img: 'img/ninja-toy.jpg',
    },
    {
        name: 'bouncy-ball',
        img: 'img/bouncy-ball.jpg',
    },
    {
        name: 'sticky-hand',
        img: 'img/sticky-hand.jpg',
    },
    {
        name: 'ring',
        img: 'img/ring.jpg',
    },
    {
        name: 'capsule',
        img: 'img/capsule.jpg',
    },
    {
        name: 'dispenser',
        img: 'img/dispenser.jpg',
    },
    {
        name: 'ninja',
        img: 'img/ninja-toy.jpg',
    },
    {
        name: 'bouncy-ball',
        img: 'img/bouncy-ball.jpg',
    },
    {
        name: 'sticky-hand',
        img: 'img/sticky-hand.jpg',
    },
    {
        name: 'ring',
        img: 'img/ring.jpg',
    },
    {
        name: 'capsule',
        img: 'img/capsule.jpg',
    },
    {
        name: 'dispenser',
        img: 'img/dispenser.jpg',
    },
]

let cardsChosen =[]
let cardsChosenIds= []
const cardsWon= []

cardArray.sort(() => 0.5 - Math.random())

// GLOBAL VARIABLES ---------------------------------------------------------------
const gridDisplay= document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
        // ------------------------------------------ 

function createBoard (){
    for(let i=0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank-logo.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        // console.log(card, i)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    let optionOneId = cardsChosenIds[0]
    let optionTwoId= cardsChosenIds[1]

    if(optionOneId == optionTwoId){
        alert('You clicked the same image!')
    }
   

    console.log('check for match')
    if(cardsChosen[0] == cardsChosen[1]){
        alert('Yay! You got a match!')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'img/blank-logo.jpg')
        cards[optionTwoId].setAttribute('src', 'img/blank-logo.jpg')
        alert('Sorry! Try again!')
    }

    resultDisplay.innerHTML = cardsWon.length // you can also use 
    cardsChosen = []
    cardsChosenIds= []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congrats! You found all the matches!'
    }
}



function flipCard(){
    const cardId = this.getAttribute('data-id')
    // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    // console.log('clicked', cardId)
    // console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}