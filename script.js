
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

        if(playerSelection === 'rock ' && computerSelection === 'scissor'){
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

console.log(playRound('Scissor', computerPlay()))