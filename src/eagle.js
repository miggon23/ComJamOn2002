export default class Eagle extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'eagle')

        this.setPhysics();

        this.setDepth(2);

        
        //this.setOffset(this.displayWidth * 0.15, this.displayHeight * 0.35);
        
    }   
    
    setPhysics() {
        
        this.scaleNumber = 4500;
        this.setOrigin(0.5, 0.8);
        this.setSize(this.scaleNumber, this.scaleNumber * 0.05);
        
        this.scene.add.existing(this);
        //this.scene.physics.add.existing(this, true);
        this.scene.matter.add.gameObject(this);
        this.collideWorldBounds = true;
        this.setScale(0.1);
    }
}