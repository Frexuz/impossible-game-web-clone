import '../styles/index.scss';
import { Game } from './Game/Game'

// Setup
const canvas = document.getElementById('canvas')

const setWindowSize = () => {
  let { innerWidth, innerHeight } = window
  canvas.width = innerWidth
  canvas.height = innerHeight
}

window.addEventListener('resize', setWindowSize)
setWindowSize()

// Variables
const ctx = canvas.getContext('2d')

// Start
const game = new Game(ctx)
game.start()
