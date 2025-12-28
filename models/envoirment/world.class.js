class World {
  canvas;
  ctx;
  level1Images = new Level1Images();
  mage = new Mage();
  heros = new Heros();
  keyboard;
  img;
  ctx;
  

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.setWorld();
    this.drawWorld();
  }

  setWorld() {
    this.heros.world = this;
    this.mage.world = this;
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMoveableObjects(this.level1Images.LVL1_BACKGROUND);
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

  flipImage(mo) {
    this.ctx.save(); // Aktuellen Zustand speichern
    this.ctx.translate(mo.width, 0); // Den Mal-Stift um die Breite des Bildes verschieben
    this.ctx.scale(-1, 1); // Die X-Achse spiegeln
    mo.x = mo.x * -1;
  }

  // Diese Funktion macht alles wieder rückgängig
  flipImageBack(mo) {
    mo.x = mo.x * -1; // X-Koordinate wieder normalisieren
    this.ctx.restore(); // Den gespeicherten Zustand laden
  }

  addObject(mo) {
    mo.draw(this.ctx);
  }
}
