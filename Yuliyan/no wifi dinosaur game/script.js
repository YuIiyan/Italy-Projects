const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const bird = document.getElementById('bird');
const score = document.getElementById('score');
const game = document.getElementById('game');
const startButton = document.getElementById('start-button');

const FIRST_ROCK_DELAY_MS = 1800;
let gameStarted = false;
let gameRunning = false;
let crouchHeld = false;

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
        dino.classList.remove('crouching');
        crouchHeld = false;
        jump();
    }
}

function updateCrouchState() {
    if (!gameRunning || dino.classList.contains('jump-animation')) {
        dino.classList.remove('crouching');
        return;
    }

    if (crouchHeld) {
        dino.classList.add('crouching');
    } else {
        dino.classList.remove('crouching');
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

    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        event.preventDefault();
        crouchHeld = true;
        updateCrouchState();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        crouchHeld = false;
        updateCrouchState();
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
    const birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue('left'), 10);

    score.textContent = String(Number(score.textContent) + 1);

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (birdLeft < -130) {
        bird.style.display = 'none';
    } else {
        bird.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
        alert('game over. score: ' + score.textContent);
        location.reload();
    }

    if (birdLeft < 95 && birdLeft > 8 && !dino.classList.contains('crouching')) {
        alert('game over. score: ' + score.textContent);
        location.reload();
    }
}, 50);
