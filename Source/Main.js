//Dennis Moiseyev CMPM120 UC Santa Cruz 2020
//Hypebeast Patrol
//A complete redesign mod of the 'Rocket Patrol' tutorial game
//All sounds downloaded with a copyright-free license from freesounds.org
//Copyright-free background music provided by Epidemic Sound

/* 

Points Breakdown:

Starting Tier (30):

Tracked a High Score, displayed on top right hand corner of Play Scene (10)
Looped copyright-free Background Music in Play Scene (10)
Gave player control of rocket(Bling Hand) once it's launched (10)

Novice Tier:

Created a newly designed Title Screen (15)

S Tier:

Completely redesigned the game's artwork, UI, sound and modified it into a hypewear/hypebeast hip hop aesthetic (50)
All assets (aside from the sounds) were created solely by me (Yeezy sprites, Off White Air Jordan 1 sprites, Bape Logo Sprite, Bling Hand Sprite, "Supreme" UI borders, yeezplosion sprite sheet, Jordan Fire tilesprite)

#FACADE Tier:

Implemented a timer that shows elapsed time in seconds during gameplay (5)
I didn't do a timer that counts down once the game has started, but was still able to display the time (in seconds) that the player has in the game.
This did require more effort in my programming skill and additional code to implement, so I ask 5 points for this mod rather than 15 to solidify my 100 points
for this assignment.

*/

//Configure game to browser and include menu and play core scenes
let config = {

    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

//apply configurations to new Phaser Game
let game = new Phaser.Game(config);

//Configure time and speed settings in Play scene of game
game.settings= {
    yeezy_twoSpeed: 5,
    jordan_oneSpeed: 3,
    gameTimer: Math.floor(60000%1000)
}

//Declare keys that will be used for gameplay
let keyF, keyLEFT, keyRIGHT;