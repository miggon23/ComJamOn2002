export default class Eagle extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'eagle')

        this.setScale(0.2);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.setDepth(2);


        this.body.setSize(this.displayWidth * 0.7, this.displayHeight * 0.15, true);
        this.body.setOffset(this.displayWidth * 0.15, this.displayHeight * 0.35);
        
    }

}