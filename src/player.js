import Data from './data.js';

export default class Player extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, eagle) {
    super(scene, x, y, 'pointer');

    this.setPhysics(eagle);
    this.eagle = eagle;

    // this.setDisplaySize(this.scaleNumber, this.scaleNumber);   

    this.jumpSpeed = -8;
    this.movementSpeed = 4;

    this.jumping = false;

    this.w = this.scene.input.keyboard.addKey('W');
    this.a = this.scene.input.keyboard.addKey('A');
    this.s = this.scene.input.keyboard.addKey('S');
    this.d = this.scene.input.keyboard.addKey('D');

    this.anims.play('kiwi_jump', true);

    this.timer = 0;
    this.timeToGrab = 500;
    this.grabForce = 0.01;

  }

  setPhysics(eagle) {
    this.setScale(0.08);
    this.scaleNumber = 100;
    this.setSize(this.scaleNumber * 0.5, this.scaleNumber * 0.9);

    this.scene.add.existing(this);
    this.scene.matter.add.gameObject(this);

    //this.setMass(0.1);
    this.setMass(Data.physics.kiwi.mass);

    this.setDepth(3);
    this.collideWorldBounds = true;

    this.setOnCollideWith(eagle, pair => {
      this.changeJump();
    });

    this.setFixedRotation();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.timer += dt;
    if (this.s.isDown) {
      if (!this.jumping) {
        let pos_ = new Phaser.Math.Vector2(this.x, this.y + (this.displayHeight / 2) + 10);
        let force_ = new Phaser.Math.Vector2(0, -this.grabForce);
        this.eagle.applyForceFrom(pos_, force_);
        //console.log("Grabbing");
        this.timer = 0;
        this.anims.play('kiwi_bite', true);
      }
      else {
        let dir_ = new Phaser.Math.Vector2(0, this.grabForce);
        this.applyForce(dir_);
      }
    }
    if (this.w.isDown && !this.jumping) {
      this.jumping = true;
      this.setVelocityY(this.jumpSpeed);
      this.anims.play('kiwi_jump', true);

      const config = {
        volume: 0.1,
        loop: false,
      };
      let sfx = this.scene.sound.add('pio', config);
      sfx.play();
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
  }

  /**
   * Si el salto estaba activo, se desactiva, para permitir volver a saltar
   */
  changeJump() {
    if (this.jumping) {
      this.jumping = false;
    }
  }
}
