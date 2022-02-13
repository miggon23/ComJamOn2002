export default class Player extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'pointer');
    
    this.setPhysics();x
    
    // this.setDisplaySize(this.scaleNumber, this.scaleNumber);   
    
    this.jumpSpeed = -3;
    this.movementSpeed = 4;

    this.w = this.scene.input.keyboard.addKey('W');
    this.a = this.scene.input.keyboard.addKey('A');
    this.s = this.scene.input.keyboard.addKey('S');
    this.d = this.scene.input.keyboard.addKey('D');

    this.anims.play('kiwi_jump', true);
  }
  
  setPhysics() {
    this.setScale(0.05);
    this.scaleNumber = 100;
    this.setSize(this.scaleNumber * 0.6, this.scaleNumber * 0.9);
    
    this.scene.add.existing(this);
    this.scene.matter.add.gameObject(this);

    //this.setMass(0.1);
    this.setMass(1);

    this.setDepth(3);
    this.collideWorldBounds = true;

  }

  preUpdate(t,dt) {
    super.preUpdate(t,dt);

    if (this.w.isDown && this.body.velocity.y === 0) {
      this.setVelocityY(this.jumpSpeed);
      this.anims.play('kiwi_jump', true);
    }
    else if (this.a.isDown) {
      this.setVelocityX(-this.movementSpeed);
      this.flipX = true;
      this.anims.play('kiwi_right', true);
    }
    else if (this.d.isDown) {
      this.setVelocityX(this.movementSpeed);
      this.flipX = false;
      this.anims.play('kiwi_right', true);
    }
    else {
      this.setVelocityX(this.body.velocity.x * 0.92);
    }

    this.setAngle(0);
  }
}
