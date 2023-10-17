const grid = document.querySelector('.grid');
const endGame = document.querySelector('.end-game-screen');//schermata fine
const scoreCounter = document.querySelector('.score-counter');
const endGameText = document.querySelector('.end-game-text');
const playAgain = document.querySelector('.play-game-again');

const totalCells = 100;
const totalBombs = 16;
const maxScore = totalCells - totalBombs;
const bombsList = [];
let score = 0;


while(bombsList.length < totalBombs){
    const number = Math.floor(Math.random() * totalCells) + 1;

    if (!bombsList.includes(number)) bombsList.push(number);
}

let isCellEven = false;
let isRowEven = false;

for (let i = 0; i < totalCells; i++) {

    const cell = document.createElement('div');
    cell.classList.add('cella');

    isCellEven = i%2===0;
    if(i%10 === 0) isRowEven=!isRowEven;

    if(isCellEven && isRowEven) cell.classList.add('cell-dark');
    if(!isCellEven && !isRowEven) cell.classList.add('cell-dark');

    cell.addEventListener('click', function(){
        if ( bombsList.includes(i)){
            cell.classList.add('bomba');
            endGames(false);
        }else{
            cell.classList.add('cell-clicked');
            updateScore();
        }
    });

    grid.appendChild(cell);
}

function updateScore() {
    score++;
    //controllare se l utente ha vinto 
    scoreCounter.innerHTML = String(score).padStart(5,0);
    if(score == maxScore) endGames(true);
}
console.log(bombsList);

function endGames(isWins) {
    if(isWins){
        endGame.classList.add('win');
        endGame.firstChild.innerHTML = 'Yuo<br>Win';
        //endGameText.innerHTML = 'Yuo<br>Win';
    }
    endGame.classList.add('end-game');
}

playAgain.addEventListener('click',function () {
    location.reload();
})