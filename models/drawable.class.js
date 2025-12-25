class Drawable {
  character = new Image();
  imageChache = {};
  img;
  currentImage = 0;
  ctx;

  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((src) => {
      let img = new Image();
      img.src = src;
      this.imageChache[src] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
  }
}
