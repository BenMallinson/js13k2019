const RED = '#ea2627'
const DARK_RED = '#7e0100'
const BLACK = '#121212'
const WHITE = '#e7e7e7'


const TILE_SIZE = 16
const GAME_WIDTH = TILE_SIZE * TILE_SIZE
const GAME_HEIGHT = TILE_SIZE * TILE_SIZE

const player = new Player()

const canvas = document.querySelector('canvas')
canvas.height = GAME_HEIGHT
canvas.width = GAME_WIDTH

const context = canvas.getContext('2d')

const levelData = getLevel()
const level = new Map(levelData)
const spritesheet = new Image()
spritesheet.src = "res/sprites/spritesheet.png"

console.log(level)
