class Map {

  constructor(level) {
    this.level = level
  }

  render () {
    for(let i = 0; i < this.level.m.length; i++){
      context.drawImage(
        spritesheet,
        this.level.m[i][2] * TILE_SIZE,
        0,
        TILE_SIZE,
        TILE_SIZE,
        this.level.m[i][0] * TILE_SIZE,
        this.level.m[i][1] * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
      )
    }
  }
}

