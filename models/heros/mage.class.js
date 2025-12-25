class Mage extends MoveableObjects {
  x = 300;
  y = 300;
  height = 64;
  width = 64;

    MAGE_WALKING = [
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk1.png",
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk2.png",
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk3.png",
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk4.png",
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk5.png",
    "src/img/pixel-art-fantasy-game-main-heroes/PNG/Mage/Walk/walk6.png"
  ]

  constructor() {
    super();
    this.loadImage(this.MAGE_WALKING[0]);
    this.loadImages(this.MAGE_WALKING);
  }




}