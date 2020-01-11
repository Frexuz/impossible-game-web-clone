import Bezier from 'bezier-js'
import { Square } from './primitives/Square'

const JUMPING_SPEED = 0.04

export class Player {
  constructor(game, level, ctx) {
    this.game = game
    this.level = level
    this.ctx = ctx
    this.columnWidth = this.level.grid.columnWidth
    this.columnWidthHalf = this.columnWidth / 2

    this.playerObject = new Square({
      ctx,
      size: this.columnWidth,
      color: '#db5c14',
      borderWidth: 2,
      borderColor: '#6e2215',
    })

    this.jumpingEasing = Bezier.cubicFromPoints(
      { x: 0, y: 0 },
      { x: 1, y: this.columnWidth * 3 },
      { x: 2, y: 0 }
    )

    this.position = {
      x: 12 * this.columnWidth,
      y: 15 * this.columnWidth,
    }

    this.isJumping = false
    this.isJumpingProgress = 0
    this.jumpingDelta = 0
    this.rotationDeg = 0
  }

  update() {
    if (this.game.state.keys.SPACE && !this.isJumping) {
      this.isJumping = true
    }
    if (this.isJumping) {
      this.isJumpingProgress += JUMPING_SPEED
      this.jumpingDelta = -(this.jumpingEasing.get(this.isJumpingProgress).y)
      this.rotationDeg = 90 * this.isJumpingProgress
      if (this.isJumpingProgress >= 1.0) {
        this.land()
      }
    }
  }

  land() {
    this.isJumping = false
    this.jumpingDelta = 0
    this.isJumpingProgress = 0
    this.rotationDeg = 0
  }

  draw() {
    this.game.engine.withContext(() => {
      this.ctx.translate(this.position.x, this.position.y + this.jumpingDelta)
      this.game.engine.withContext(() => {
        // Rotate in the center of the player object (square)
        this.game.engine.rotateInCenterOf(this.columnWidthHalf, this.rotationDeg)

        // Draw the square
        this.playerObject.draw()
      })
    })
  }
}
