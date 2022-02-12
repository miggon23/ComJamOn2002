export default class Player extends Phaser.GameObjects.Sprite {
  
  constructor(scene, x, y) {
    super(scene, x, y, 'pointer');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setDepth(3);

    //Para que no se salga de los límites del mundo
    this.body.setCollideWorldBounds();

    this.body.setSize(this.displayWidth * 0.3, this.displayHeight * 0.35, true);

    this.w = this.scene.input.keyboard.addKey('W');
    this.a = this.scene.input.keyboard.addKey('A');
    this.s = this.scene.input.keyboard.addKey('S');
    this.d = this.scene.input.keyboard.addKey('D');
  }
  
  preUpdate(t,dt) {
    super.preUpdate(t,dt);

  }
}
