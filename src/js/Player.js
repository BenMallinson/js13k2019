class Player {

  constructor () {
    this.width = 16
    this.height = 16
    this.x = 0
    this.y = 0
    this.ready = false
    this.updateMovement = this.onKeyDown.bind(this)
    this.incrementActiveFrame = this.incrementActiveFrame.bind(this)

    window.addEventListener("keydown", this.updateMovement, false);
    this.activeFrame = 0
    this.render.bind(this)
  }

  onKeyDown (e) {
      switch (e.key) {
        case 'd': //d
          if(this.x !== 240) this.x += 16
          break;
        case 's': //s
          if(this.y !== 240) this.y += 16
          break;
        case 'a': //a
          if(this.x !== 0) this.x -= 16
          break;
        case 'w': //w
          if(this.y !== 0) this.y -= 16
          break;
      }
  }

  reset () {
    this.x = 0
    this.y = 0
  }

  incrementActiveFrame () {
    console.log(this.activeFrame)

  }

  render() {

    const spriteIndex = 16 * (13 + this.activeFrame)
    console.log(spriteIndex)
    context.drawImage(
      spritesheet,
      spriteIndex,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height,
    )

    if(this.activeFrame < 2) this.activeFrame++
    this.activeFrame = 0
  }
}
