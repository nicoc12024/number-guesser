const guessBtn = document.getElementById("guess-btn");
const guessInput = document.getElementById("guess-input");
const game = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const message = document.querySelector(".message");
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
guessesLeft = 3;
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct, YOU WIN!`, "green");
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(
        `Game Over, you lost. The correct number was ${winningNum}`,
        "red"
      );
      guessBtn.value = "Play again";
      guessBtn.className += "play-again";
    } else {
      guessInput.value = "";
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
