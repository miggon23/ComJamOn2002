export default class Storm extends Obstacle {

    constructor(scene, x, y) {
        super(scene, x, y, 'storm');

        this.setSize(this.displayWidth * 250, this.displayHeight * 500, false);
    }

    /**
     * Qué ocurre cuando choca con el player
     */
    onCollision(){
        this.scene.endGame();
    }

}