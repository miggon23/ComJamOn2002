
import Eagle from './eagle.js';
import Player from './player.js';

export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    this.player = new Player(this, 50 , 50);
    this.eagle = new Eagle(this, this.cameras.main.displayWidth * 0.5, this.cameras.main.displayHeight * 0.8);

    
    // fondo
    this.backgroundSpeed = 1;
    this.background = this.add.tileSprite(0, 0, this.cameras.main.width*2, this.cameras.main.height*2 + 100, 'scrollBackground').setScrollFactor(0, 1).setDepth(0);
    this.background.setTileScale(0.2, 0.15);                                          // no sé pq tiene 100 de offset ?
    //this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'background').setScale(0.2, 0.15).setDepth(0);

  }


  update(t, dt) {
    this.background.tilePositionX += this.backgroundSpeed;
}

}