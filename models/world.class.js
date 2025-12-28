class World {
  canvas;
  ctx;
  mage = new Mage();
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.setWorld();
    this.drawWorld();
  }

  setWorld() {
    this.mage.world = this;
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addToMap(this.mage);
    let self = this;
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  drawMoveableObjects(obj) {
    obj.forEach((o) => {
      this.addObject(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  addObject(backgroundImage) {
    this.ctx.drawImage(backgroundImage);
  }
}
