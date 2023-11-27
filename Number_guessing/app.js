let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    const guessForm = document.getElementById("guessForm");
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");

    guessForm.addEventListener("submit", function (event) {
        event.preventDefault();
        checkGuess();
    });

    guessInput.disabled = false;
    guessInput.value = "";
    guessInput.focus();
    message.textContent = "";
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}.`;
        disableInputAndButton();
        setTimeout(startGame, 2000); // Start a new game after 2 seconds
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }

    // Clear the input field for the next guess
    guessInput.value = "";
}

function disableInputAndButton() {
    const guessInput = document.getElementById("guessInput");
    const submitButton = document.querySelector("button");

    guessInput.disabled = true;
    submitButton.disabled = true;
}

// Start the game when the page loads
window.onload = startGame;
