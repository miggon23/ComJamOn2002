export default class Obstacle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);

        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this);
        this.setDepth(1);
        this.setScale(0.05);

        //Para que no se salga de los límites del mundo
        this.collideWorldBounds = true;

        this.displayHeight = 1;
        this.displayWidth = 1;
        this.alpha = 0;
        let tween = this.scene.tweens.add({
            targets: [this],
            duration: 5000,
            alpha: 1,
            displayWidth: 200,
            displayHeight: 300
        });

        tween.on('complete', this.checkCollision, this);
    }

    /**
     * Comprueba si en un instante determinado hay colisión con el jugador
     */
    checkCollision() {
        console.log("aaa");
        this.onCollision();
    }

}