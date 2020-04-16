let config = {

    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

let game = new Phaser.Game(config);

game.settings= {
    yeezy_twoSpeed: 5,
    jordan_oneSpeed: 3,
    gameTimer: Math.floor(60000%1000)
}

let keyF, keyLEFT, keyRIGHT;