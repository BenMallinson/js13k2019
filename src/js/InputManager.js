class InputManager {
  constructor() {
    this.inMenu =  false
    this.setInMenu = this.setInMenu.bind(this)
    this.processInput = this.processInput.bind(this)
    window.addEventListener("keydown", this.processInput, false);
  }

  processInput (event) {
    if(this.inMenu) return conversationManager.processInput(event.key)
    return player.processInput(event.key)
  }

  setInMenu(value) {
    this.inMenu = value
  }
}
