export default class Eagle extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'eagle')

        this.setPhysics();

        this.setDepth(2);

        
        //this.setOffset(this.displayWidth * 0.15, this.displayHeight * 0.35);
    }   
    
    setPhysics() {
        
        this.scaleNumber = 4400;
        this.setSize(this.scaleNumber, this.scaleNumber * 0.04);

        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this, {render: {sprite: {yOffset: 2.2}}});
        this.collideWorldBounds = true;
        this.setIgnoreGravity(true);
        this.setMass(1000);

        let pos = new Phaser.Math.Vector2(600, 800);
        let force = new Phaser.Math.Vector2(0,-0.1*2); // valor de la gravedad
        this.applyForceFrom(pos, force);

        this.setScale(0.15);
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        let dif = this.getBottomRight().y - this.getBottomLeft().y;
        if(Math.abs(dif) < 30){

            this.setVelocityX(dif / 15);
            //this.setVelocityX(this.rotation * 10);
        }
        else {
            if(dif > 0)
                this.setVelocityX(2);
            else
                this.setVelocityX(-2);
        }

        this.limitateRotation();

        this.setVelocityX(this.body.velocity.x * 0.9);
  
        this.rotation *= 0.97;
        console.log("Eagle x: " + Math.round(this.x) + " y: " + Math.round(this.y));
    }

    limitateRotation(){
        let limit = 0.1;
        if(this.rotation > limit)
        {
            this.setVelocityX(0);

        }
        else if (this.rotation < -limit)
        {
            this.setVelocityX(0);
          
        }

    }

}