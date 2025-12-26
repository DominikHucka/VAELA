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
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }
}
