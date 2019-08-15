function update() {
  // update();
  render();
  requestAnimationFrame(update);
};

document.addEventListener("DOMContentLoaded", () => {
  spritesheet.onload = (e) => {
    update()
  }
})
