export default class gameOver extends Phaser.Scene{
    constructor(){
        super({key:'gameOver'});
    }

    create(info){
        this.background = this.add.image(0, 0, 'background')
        .setOrigin(0, 0)
        .setScale(0.29, 0.3);        

        this.label = this.add.text(this.cameras.main.displayWidth / 2 - 100, 90, "Game Over!", 
        {fontFamily: 'Georgia', fontSize: 40}).setScrollFactor(0).setDepth(1000);

        
        this.label2 = this.add.text(this.cameras.main.displayWidth / 2 - 200, 140, "Your score was: " + Math.round(info.score / 10000), 
        {fontFamily: 'Georgia', fontSize: 40}).setScrollFactor(0).setDepth(1000);

        this.playButton = this.add.image(this.cameras.main.displayWidth / 2, 300, 'playAgainButton')
        .setInteractive().setScale(0.2);

        this.playButton.on('pointerup', function(event) {
            this.scene.start('level');
        }, this);

        this.quitButton = this.add.image(this.cameras.main.displayWidth / 2, 450, 'quitButton')
        .setInteractive().setScale(0.2);

        this.quitButton.on('pointerup', function(event) {
            this.scene.start('menu');
        }, this);
    }
    
}