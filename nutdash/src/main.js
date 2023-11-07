//Bryon Anderson CMPM-176
//endless runner - Nut Dash
//for some reason none of my assets would load I'm not quite sure why the game was not
//intially going top be made from the green boxes phaser inputs
//Also had trouble implementing end game screen to stop game loop

// global game options
let gameOptions = {
    platformStartSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200,
    jumps: 2,
    gameTimer: 1000
}
    // object containing configuration options
    let config = {
        type: Phaser.CANVAS,
        width: 1334,
        height: 750,
        scene:[ Menu, Play, Credits],
        backgroundColor: 0x444444,
 
        // physics settings
        physics: {
            default: "arcade"
        }
    }
    let game = new Phaser.Game(config);
    let borderUISize = game.config.height / 15;
    let borderPadding = borderUISize / 3;
    let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW;
    