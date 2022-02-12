export default class Eagle extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'eagle')

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.setDepth(2);

        this.setScale(0.1);

        this.body.setSize(this.displayWidth * 0.3, this.displayHeight * 0.35, true);
    }

}