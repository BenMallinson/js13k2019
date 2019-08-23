const LIGHT = '#beeb71'
const MID = '#6ab417'
const DARK = '#376d03'
const VERY_DARK = '#172808'

const TILE_SIZE = 16
const MAP_SIZE_X = 10
const MAP_SIZE_Y = 9
const GAME_WIDTH = MAP_SIZE_X * TILE_SIZE
const GAME_HEIGHT = MAP_SIZE_Y * TILE_SIZE

// X = 160
// Y = 144

const player = new Player()
const conversationManager = new ConversationManager()
const inputManager = new InputManager()

const canvas = document.querySelector('canvas')
canvas.height = GAME_HEIGHT
canvas.width = GAME_WIDTH

const context = canvas.getContext('2d')

const mapManager = new Map()
const spritesheet = new Image()
spritesheet.src = "spritesheet.png"

const characterTiles = [
  26, 25, 24, 23
]

const buildingTiles = [
  2,3,4,5
]

const badTiles = [
   18, 19, 22, 43, 10, 8, 46, 47, 48, 40, 49, 51, 52, 39, 54
]

const nonWalkableTiles = [
  ...characterTiles,
  ...buildingTiles,
  ...badTiles
]

const MAP_DEBUG = false

console.log(mapManager.level)
