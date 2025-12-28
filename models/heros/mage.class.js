class Mage extends Heros {
  
  heroTypeImages = new loadImagesHeros();

  HEROS_IMAGES = this.heroTypeImages.Heros.Mage.MAGE_WALKING;

  constructor() {
    super();
    this.loadImage(this.HEROS_IMAGES[0]);
    this.loadImages(this.HEROS_IMAGES );
  }
}
