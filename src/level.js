
import Eagle from './eagle.js';
import Player from './player.js';
import Ring from './ring.js';
import Storm from './storm.js';

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
    this.score = 0;

    this.eagle = new Eagle(this, this.cameras.main.displayWidth * 0.5, this.cameras.main.displayHeight * 0.6);
    this.player = new Player(this, 500, 300, this.eagle);
    
    //new Ring(this, this.cameras.main.width / 2 + 50, this.cameras.main.height / 2);
    //new Storm(this, this.cameras.main.width / 2 + 100, this.cameras.main.height / 2);

    // fondo
    this.backgroundSpeed = 1;
    this.background = this.add.tileSprite(0, 0, this.cameras.main.width * 2, this.cameras.main.height * 2 + 100, 'scrollBackground').setScrollFactor(0, 1).setDepth(0);
    this.background.setTileScale(0.2, 0.15);                                          // no sé pq tiene 100 de offset ?
    //this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'background').setScale(0.2, 0.15).setDepth(0);

    //this.physics.add.collider(this.player, this.eagle);
    this.label = this.add.text(20, 20, "Score: ", { fontFamily: 'Georgia', fontSize: 25 }).setScrollFactor(0).setDepth(1000);

    //Creamos los límites con el mundo
    this.matter.world.setBounds();
  }


  update(t, dt) {
    this.background.tilePositionX += this.backgroundSpeed;
    this.updateScore(1000);
  }

  /**
   * Actualiza la UI de la puntuacion
   * @param {int} n cantidad que aumenta el score
   */
  updateScore(n) {
    this.score += n;
    this.label.text = "Score: " + Math.round(this.score / 10000);
  }

  /**
   * 
   * @param {int} n cantidad que da el aro
   */
  touchRing(n) {
    this.updateScore(n);
  }

  /**
   * Cuando el player muere (se cae o toca una nube)
   */
  endGame() {
    let info = { score: this.score };
    this.scene.start('gameOver', info);
  }

}