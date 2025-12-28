class Mage extends MoveableObjects {
  x = 150;
  y = 320;
  speed = 5;
  height = 150;
  width = 150;
  world;

  MAGE_WALKING = [
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk1.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk2.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk3.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk4.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk5.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk6.png",
  ];

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
