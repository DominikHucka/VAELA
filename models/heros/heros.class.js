class Heros extends MoveableObjects {
  x = 150;
  y = 320;
  speed = 5;
  height = 150;
  width = 150;
  world;
  HEROS_IMAGES = [];

  constructor() {
    super();
    setInterval(() => {
      this.playAnimation(this.HEROS_IMAGES);
    }, 100);

    setInterval(() => {
      this.moveCharacter();
    }, 1000 / 60);
  }

  playAnimation() {
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.animation(this.HEROS_IMAGES);
    }
  }

  moveCharacter() {
    if (this.world.keyboard.RIGHT) {
      this.moveRight();
      this.otherDirection = false;
    }
    if (this.world.keyboard.LEFT) {
      this.moveLeft();
      this.otherDirection = true;
    }
  }
}
