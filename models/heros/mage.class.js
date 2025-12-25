class Mage extends MoveableObjects {
  x = 150;
  y = 320;
  height = 150;
  width = 150;
  world;

    MAGE_WALKING = [
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk1.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk2.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk3.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk4.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk5.png",
    "src/img/19-Heros-Main/PNG/Mage/Walk/walk6.png"
  ]

  constructor() {
    super();
    this.loadImage(this.MAGE_WALKING[0]);
    this.loadImages(this.MAGE_WALKING);
    this.playAnimation();
  } 

  playAnimation() {
    setInterval(() => {
      this.walkCharacter();
      this.animation(this.MAGE_WALKING);
    }, 100);
  }

  walkCharacter() {
    if (this.moveLeft || this.moveRight) {
      this.animation(this.MAGE_WALKING);
    }
  }
}