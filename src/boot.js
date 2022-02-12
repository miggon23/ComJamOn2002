import Data from "./data.js";

export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    this.load.setPath('./assets/sprites');

    this.load.image('pointer', 'pointer.png');
    this.load.image('kiwi', 'kiwiSolo.png');
    this.load.image('eagle', 'eagle.png');
    this.load.image('menuBackground', 'menuBackgroundNoButtons.png');
    this.load.image('playButton', 'playButton.png');
    this.load.image('controlsButton', 'controlsButton.png');
    this.load.image('controlsPanel', 'controlsPanel.png');
    this.load.image('background', 'background.png');
    this.load.image('scrollBackground', 'scrollBackground.png');
    this.load.image('back', 'back.png');
  
    this.load.spritesheet('player', 'kiwi_spritesheet.png', {frameWidth: 1699, frameHeight: 2184}); //1671
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.createAnims();
    this.scene.start('menu');
  }

  createAnims(){
    this.anims.create({
      key: 'kiwi_right',
      frames: this.anims.generateFrameNumbers('player', { start: 2, end: 4 }),
      frameRate: Data.animFrameRate,
      repeat: 0
    })

    this.anims.create({
      key: 'kiwi_jump',
      frames: this.anims.generateFrameNumbers('player', { start: 1, end: 0 }),
      frameRate: Data.jumpAnimFrameRate,
      repeat: 0,
    })

    this.anims.create({
      key: 'kiwi_left',
      frames: this.anims.generateFrameNumbers('player', { start: 2, end: 4 }),
      frameRate: Data.animFrameRate,
      repeat: 0,
    })
  }
}