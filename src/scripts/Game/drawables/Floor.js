export class Floor {
  constructor(level, ctx) {
    this.ctx = ctx

    this.position = {
      xStart: level.bounds.xStart,
      xEnd: level.bounds.xEnd,
      yEnd: level.bounds.yEnd + level.grid.columnWidth,
    }
  }

  update() {

  }

  draw() {
    // Border
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = '#fff'
    this.ctx.beginPath()

    // Top
    this.ctx.moveTo(this.position.xStart, this.position.yEnd)
    this.ctx.lineTo(this.position.xEnd, this.position.yEnd)

    this.ctx.stroke()
  }
}
