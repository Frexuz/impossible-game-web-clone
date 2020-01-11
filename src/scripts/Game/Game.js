// FPS counter: https://codepen.io/rishabhp/pen/XKpBQX/

import { Engine } from './Engine'
import { Level } from './Level'
import { State } from './State'
import { Input } from './Input'

const FPS = 60
const INTERVAL = 1000 / FPS

export class Game {
  constructor(ctx) {
    this.ctx = ctx

    // Main objects
    this.engine = new Engine(this, ctx, { fillColor: '#000' })
    this.level = new Level(this, ctx)
    this.state = new State()
    this.input = new Input(this.state)

    // FPS
    this.then = Date.now()
    this.now
    this.delta
  }

  update() {
    this.engine.update()
    this.level.update()
    this.input.update()
  }

  draw() {
    requestAnimationFrame(this.draw.bind(this))

    this.now = Date.now()
    this.delta = this.now - this.then

    if (this.delta > INTERVAL) {
        // update time stuffs
        this.update()

        // Just `then = now` is not enough.
        // Lets say we set fps at 10 which means
        // each frame must take 100ms
        // Now frame executes in 16ms (60fps) so
        // the loop iterates 7 times (16*7 = 112ms) until
        // delta > interval === true
        // Eventually this lowers down the FPS as
        // 112*10 = 1120ms (NOT 1000ms).
        // So we have to get rid of that extra 12ms
        // by subtracting delta (112) % interval (100).

        this.then = this.now - (this.delta % INTERVAL)

        // ... Code for Drawing the Frame ...
        this.engine.draw()
        this.level.draw()
    }
  }

  start() {
    this.draw()
  }
}
