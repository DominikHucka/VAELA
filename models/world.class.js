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
