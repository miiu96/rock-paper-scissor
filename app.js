let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoise() {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choises[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORs";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(user)} 
                          ${smallUserWord} beats ${convertToWord(computer)} 
                          ${smallComprWord}. You Win !!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500)
}
function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(user)} 
                          ${smallUserWord} loses to ${convertToWord(computer)} 
                          ${smallComprWord}. You lose... !!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500);
}
function drow(user) {
    result_p.innerHTML = `DRAW`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 500);
}

function game(userChoise) {
    const computerChoise = getComputerChoise();
    switch (userChoise + computerChoise) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise, computerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            drow(userChoise);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))
    
    scissors_div.addEventListener('click',() => game("s"))
}


main();
