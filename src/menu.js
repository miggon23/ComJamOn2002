export default class Menu extends Phaser.Scene{
    constructor(){
        super({key:'menu'});
    }

    create(){
        this.background = this.add.image(0, 0, 'menuBackground')
        .setOrigin(0, 0)
        .setScale(0.145, 0.15);        

        this.playButton = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'playButton')
        .setInteractive().setScale(0.15);

        this.playButton.on('pointerup', function(event) {
            this.scene.start('level');
        }, this);

        this.controlsButton = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2 + 250, 'controlsButton')
        .setInteractive().setScale(0.15);

        this.controlsButton.on('pointerup', () => {
            this.controlsImage = this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'controlsPanel')
            .setInteractive().setScale(0.18); // hace falta el setInteractive para que no lo 'atravieses'

            this.returnImage = this.add.image(this.controlsImage.getBottomLeft().x + 100, this.controlsImage.getBottomLeft().y - 80, 'back')
            .setInteractive().setScale(0.15);
            //this.add.existing(this.returnImage);

            this.returnImage.on('pointerup', function (event) { 
                this.controlsImage.destroy();
                this.returnImage.destroy();
            }, this);
        })
    }
}