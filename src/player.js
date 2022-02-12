export default class Player extends Phaser.GameObjects.Sprite {
  
  constructor(scene, x, y) {
    super(scene, x, y, 'pointer');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setDepth(3);
    this.setScale(0.05);
    
    this.body.setSize(this.displayWidth*250, this.displayHeight*500, false);
    
    //Para que no se salga de los límites del mundo
    this.body.setCollideWorldBounds();

    this.jumpSpeed = -350;
    this.movementSpeed = 200;

    this.w = this.scene.input.keyboard.addKey('W');
    this.a = this.scene.input.keyboard.addKey('A');
    this.s = this.scene.input.keyboard.addKey('S');
    this.d = this.scene.input.keyboard.addKey('D');

    this.anims.play('kiwi_jump', true);
  }
  
  preUpdate(t,dt) {
    super.preUpdate(t,dt);

    if (this.w.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
      this.anims.play('kiwi_jump', true);
    }
    else if (this.a.isDown){
      this.body.setVelocityX(-this.movementSpeed);
      this.flipX = true;
      this.anims.play('kiwi_right', true);

    }
    else if (this.d.isDown){
      this.body.setVelocityX(this.movementSpeed);
      this.flipX = false;
      this.anims.play('kiwi_right', true);
    }
    else {
      this.body.setVelocityX(this.body.velocity.x* 0.92);
    }

  }
}
