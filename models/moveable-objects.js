class MoveableObjects extends Drawable {
  speed = 5;
  constructor() {
    super();
  }

  animation(obj) {
    let i = this.currentImage % obj.length;
    this.img = this.imageChache[obj[i]];
    this.currentImage++;
  }

  moveLeft() {
    if (Keyboard.LEFT) {
      this.x -= this.speed;
    }
    t;
  }

  moveRight() {
    this.x += this.speed;
    console.log("move right");
  }
}
