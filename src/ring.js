import Obstacle from "./obstacle.js";

export default class Ring extends Obstacle {

    constructor(scene, x, y) {
        super(scene, x, y, 'ring');

        this.setSize(this.displayWidth * 250, this.displayHeight * 500, false);
        this.value = 1000000;
    }

    /**
     * Qué ocurre cuando choca con el player
     */
    onCollision() {
        const config = {
            volume: 0.05,
            loop: false,
        };
        let sfx = this.scene.sound.add('ringSound', config);
        sfx.play();
        this.scene.touchRing(this.value);
        console.log("aro tocado");
    }

}   