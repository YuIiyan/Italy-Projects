const statusText = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const boxes = document.querySelectorAll(".box");
const turnText = document.getElementById("turn");

let count = 0;
let gameActive = false;

const a = "X";
const b = "O";
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameActive) return;

    const content = box.querySelector(".content");
    if (!content) return;
    if (content.textContent !== "") return;

    count++;
    if (count % 2 === 0) {
      content.textContent = b;
      box.style.backgroundColor = "blue";
      turnText.textContent = "X's turn";
    } else {
      content.textContent = a;
      box.style.backgroundColor = "red";
      turnText.textContent = "O's turn";
    }

    checkGame();
  });
});

startBtn.addEventListener("click", () => {
  statusText.textContent = "Game started!";
  turnText.textContent = "X's turn";
  gameActive = true;
  startBtn.disabled = true;
});

restartBtn.addEventListener("click", restartGame);

function checkGame() {
  const boardValues = Array.from(boxes, (box) => {
    const content = box.querySelector(".content");
    return content ? content.textContent : "";
  });

  for (const [aIndex, bIndex, cIndex] of winPatterns) {
    const first = boardValues[aIndex];
    if (first !== "" && first === boardValues[bIndex] && first === boardValues[cIndex]) {
      statusText.textContent = `${first} wins!`;
      turnText.textContent = "Game over";
      gameActive = false;
      return;
    }
  }

  if (count === 9) {
    statusText.textContent = "Draw!";
    turnText.textContent = "Game over";
    gameActive = false;
  }
}

function restartGame() {
  count = 0;
  gameActive = false;
  statusText.textContent = "Ready to play.";
  turnText.textContent = "";
  startBtn.disabled = false;

  boxes.forEach((box) => {
    const content = box.querySelector(".content");
    if (content) content.textContent = "";
    box.style.backgroundColor = "";
  });
}