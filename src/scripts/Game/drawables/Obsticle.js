import { Square } from './primitives/Square'

export class Obsticle {
  constructor(game, level, ctx) {
    this.game = game
    this.level = level
    this.ctx = ctx

    const columnWidth = this.level.grid.columnWidth

    this.position = {
      x: 47 * columnWidth,
      y: 15 * columnWidth,
    }

    this.object = new Square({
      ctx,
      size: columnWidth,
      color: '#000',
      borderWidth: 2,
      borderColor: '#fff',
    })

    this.isVisible = false
  }

  update() {
    this.isVisible = this.game.level.isInBounds(this.position.x)
  }

  draw() {
    if (!this.isVisible) {
      return
    }

    this.game.engine.withContext(() => {
      this.ctx.translate(this.position.x - this.level.scrollX, this.position.y)
      this.object.draw()
    })
  }
}
