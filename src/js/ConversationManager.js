class ConversationManager {

  constructor() {
    this.activeConversation = null
    this.displayActions = false
    this.selectedAction = null
    this.renderConversation = this.renderConversation.bind(this)
    this.setConversation = this.setConversation.bind(this)
    this.progressConversation = this.progressConversation.bind(this)
    this.endConversation = this.endConversation.bind(this)
    this.submitAction = this.submitAction.bind(this)
    this.processInput = this.processInput.bind(this)

    window.addEventListener("keydown", (e) => {

    }, false);
  }

  processInput (key) {
    console.log(key)
    if(key === ' ' && this.activeConversation !== null && !this.finishedConversation()) return this.progressConversation()
    if(key === ' ' && this.activeConversation !== null && this.finishedConversation() && this.activeConversation.actions && !this.displayActions) {
      this.selectedAction = 0
      this.displayActions = true
      return
    }
    if(key === ' ' && this.activeConversation !== null && this.finishedConversation() && !this.activeConversation.actions) return this.endConversation(false)
    if(key === 'd' && this.activeConversation !== null && this.displayActions) return this.selectedAction = 1
    if(key === 'a' && this.activeConversation !== null && this.displayActions) return this.selectedAction = 0
    if(key === ' ' && this.activeConversation !== null && this.displayActions) return this.submitAction()
  }


  endConversation(increment) {
    if(increment) conversationTree[this.activeConversation.person].activeIndex++
    this.activeConversation = null
    inputManager.setInMenu(false)
  }

  submitAction() {
    this.endConversation(true)
  }

  progressConversation() {
    this.activeConversation.currentLine++
  }

  renderConversation () {
    if(this.activeConversation === null) return
    const { person, conversationChunks, currentLine, actions } = this.activeConversation
    context.fillStyle = LIGHT
    context.strokeStyle = VERY_DARK
    context.lineWidth = 2
    context.fillRect(4, 114, 24, 24)
    context.strokeRect(4, 114, 24, 24)
    context.drawImage(spritesheet, npcConfig[person].portrait * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE, 6, 116, 20, 20)
    context.fillStyle = VERY_DARK
    context.strokeStyle = LIGHT
    context.fillRect(40, 114, 114, 24)
    context.strokeRect(40, 114, 114, 24)
    context.stroke()
    context.font = "8px Arial";
    context.fillStyle = LIGHT
    context.textAlign = 'left'

    // get the active conversation based on the activeIndex on the npc
    context.fillText(conversationChunks[currentLine][0].trim(), 46, 128, 128)
    if(this.displayActions && this.finishedConversation() && actions) {
      this.renderActions()
    }
  }

  renderActions() {
    const { actions } = this.activeConversation
    context.fillStyle = LIGHT;
    context.lineWidth = 2
    context.fillRect(98, 130, 24, 12)
    context.fillRect(130, 130, 24, 12)
    context.strokeStyle = this.selectedAction === 0 ? MID : VERY_DARK;
    context.strokeRect(98, 130, 24, 12)
    context.strokeStyle = this.selectedAction === 1 ? MID : VERY_DARK;
    context.strokeRect(130, 130, 24, 12)
    context.font = "8px Arial";
    context.fillStyle = VERY_DARK
    context.textAlign = 'center'
    context.fillText(actions[0].trim(), 110, 139, 188);
    context.fillText(actions[1].trim(), 142, 139, 188);
  }

  finishedConversation () {
    const { conversationChunks, currentLine } = this.activeConversation
    return conversationChunks.length === currentLine + 1
  }

  setConversation(person) {
    const index = conversationTree[person].activeIndex
    this.activeConversation = {
      person: person,
      index,
      currentLine: conversationTree[person].tree[index].currentLine,
      conversationChunks: chunk(conversationTree[person].tree[index].conversation, 1),
      actions: conversationTree[person].tree[index].actions,
    }
  }
}
