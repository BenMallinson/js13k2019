class Player {

  constructor () {
    this.x = 0
    this.y = 0
    this.targetX = this.x
    this.targetY = this.y
    this.activeFrame = 0
    this.up = true
    this.incrementActiveFrame = this.incrementActiveFrame.bind(this)
    this.calculateCollision = this.calculateCollision.bind(this)
    this.isCollisionAction = this.isCollisionAction.bind(this)
    this.unlockMovement = this.unlockMovement.bind(this)


    setInterval(() => {
      this.incrementActiveFrame()
    }, 250)
  }

  processInput (key) {
    this.targetX = this.x
    this.targetY = this.y
      switch (key) {
        case 'd': //d
          this.targetX = this.x + 1
          break;
        case 's': //s
          this.targetY = this.y + 1
          break;
        case 'a': //a
          this.targetX = this.x - 1
          break;
        case 'w': //w
          this.targetY = this.y - 1
          break;
      }

     
    let shouldMove = this.calculateCollision()
    if(shouldMove && (this.targetX !== -1 && this.targetX !== MAP_SIZE_X) && (this.targetY !== -1 && this.targetY !== MAP_SIZE_Y)) {
        this.x = this.targetX
        this.y = this.targetY
    }
    let action = this.isCollisionAction()
    if(action) {
      conversationManager.setConversation(action)
      inputManager.setInMenu(true)
    }
  return false
  }

  isCollisionAction () {
    if(this.targetX !== -1 && this.targetY !== -1) {
      if(characterTiles.indexOf(mapManager.level.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]) > -1) {
        return mapManager.level.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]
      }
    }

    const levelNavigation = Object.keys(levels[mapManager.currentLevel].navigation)
    
    const navigateTo = levelNavigation.find(level => {
      return levels[mapManager.currentLevel].navigation[level][0] === this.targetX && levels[mapManager.currentLevel].navigation[level][1] === this.targetY
    })


    if(navigateTo) {
      console.log(navigateTo)
      this.x = levels[navigateTo].playerStart[mapManager.currentLevel][0]
      this.y = levels[navigateTo].playerStart[mapManager.currentLevel][1]
      return mapManager.changeMap(navigateTo)
   }
  return false
}

  calculateCollision() {
    if(this.targetX !== -1 && this.targetY !== -1) {
      return nonWalkableTiles.indexOf(mapManager.level.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]) < 0
    }
  }

  unlockMovement () {
    this.inConversation = false
  }

  reset () {
    this.x = 0
    this.y = 0
  }

  incrementActiveFrame () {
      if(this.up && this.activeFrame < 2) this.activeFrame++
      if(this.up && this.activeFrame === 2) this.up = false
      if(!this.up && this.activeFrame <= 2) this.activeFrame--
      if(!this.up && this.activeFrame === 0) this.up = true
  }

  render() {
    const spriteIndex = TILE_SIZE * (13 + this.activeFrame)
    context.drawImage(
      spritesheet,
      spriteIndex,
      0,
      TILE_SIZE,
      TILE_SIZE,
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE,
    )
  }
}
