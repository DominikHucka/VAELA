class BackgroundObjects extends DrawableObejects {
  x = 0;
  y = 0;
  height = 480;
  width = 720;

  constructor(imagePath, x) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    // this.y = 480 - this.height;
  }
}
