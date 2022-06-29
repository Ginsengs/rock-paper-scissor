

function computerPlay (){

    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber === 1){
        return 'Rock'
    } else if(randomNumber === 2){
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
  

        if(playerSelection === 'rock' && computerSelection === 'scissor'){
            return 'You Win! Rock beats Scissor'

        } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
            return 'You Lose! Rock beats Scissor'
        } else if(playerSelection === 'scissor' && computerSelection ==='paper'){
            return 'You Win! Scissor beats Paper'
        } else if(playerSelection === 'paper' && computerSelection == 'scissor'){
            return 'You Lose! Scissor beats Paper'
        } else if(playerSelection === 'paper' && computerSelection ==='rock'){
            return 'You Win! Paper beats Rock'
        } else if(playerSelection=== 'rock' && computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else {
            return 'Tie!'
        }

}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(but => but.addEventListener('click', myFunction));



let computerWins = 0;
let userWins = 0;

function myFunction(e){

    let playerSelection = e.target.classList['0'];
    let computerSelection = computerPlay();
    let results = playRound(playerSelection, computerPlay());

    result.appendChild(userScore);
    result.appendChild(computerScore);
    console.log(playerSelection);
    console.log(computerSelection);

    if(results.includes('You Win')){
        userWins = userWins + 1;
    } else if(results.includes('You Lose')){
        computerWins = computerWins + 1
    } else {

    }

    userScore.textContent = 'Your Score: ' +  userWins;
    computerScore.textContent = 'Computer Score: ' + computerWins

    if(userWins >= 5 || computerWins >= 5){
        let finalResult = scoreKeeper(userWins, computerWins);
        gameResult.textContent = finalResult;
        result.appendChild(gameResult);
    }



}

function scoreKeeper(userWins, computerWins){
    buttons.forEach(but => but.removeEventListener('click', myFunction));
    if(userWins >= 5 && userWins > computerWins){
        return 'You Win'
   } else if(computerWins >= 5 && computerWins > userWins){
        return 'You Lose'
   }
   
}

const result = document.querySelector('.result');
const userScore = document.createElement('h2');
const computerScore = document.createElement('h2')
const gameResult = document.createElement('h2')