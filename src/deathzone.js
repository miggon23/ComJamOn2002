export default class Deathzone extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'eagle')

        this.setPhysics();

        this.setDepth(2);

        
        //this.setOffset(this.displayWidth * 0.15, this.displayHeight * 0.35);
    }   
    
    setPhysics() {
        
        this.scaleNumber = 4400;
        this.setSize(this.scaleNumber * 2, this.scaleNumber * 0.04);

        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this);
        //this.collideWorldBounds = true;
        this.setIgnoreGravity(true);

        this.setScale(0.15);
        this.setSensor(true);
        this.alpha = 0;  
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        console.log("x: " + this.x, " y: " + this.y);
    }

}