class World {
  canvas;
  ctx;
  mage = new Mage();

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.drawWorld();
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMoveableObjects(this.mage);
    this.drawToMap();
    let self = this;
    requestAnimationFrame(function () {
      self.drawWorld();
    });
  }

  drawMoveableObjects(obj) {
    obj.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    mo.draw(this.ctx);
  }

  drawToMap(backgroundImage) {
    this.ctx.drawImage(backgroundImage);
  }
}
