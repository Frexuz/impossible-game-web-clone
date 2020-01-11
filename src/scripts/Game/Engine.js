export class Engine {
  constructor(game, ctx, settings) {
    this.game = game
    this.ctx = ctx
    this.fillColor = settings.fillColor
  }

  update() {
  }

  draw() {
    // this.ctx.fillStyle = this.fillColor
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)


    var gradient = this.ctx.createLinearGradient(0, 0, 0, this.ctx.canvas.height)
    gradient.addColorStop(0, '#0d2526')
    gradient.addColorStop(1, '#40bcc8')

    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  rotateInCenterOf(offset, rotationDeg) {
    this.ctx.translate(offset, offset)
    this.ctx.rotate(rotationDeg * Math.PI / 180)
    this.ctx.translate(-offset, -offset)
  }

  withContext(drawFn) {
    this.ctx.save()
    drawFn()
    this.ctx.restore()
  }
}
