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
        
        this.setScale(0.2);
    }
}