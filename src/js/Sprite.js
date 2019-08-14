class Sprite {

  constructor(img, width, height) {
    this.img = img;
    this.width = width;
    this.height = height;
  }

  draw (x, y) {
      context.drawImage(
        this.img,
        x,
        y,
        this.width,
        this.height,
        x, y,
        this.width,
        this.height
      );
    }
}
