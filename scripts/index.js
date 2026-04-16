let popped = 0;
const target = 5;
const gameArea = document.getElementById('game-area');
const instruction = document.getElementById('instruction');
const unlockBtn = document.getElementById('unlock-btn');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';

    // Random colors
    const colors = ['#ff9a9e', '#fad0c4', '#ffecd2', '#a1c4fd'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random horizontal position
    balloon.style.left = Math.random() * 90 + 'vw';

    // Random speed
    balloon.style.animationDuration = (Math.random() * 2 + 3) + 's';

    balloon.onclick = () => {
        popped++;
        balloon.remove();
        if (popped < target) {
            instruction.innerText = `Keep going! ${target - popped} more to go...`;
        } else {
            instruction.innerText = "Yay! You did it!";
            unlockBtn.style.display = 'inline-block';
        }
    };

    gameArea.appendChild(balloon);

    // Remove balloon if it floats away without being popped
    setTimeout(() => { if (balloon.parentNode) balloon.remove(); }, 5000);
}

// Spawn a balloon every 800ms
setInterval(createBalloon, 800);