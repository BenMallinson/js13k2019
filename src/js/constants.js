const LIGHT = '#beeb71'
const MID = '#6ab417'
const DARK = '#376d03'
const VERY_DARK = '#172808'

const TILE_SIZE = 16
const GAME_WIDTH = TILE_SIZE * TILE_SIZE
const GAME_HEIGHT = TILE_SIZE * TILE_SIZE

const player = new Player()
const conversationManager = new ConversationManager()

const canvas = document.querySelector('canvas')
canvas.height = GAME_HEIGHT
canvas.width = GAME_WIDTH

const context = canvas.getContext('2d')

const levelData = getLevel()
const level = new Map(levelData)
const spritesheet = new Image()
spritesheet.src = "spritesheet.png"

const characterTiles = [
  26, 25, 24, 23
]

const buildingTiles = [
  4, 5, 3, 7, 6, 8, 1
]

const badTiles = [
   18, 19, 22, 43
]

const nonWalkableTiles = [
  ...characterTiles,
  ...buildingTiles,
  ...badTiles
]

const MAP_DEBUG = false

console.log(level)
