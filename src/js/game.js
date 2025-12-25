let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('myCanvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 68) { // right arrow
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 65) { // left arrow
        keyboard.LEFT = true;
    }
    if (e.keyCode == 32) { // up arrow
        keyboard.JUMP = true; 
    }
});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 68) { // right arrow
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 65) { // left arrow
        keyboard.LEFT = false;
    }
    if (e.keyCode == 32) { // up arrow
        keyboard.JUMP = false;
    }
});







