class ConversationManager {

  constructor() {
    this.activeConversation = null
    this.renderConversation = this.renderConversation.bind(this)
    this.setConversation = this.setConversation.bind(this)
  }

  renderConversation () {
    if(this.activeConversation === null) return
    context.rect(16, 208, 32, 32)
    context.stroke()
    context.drawImage(spritesheet, this.activeConversation.person * TILE_SIZE, 0, 16, 16, 18, 210, 28, 28)
    context.rect(64, 208, 176, 32)
    context.stroke()
    context.font = "8px Arial";
    context.fillStyle = "white"
    context.textAlign = 'left'
    const lines = this.activeConversation.text.split("\n")
    for(let i = 0; i < lines.length; i++) {
      context.fillText(lines[i].trim(), 68, 220 + (i * 10), 188);
    }
  }

  setConversation(person) {
    this.activeConversation = {
      person: person,
      index: conversationTree[person].activeIndex,
      text: conversationTree[person].tree[conversationTree[person].activeIndex],
    }
  }
}
