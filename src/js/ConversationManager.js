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

    window.addEventListener("keydown", (e) => {
      if(e.key === ' ' && this.activeConversation !== null && !this.finishedConversation()) return this.progressConversation()
      if(e.key === ' ' && this.activeConversation !== null && this.finishedConversation() && this.activeConversation.actions && !this.displayActions) {
        this.selectedAction = 0
        this.displayActions = true
        return
      }
      if(e.key === ' ' && this.activeConversation !== null && this.finishedConversation() && !this.activeConversation.actions) return this.endConversation(false)
        if(e.key === 'd' && this.activeConversation !== null && this.displayActions) return this.selectedAction = 1
      if(e.key === 'a' && this.activeConversation !== null && this.displayActions) return this.selectedAction = 0
      if(e.key === ' ' && this.activeConversation !== null && this.displayActions) return this.submitAction()

    }, false);
  }

  endConversation(increment) {
    if(increment) conversationTree[this.activeConversation.person].activeIndex++
    this.activeConversation = null
    player.inConversation = false
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
    context.fillRect(16, 208, 32, 32)
    context.strokeRect(16, 208, 32, 32)
    context.drawImage(spritesheet, npcConfig[person].portrait * TILE_SIZE, 0, 16, 16, 18, 210, 28, 28)
    context.fillStyle = VERY_DARK
    context.strokeStyle = LIGHT
    context.fillRect(64, 208, 176, 32)
    context.strokeRect(64, 208, 176, 32)
    context.stroke()
    context.font = "8px Arial";
    context.fillStyle = LIGHT
    context.textAlign = 'left'

    // get the active conversation based on the activeIndex on the npc
    context.fillText(conversationChunks[currentLine][0].trim(), 68, 220, 188);
    if(conversationChunks[currentLine][1]) context.fillText(conversationChunks[currentLine][1].trim(), 68, 230, 188);


    if(this.displayActions && this.finishedConversation() && actions) {
      this.renderActions()
    }
  }



  renderActions() {
    const { person, conversationChunks, currentLine, actions } = this.activeConversation
    context.fillStyle = LIGHT;
    context.lineWidth = 2
    context.fillRect(160, 232, 32, 16)
    context.fillRect(200, 232, 32, 16)
    context.strokeStyle = this.selectedAction === 0 ? MID : VERY_DARK;
    context.strokeRect(160, 232, 32, 16)
    context.strokeStyle = this.selectedAction === 1 ? MID : VERY_DARK;
    context.strokeRect(200, 232, 32, 16)
    context.font = "8px Arial";
    context.fillStyle = VERY_DARK
    context.textAlign = 'center'
    context.fillText(actions[0].trim(), 175, 242, 188);
    context.fillText(actions[1].trim(), 215, 242, 188);
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
      conversationChunks: chunk(conversationTree[person].tree[index].conversation, 2),
      actions: conversationTree[person].tree[index].actions,
    }
  }
}
