class MoveableObjects extends Drawable {
  constructor() {
    super();
  }

  animation(obj) {
    let i = this.currentImage % obj.length;
    this.img = this.imageChache[obj[i]];
    this.currentImage++;        
  }

  moveLef() {
    console.log("move left");   
  }

  moveRight() {
    console.log("move right");
  }
}
