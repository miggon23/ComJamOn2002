import Obstacle from "./obstacle.js";

export default class Ring extends Obstacle {

    constructor(scene, x, y) {
        super(scene, x, y, 'ring');

        this.setSize(this.displayWidth * 250, this.displayHeight * 500, false);
        this.value = 10000;
    }

    /**
     * Qué ocurre cuando choca con el player
     */
    onCollision(){
        this.anims.play('ringSound', true);
        this.scene.touchRing(this.value);
    }

}