class MoveableObjects extends Drawable {
  speed = 0.15;
  otherDirection = false;
  constructor() {
    super();
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
