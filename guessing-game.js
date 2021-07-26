function guessingGame() {
    let target = Math.floor(Math.random() * 100);
    let guesses = 0;
    let gameRunning = true;

    function guess(answer) {
        if (!gameRunning) return "The game is over, you already won!";
        else if (answer > target) {
            guesses++;
            return answer + " is too high!";
        }
        else if (answer < target) {
            guesses++;
            return answer + " is too low!";
        }
        else {
            guesses++;
            gameRunning = false;
            return "You win! You found " + target + " in " + guesses + " guesses.";
        }
    }

    return guess;
}

module.exports = { guessingGame };
