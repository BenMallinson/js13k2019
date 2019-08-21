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
    if(shouldMove) {
      if((this.targetX !== -1 && this.targetX !== MAP_SIZE_X) && (this.targetY !== -1 && this.targetY !== MAP_SIZE_Y)) {
        this.x = this.targetX
        this.y = this.targetY
      }
    }
    let action = this.isCollisionAction()
    if(action) {
      conversationManager.setConversation(action)
      inputManager.setInMenu(true)
    }
  }

  isCollisionAction () {
    console.log(characterTiles.indexOf(levelData.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]) > -1)
    if(characterTiles.indexOf(levelData.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]) > -1) {
      return levelData.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]
    }
    return false
  }

  calculateCollision() {
    return nonWalkableTiles.indexOf(levelData.m[(this.targetX * MAP_SIZE_Y) + this.targetY][2]) < 0
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
