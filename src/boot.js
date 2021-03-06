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

    this.load.image('background', 'background.png');
    this.load.image('scrollBackground', 'scrollBackground.png');
    this.load.image('menuBackground', 'menuBackgroundNoButtons.png');

    this.load.image('playButton', 'playButton.png');
    this.load.image('playAgainButton', 'playAgainButton.png');
    this.load.image('quitButton', 'quitButton.png');
    this.load.image('controlsButton', 'controlsButton.png');
    this.load.image('controlsPanel', 'controlsPanel.png');
    this.load.image('back', 'back.png');

    this.load.image('ring', 'ring.png');
    this.load.image('storm', 'storm.png');

    this.load.image('cinematic1', './Cinematicas/1.png');
    this.load.image('cinematic2', './Cinematicas/2.png');
    this.load.image('cinematic3', './Cinematicas/3.png');
    this.load.image('cinematic4', './Cinematicas/4.png');
    this.load.image('cinematic5', './Cinematicas/5.png');

    this.load.spritesheet('player', 'kiwi_spritesheet.png', { frameWidth: 850.4, frameHeight: 1092 });
    this.load.spritesheet('player2', 'kiwi_spritesheet2.png', { frameWidth: 910.5, frameHeight: 1073 });

    this.load.audio('pio', '../music/pio.wav');
    this.load.audio('ringSound', '../music/ring.wav');
    this.load.audio('stormSound', '../music/storm.wav');
    this.load.audio('backgroundMusic', '../music/BoxCat Games - B-3.mp3');
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.createAnims();
    this.scene.start('menu');
  }

  createAnims() {
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

    this.anims.create({
      key: 'kiwi_bite',
      frames: this.anims.generateFrameNumbers('player2', { start: 0, end: 1 }),
      frameRate: Data.animFrameRate,
      repeat: 3,
    })
  }
}