class Map {

  constructor(level) {
    this.level = level
  }

  render () {
    for(let i = 0; i < this.level.m.length; i++) {
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


      if(MAP_DEBUG) {
        context.font = "10px Arial";
        context.fillStyle = LIGHT
        context.textAlign = 'left'
        context.textBaseline = 'hanging'
        context.fillText(this.level.m[i][2], this.level.m[i][0] * TILE_SIZE , this.level.m[i][1] * TILE_SIZE , 16);
      }
    }
  }
}

