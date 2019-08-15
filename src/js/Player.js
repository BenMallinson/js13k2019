class Player {

  constructor () {
    this.width = TILE_SIZE
    this.height = TILE_SIZE
    this.x = 0
    this.y = 0
    this.targetX = this.x
    this.targetY = this.y
    this.activeFrame = 0
    this.up = true
    this.movementLocked = false
    this.onKeyDown = this.onKeyDown.bind(this)
    this.incrementActiveFrame = this.incrementActiveFrame.bind(this)
    this.calculateCollision = this.calculateCollision.bind(this)
    this.isCollisionAction = this.isCollisionAction.bind(this)
    this.unlockMovement = this.unlockMovement.bind(this)


    setInterval(() => {
      this.incrementActiveFrame()
    }, 250)
    window.addEventListener("keydown", this.onKeyDown, false);
  }

  onKeyDown (e) {
    if(this.movementLocked) return
       this.targetX = this.x
    this.targetY = this.y
      switch (e.key) {
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
      if((this.targetX !== -1 && this.targetX !== 16) && (this.targetY !== -1 && this.targetY !== 16)) {
        this.x = this.targetX
        this.y = this.targetY
      }
    }
    let action = this.isCollisionAction()
    if(action) {
      conversationManager.setConversation(action)
      this.movementLocked = true
    }
  }

  isCollisionAction () {
    if(characterTiles.indexOf(levelData.m[(this.targetX * 16) + this.targetY][2]) > -1) {
      return levelData.m[(this.targetX * 16) + this.targetY][2]
    }
    return false
  }

  calculateCollision() {
    return nonWalkableTiles.indexOf(levelData.m[(this.targetX * 16) + this.targetY][2]) < 0
  }

  unlockMovement () {
    this.movementLocked = false
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
    const spriteIndex = 16 * (13 + this.activeFrame)
    context.drawImage(
      spritesheet,
      spriteIndex,
      0,
      this.width,
      this.height,
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      this.width,
      this.height,
    )
  }
}
