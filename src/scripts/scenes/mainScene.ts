import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import { SpineChild } from '../objects/spineChild'

export default class MainScene extends Phaser.Scene {
  fpsText!: FpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

      const spineChildInstance = new SpineChild(this);

      const gameSize = this.scale.gameSize;
      const yCenterScreen = gameSize.height / 2;
      const xCenterScreen = gameSize.width / 2;
      this.add.spine(xCenterScreen, yCenterScreen + 200, 'owl-spine', "blink", true)
  }

  update() {
    this.fpsText.update()
  }
}
