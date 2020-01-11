const GRID_SIZE = 50

export class Grid {
  constructor(level, ctx) {
    this.level = level
    this.ctx = ctx
    this.columnWidth = this.ctx.canvas.width / GRID_SIZE
  }

  draw() {
    if (!this.level.game.state.showGrid) {
      return
    }

    this.ctx.globalAlpha = 0.2
    this.ctx.beginPath()
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = '#000'

    for (let i = 0; i < GRID_SIZE; i++) {
      // Horizontal line
      this.ctx.moveTo(this.columnWidth * i, 0)
      this.ctx.lineTo(this.columnWidth * i, this.ctx.canvas.height)

      // Vertical line
      this.ctx.moveTo(0, this.columnWidth * i)
      this.ctx.lineTo(this.ctx.canvas.width, this.columnWidth * i)
    }

    this.ctx.stroke()
    this.ctx.globalAlpha = 1
  }
}
