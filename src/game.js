import Boot from './boot.js';
import Level from './level.js';
import Menu from './menu.js';
import gameOver from './gameOver.js';
import Cinematic from './cinematic.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    width:  1200,
    height: 800,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Level, gameOver, Cinematic],
    physics: { 
        default: 'matter', 
        matter: {  
            gravity:{y: 0.5},
            debug: true
        } 
    }
};

new Phaser.Game(config);