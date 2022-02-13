export default class Cinematic extends Phaser.Scene {
    constructor() {
        super({ key: 'cinematic' });
    }

    create(info) {
        this.info = info;

        // Reproduce la cinematica del inicio o el fin del juego
        if (info.type === "start") {
            this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'cinematic1').setScale(0.145, 0.12);
            let c2 = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'cinematic2').setScale(0.145, 0.12).setAlpha(0);
            let c3 = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'cinematic3').setScale(0.145, 0.12).setAlpha(0);

            this.time.addEvent({ delay: 3000, callback: this.startTween, callbackScope: this, args: [c2] });
            this.time.addEvent({ delay: 7000, callback: this.startTween, callbackScope: this, args: [c3] });
            this.time.addEvent({ delay: 12000, callback: this.startGame, callbackScope: this });
            this.input.keyboard.on('keydown-SPACE', () => {this.startGame();});

        } else {
            this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'cinematic4').setScale(0.145, 0.12);
            let c2 = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'cinematic5').setScale(0.145, 0.12).setAlpha(0);
            this.time.addEvent({ delay: 3000, callback: this.startTween, callbackScope: this, args: [c2] });
            this.time.addEvent({ delay: 9000, callback: this.endGame, callbackScope: this });
            this.input.keyboard.on('keydown-SPACE', () => {this.endGame();});

        }
    }

    startTween(c) {
        this.tweens.add({
            targets: c,
            alpha: { value: 1, duration: 5000, ease: 'Power1' },
            loop: 0
        });
    }

    startGame() {
        this.scene.start('level');
    }

    endGame() {
        let info = { score: this.info.score };
        this.scene.start('gameOver', info);
    }

}