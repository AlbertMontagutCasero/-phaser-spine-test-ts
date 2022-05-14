import { SpineGameObject } from 'phaser/plugins/spine/src/SpinePlugin'

export class SpineChild extends SpineGameObject {
  constructor(scene: Phaser.Scene) {
    super(scene, scene.spine, 200, 1000, 'owl-spine', 'idle', true)

    scene.sys.displayList.add(this as any)
    scene.sys.updateList.add(this as any)
  }
}
