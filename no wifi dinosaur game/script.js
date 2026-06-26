const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
const game = document.getElementById('game');
const startButton = document.getElementById('start-button');

const FIRST_ROCK_DELAY_MS = 1200;
let gameStarted = false;
let gameRunning = false;

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

function handleJumpInput() {
    if (!gameRunning) {
        return;
    }

    if (!dino.classList.contains('jump-animation')) {
        jump();
    }
}

function startGame() {
    if (gameStarted) {
        return;
    }

    gameStarted = true;
    score.textContent = '0';
    game.classList.add('started');

    setTimeout(() => {
        gameRunning = true;
        game.classList.add('running');
    }, FIRST_ROCK_DELAY_MS);
}

startButton.addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault();
        handleJumpInput();
    }
});

document.addEventListener('pointerdown', () => {
    handleJumpInput();
});

setInterval(() => {
    if (!gameRunning) {
        return;
    }

    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'), 10);
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'), 10);

    score.textContent = String(Number(score.textContent) + 1);

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
        alert('game over. score: ' + score.textContent);
        location.reload();
    }
}, 50);
