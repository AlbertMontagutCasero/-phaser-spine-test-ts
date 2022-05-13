// @ts-ignore
import { SpineGameObject } from 'phaser/plugins/spine/src/SpinePlugin'


interface Box {
    height: number;
    width: number;
  }

  interface Box {
    scale: number;
  }

export class SpineChild extends SpineGameObject {

    private box: Box = {
        height: 10,
        width: 20,
        scale: 30,
    }

  constructor(scene: any) {
    super(scene, scene.spine, 200, 1000, 'owl-spine', 'idle', true)
    scene.sys.displayList.add(this);
    scene.sys.updateList.add(this);
  }
}