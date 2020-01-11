export class Input {
  constructor(state) {
    this.state = state

    this.keys = {
      SPACE: false
    }

    window.addEventListener('keydown', this.keyDown.bind(this))
    window.addEventListener('keyup', this.keyUp.bind(this) )
  }

  keyDown(event) {
    if (!this.keys.SPACE && (event.keyCode == 32 || event.keyCode == 13)) {
      this.keys.SPACE = true
    }
  }

  keyUp(event) {
    // SPACE
    if (event.keyCode == 32 || event.keyCode == 13) {
      this.keys.SPACE = false
    }
    // D
    if (event.keyCode == 68) {
      this.state.showGrid = !this.state.showGrid
    }
  }

  update() {
    this.state.keys = this.keys
  }
}
