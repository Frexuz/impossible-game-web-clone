import { Grid } from './drawables/Grid'
import { Player } from './drawables/Player'
import { Floor } from './drawables/Floor'
import { Obsticle } from './drawables/Obsticle'

const MARGIN_SIZE = 4
const BOTTOM_Y = 15

export class Level {
  constructor(game, ctx) {
    this.ctx = ctx
    this.game = game
    this.grid = new Grid(this, ctx)
    this.bounds = this.setBounds()

    // Items
    this.floor = new Floor(this, ctx)
    this.obsticle = new Obsticle(game, this, ctx)
    this.player = new Player(game, this, ctx)

    // State
    this.scrollX = 0
  }

  setBounds() {
    const columnWidth = this.grid.columnWidth
    const levelMarginX = MARGIN_SIZE * columnWidth

    return {
      xStart: levelMarginX,
      xEnd: this.ctx.canvas.width - levelMarginX,
      yEnd: BOTTOM_Y * columnWidth,
    }
  }

  isInBounds(xPos) {
    const xPosWithScroll = xPos - this.scrollX
    return xPosWithScroll >= this.bounds.xStart && xPosWithScroll < this.bounds.xEnd
  }

  update() {
    this.scrollX += 7
    this.player.update()
    this.obsticle.update()
  }

  draw() {
    this.grid.draw()
    this.floor.draw()
    this.player.draw()
    this.obsticle.draw()
  }
}
