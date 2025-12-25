class World {
  canvas;
  ctx;
  mage = new Mage();
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.drawWorld();
    this.setWorld()
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

  //drawMoveableObjects(obj) {
    //obj.forEach((o) => {
      //this.addToMap(o);
    //});
  //}

  addToMap(mo) {
    mo.draw(this.ctx);
  }

  drawToLevel(backgroundImage) {
    this.ctx.drawImage(backgroundImage);
  }
}
