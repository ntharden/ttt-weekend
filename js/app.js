// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Build the `getWinner` function

// 8) Create Reset functionality

/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,7,4],
  [2,5,8],
  [2,4,6],
  [0,4,8]
]

/*---------------------------- Variables (state) ----------------------------*/

let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = null

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){
  // square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/

function init () {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render ()
}

function render () {
  board.forEach(function(square, idx){
    if (square === 1) {
      squareEls[idx].textContent ='X'
    } else if (square === -1) {
      squareEls[idx].textContent = 'O'
    } else if (square === null) {
      squareEls[idx].textContent = null

  }
    if (winner === null){
      messageEl.textContent = `Player ${turn === 1 ? "X" : "O"}'s turn `
    } else if (winner === 'T'){
      messageEl.textContent = "Cat's Game!"
    }
  })
}