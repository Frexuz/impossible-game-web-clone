export class Square {
  constructor({ size, ctx, color, borderColor = null, borderWidth = null }) {
    this.ctx = ctx

    this.size = size
    this.color = color
    this.borderWidth = borderWidth
    this.borderColor = borderColor
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.save()

    this.ctx.fillRect(0, 0, this.size, this.size)

    // Border
    if (this.borderWidth && this.borderColor) {
      this.ctx.lineWidth = this.borderWidth
      this.ctx.strokeStyle = this.borderColor
      this.ctx.beginPath()

      // Top
      this.ctx.moveTo(0, 0)
      this.ctx.lineTo(this.size, 0)

      // Right
      this.ctx.moveTo(this.size, 0)
      this.ctx.lineTo(this.size, this.size)

      // Bottom
      this.ctx.moveTo(this.size, this.size)
      this.ctx.lineTo(0, this.size)

      // Left
      this.ctx.moveTo(0, this.size)
      this.ctx.lineTo(0, 0)

      this.ctx.stroke()
    }

    this.ctx.restore()
  }
}
