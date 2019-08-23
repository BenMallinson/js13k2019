class Map {
  constructor() {
    this.currentLevel = 'start'
    this.level = getLevel(this.currentLevel)
    this.changeMap = this.changeMap.bind(this)
  }

  changeMap (newLevel) {
    this.currentLevel = newLevel
    this.level = getLevel(this.currentLevel)
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
        context.font = "10px Impact";
        context.fillStyle = 'blue'
        context.textAlign = 'left'
        context.textBaseline = 'hanging'
        context.fillText(this.level.m[i][2], this.level.m[i][0] * TILE_SIZE , this.level.m[i][1] * TILE_SIZE , TILE_SIZE);
      }
    }
  }
}

