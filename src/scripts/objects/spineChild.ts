import { SpineGameObject } from 'phaser/plugins/spine/src/SpinePlugin'

export class SpineChild extends SpineGameObject {

  constructor(scene: any) {
    super(scene, scene.spine, 200, 1000, 'owl-spine', 'idle', true)

    scene.sys.displayList.add(this);
    scene.sys.updateList.add(this);
  }
}