const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'icecream',
        img: 'img/icecream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'icecream',
        img: 'img/icecream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay= document.querySelector('#grid')
        
function createBoard (){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', 'i')
        gridDisplay.append(card)
        // console.log(card, i)
    }
}

createBoard()