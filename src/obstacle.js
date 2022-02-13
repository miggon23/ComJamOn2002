export default class Obstacle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);

        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this);
        this.setDepth(1);
        this.setScale(0.05);
        this.setIgnoreGravity(true);
        this.setSensor(true);
        this.canCollide = false;

        this.collideWorldBounds = true;

        this.displayHeight = 1;
        this.displayWidth = 1;
        this.alpha = 0;
        let tween = this.scene.tweens.add({
            targets: [this],
            duration: 7000,
            alpha: 1,
            displayWidth: 200,
            displayHeight: 300
        });

        tween.on('complete', this.startCheckingCollision, this);
    }

    startCheckingCollision() {
        let player = this.scene.player;

        if (((player.getTopLeft().x > this.getTopLeft().x && player.getTopLeft().x < this.getTopRight().x)
            || ((player.getTopRight().x > this.getTopLeft().x) && (player.getTopRight().x < this.getTopRight().x)))
            && (player.getTopLeft().y < this.getBottomLeft().y && player.getBottomLeft().y > this.getTopLeft().y)) {
            this.doCollision();
        }
        this.setOnCollideWith(this.scene.player, pair => {
            this.doCollision();
        });

        this.scene.time.addEvent({ delay: 800, callback: this.doDestroy, callbackScope: this });
    }

    doCollision() {
        this.onCollision();
    }

    doDestroy() {
        this.body.destroy();
        this.destroy();
    }

}