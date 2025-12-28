class MoveableObjects extends DrawableObejects {
  speed = 0.15;
  otherDirection = false;
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
