function render () {
  clear()
  context.fillStyle = DARK_RED;
  context.fillRect(0, 0, window.canvas.width, canvas.height);
  level.render()
  player.render()
}

function clear () {
  context.fillStyle = DARK_RED
  context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}
