import Obstacle from "./obstacle.js";
export default class Storm extends Obstacle {

    constructor(scene, x, y) {
        super(scene, x, y, 'storm');

        this.setSize(this.displayWidth * 220, this.displayHeight * 450, false);
    }

    /**
     * Qué ocurre cuando choca con el player
     */
    onCollision(){
        this.scene.endGame();
    }

}