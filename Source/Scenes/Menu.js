class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); //(15)
    }

    preload(){
        //preload all audio and images to be utilized in this scene and across the play scene
        this.load.image("hypebeastPatrol", "./Assets/jordan1.png");
        this.load.image("yeezy", "./Assets/yeezy.png");
        this.load.audio("clap", "./Assets/hip-hop-clap.wav");
        this.load.audio("money", "./Assets/chaching.wav");
        this.load.audio("bling", "./Assets/Bling.wav");


    }

    create(){
        
        //displays Jordan menu sprites and creates Yeezy/Jordan tilesprites from png asset
        this.jordan1_01= this.add.sprite(200, 455, "hypebeastPatrol").setOrigin(0,0);
        this.jordan1_02= this.add.sprite(12, 455, "hypebeastPatrol").setOrigin(0,0);
        this.jordan1_03= this.add.sprite(100, 455, "hypebeastPatrol").setOrigin(0,0);
        this.jordan1_04= this.add.sprite(350, 455, "hypebeastPatrol").setOrigin(0,0);
        this.jordan1_05= this.add.sprite(200, 455, "hypebeastPatrol").setOrigin(0,0);
        this.jordan1_06= this.add.sprite(12, 455, "hypebeastPatrol").setOrigin(0,0);
        this.titleScreen= this.add.tileSprite(0, 0, 640, 480, "hypebeastPatrol").setOrigin(0,0);
        this.titleScreen= this.add.tileSprite(0, 0, 640, 480, "yeezy").setOrigin(0,0);
       

        //create the 'Supreme' Brand border in title screen
        this.add.rectangle(0, 0, 640, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(12, 455, 640, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(0, 15, 32, 470, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(609, 10, 32, 470, 0xFF0000).setOrigin(0,0);
        this.add.text(5, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(5, 460, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(577, 460, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(577, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });

        //Title Text configuration
        let menuConfig={

            fontFamily: "Helvetica",
            fontSize: "32px",
            backgroundColor: "#006400",
            align: "right",
            color: "#000",
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }

        //show menu text
        let centerX= game.config.width/2;
        let centerY= game.config.height/2;
        let textSpacer= 64;
        
        //Create Menu text and position in a fixed spot on the menu screen 
        this.add.text(centerX, 170- textSpacer, "HYPEBEAST PATROL", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#FF0000";
        this.add.text(centerX, 220, "Use ←→ arrows to move & (F) to Fire", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#006400";
        menuConfig.color= "#000";
        this.add.text(centerX, 250 + textSpacer, " ← for Weak Mode or → for Lit Mode", menuConfig).setOrigin(0.5);

        //Add keys 
        keyLEFT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
    }

     
     update(){
        //Yeezy tilesprite move across the screen to the right
        this.titleScreen.tilePositionX +=4;
        //Jordan 1 sprites rotate in both directions
        //Implemented from Nathan's AssetBonanza https://github.com/nathanaltice/AssetBonanza/blob/master/src/main.js
        this.jordan1_01.angle += 0.5;
        this.jordan1_02.angle += 0.5;
        this.jordan1_03.angle += 0.5;
        this.jordan1_04.angle -= 0.5;
        this.jordan1_05.angle -= 0.5;
        this.jordan1_06.angle -= 0.5;

        //On left press, go to weaker option where sneakers move slower
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings= {
               yeezy_twoSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play("clap");
            this.scene.start("playScene"); //starts the next scene
            

        }

        //On right press, go to more lit option where sneakers move faster
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){

            game.settings= {
                yeezy_twoSpeed: 6,
                 gameTimer: 60000
             }
            this.sound.play("clap");
            this.scene.start("playScene"); //starts the next scene

        }

       
        } 
    }


