import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import 'phaser/plugins/spine/dist/SpinePlugin'

const DEFAULT_WIDTH = 1680
const DEFAULT_HEIGHT = 1050

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  },
  plugins: {
    scene: [
      {
        key: SpinePlugin.name,
        plugin: SpinePlugin,
        mapping: 'spine'
      }
    ]
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
