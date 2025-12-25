window.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'W') window.keyboard.UP = true;
    if (e.key === 's' || e.key === 'S') window.keyboard.DOWN = true;
    if (e.key === 'a' || e.key === 'A') window.keyboard.LEFT = true;
    if (e.key === 'd' || e.key === 'D') window.keyboard.RIGHT = true;
    if (e.key === ' ') window.keyboard.SPACE = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'W') window.keyboard.UP = false;
    if (e.key === 's' || e.key === 'S') window.keyboard.DOWN = false;
    if (e.key === 'a' || e.key === 'A') window.keyboard.LEFT = false;
    if (e.key === 'd' || e.key === 'D') window.keyboard.RIGHT = false;
    if (e.key === ' ') window.keyboard.SPACE = false;
});

