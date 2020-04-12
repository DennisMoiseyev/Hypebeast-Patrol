class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        //load images and the tile sprite
        this.load.image("yeezy_two", "./Assets/yeezy.png");
        this.load.image("fire", "./Assets/fire.png");
        this.load.image("jordanwall", "./Assets/jordanwall.PNG");
        this.load.image("jordan1", "./Assets/jordan1.png");
        this.load.image("hand", "./Assets/BlingHand.png");
        this.load.audio("jumpman", "./Assets/hip hop.mp3");

    }

    create(){
        //place tile sprite
        this.jordanwall = this.add.tileSprite(0, 0, 640, 480, "jordanwall").setOrigin(0,0); 

        //Red Supreme Hypebeast Borders
        this.add.rectangle(5, 5, 630, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(5, 443, 630, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(5, 5, 32, 455, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(603, 5, 32, 455, 0xFF0000).setOrigin(0,0);
        
        this.add.text(5, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(5, 443, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(555, 443, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(555, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });

        //create bling hand
        this.blingHand = new BlingHand(this, game.config.width/2, 431,"hand").setScale(0.5,0.5).setOrigin(0,0);


        //createshoes
        this.yeezy01 = new Yeezy(this, game.config.width +200, 40, "yeezy_two", 0, 60).setOrigin(0,0);
        this.yeezy02 = new Yeezy(this, game.config.width +96, 110, "yeezy_two", 0, 20).setOrigin(0,0);
        this.yeezy03 = new Yeezy(this, game.config.width, 200, "yeezy_two", 0, 10).setOrigin(0,0);

        //define keyboard keys
        keyF= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      

        
    }

    update(){
        //scroll the Jordans
        this.jordanwall.tilePositionX -= 6;

        this.blingHand.update();

        this.yeezy01.update();
        this.yeezy02.update();
        this.yeezy03.update();
    }

}