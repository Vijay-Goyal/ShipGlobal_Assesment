const maxChances = 5;
let chancesLeft = maxChances;
let targetNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const hint = document.getElementById('hint');
const chances = document.getElementById('chances');
const resetContainer = document.getElementById('resetContainer');

checkButton.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        hint.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    chancesLeft--;
    if (guess === targetNumber) {
        hint.textContent = "Congratulations! You guessed the correct number!";
        endGame();
    } else if (chancesLeft > 0) {
        hint.textContent = guess > targetNumber ? "Your number is high" : "Your number is low";
        chances.textContent = `You have ${chancesLeft} Chances`;
    } else {
        hint.textContent = `Game over! The correct number was ${targetNumber}.`;
        chances.textContent = "No more chances left!";
        endGame();
    }
});

function endGame() {
    checkButton.disabled = true;
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.classList.add('resetButton');
    resetButton.addEventListener('click', resetGame);
    resetContainer.appendChild(resetButton); 
}

function resetGame() {
    chancesLeft = maxChances;
    targetNumber = Math.floor(Math.random() * 100) + 1;
    hint.textContent = "Enter your guess below:";
    chances.textContent = `You have ${chancesLeft} Chances`;
    guessInput.value = '';
    checkButton.disabled = false;
    
    resetContainer.innerHTML = ''; e
}
