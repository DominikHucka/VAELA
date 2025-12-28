class Mage extends MoveableObjects {
  x = 150;
  y = 320;
  speed = 5;
  height = 150;
  width = 150;
  world;
  heroTypeImages = new loadImagesHeros();

  MAGE_WALKING = this.heroTypeImages.Heros.MAGE_WALKING;

  constructor() {
    super();
    this.loadImage(this.MAGE_WALKING[0]);
    this.loadImages(this.MAGE_WALKING);
    setInterval(() => {
      this.playAnimation();
    }, 100);

    setInterval(() => {
      this.moveCharacter();
    }, 1000 / 60);
  }

  playAnimation() {
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.animation(this.MAGE_WALKING);
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
