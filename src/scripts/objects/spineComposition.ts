export class SpineComposite  {
  private owl: SpineGameObject;

  constructor(scene: Phaser.Scene) {
    const gameSize = scene.scale.gameSize;
    const yCenterScreen = gameSize.height / 2;
    const xCenterScreen = gameSize.width / 2;

    this.owl = scene.add.spine(xCenterScreen, yCenterScreen + 200, 'owl-spine', 'blink', true);
    scene.sys.displayList.add(this.owl as any);
  }
}
