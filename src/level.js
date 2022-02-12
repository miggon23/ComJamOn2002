
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
  }

}