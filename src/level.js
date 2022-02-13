
import Eagle from './eagle.js';
import Player from './player.js';
import Ring from './ring.js';
import Storm from './storm.js';
import Deathzone from './deathzone.js';

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

    this.eagle = new Eagle(this, this.cameras.main.displayWidth * 0.5, this.cameras.main.displayHeight * 0.9);
    this.player = new Player(this, this.cameras.main.displayWidth * 0.5, this.cameras.main.displayHeight * 0.8, this.eagle);
    
    // spawn de obstáculos
    //new Ring(this, this.cameras.main.width / 2 + 50, this.cameras.main.height / 2);
    //new Storm(this, this.cameras.main.width / 2 + 100, this.cameras.main.height / 2);

    // fondo
    this.backgroundSpeed = 1;
    this.background = this.add.tileSprite(0, 0, this.cameras.main.width * 2, this.cameras.main.height * 2 + 100, 'scrollBackground').setScrollFactor(0, 1).setDepth(0);
    this.background.setTileScale(0.4, 0.3);                                          // no sé pq tiene 100 de offset ?

    this.label = this.add.text(20, 20, "Score: ", { fontFamily: 'Georgia', fontSize: 25 }).setScrollFactor(0).setDepth(1000);

    //Creamos los límites con el mundo
    this.matter.world.setBounds();

    this.deathzone = new Deathzone(this, this.cameras.main.displayWidth * 0.5, this.cameras.main.displayHeight);

    this.setGroupCollision();
    //this.colliderEvents();
    this.spawnObstacle();

    // this.matter.world.on('collisionactive', (evento, cuerpo1, cuerpo2) => {
    //   if(cuerpo1.jumping !== undefined){
    //     if(cuerpo2.canCollide !== undefined && cuerpo2.canCollide === true)
    //       console.log("Colision con obstaculo")
    //   }

    //   else if(cuerpo2.jumping !== undefined){
    //     if(cuerpo1.canCollide !== undefined && cuerpo1.canCollide === true)
    //       console.log("Colision con obstaculo")

    //   }
    // })
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

  spawnObstacle(){
    let rand = Phaser.Math.Between (0, 9);
    let x = Phaser.Math.Between(110, this.cameras.main.displayWidth - 110);
    let y = Phaser.Math.Between(100, this.cameras.main.displayHeight - 100);
    if(rand <= 4){
      new Ring(this, x, y);
    }
    else{
      new Storm(this, x, y);
    } 

    let randTime = Phaser.Math.Between(6000, 8000);
    this.time.addEvent({
      callback: this.spawnObstacle,
      callbackScope: this,
      delay: randTime,
    })
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
    let info = { score: this.score, type: "end" };
    this.scene.start('cinematic', info);
  }

  setGroupCollision(){
    const playerCol = this.matter.world.nextCategory();
    const deathZoneCol = this.matter.world.nextCategory();
    const obstaclesCol = this.matter.world.nextCategory();

    this.player.setCollisionCategory(playerCol);
    this.deathzone.setCollisionCategory(deathZoneCol);
    
    //La deathzone solo recive collisiones del jugador
    //this.deathzone.setCollidesWith( [playerCol]);
    this.deathzone.setOnCollideWith(this.player, pair =>{
      this.playerLoses();
    });
  }


  playerLoses() {
    console.log("choco con el jugador");
    let tween = this.tweens.add({
      targets: [this.player],
      duration: 2000,
      alpha: 0,
    });
    tween.on('complete', this.endGame, this);
  }

  // colliderEvents(){
  //   this.matter.world.on('collisionstart',
  //   (evento, cuerpo1, cuerpo2) => {
      
  //   })
  // }

}