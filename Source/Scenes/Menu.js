class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.image("hypebeastPatrol", "./Assets/jordan1.png");
        this.load.image("yeezy", "./Assets/yeezy.png");
        this.load.audio("outsiders", "./Assets/ES_Stories From the Street - Aesyme.mp3");


    }

    create(){
        
        //displays menu sprite
        this.titleScreen= this.add.tileSprite(0, 0, 640, 480, "hypebeastPatrol").setOrigin(0,0);
        this.titleScreen= this.add.tileSprite(0, 0, 640, 480, "yeezy").setOrigin(0,0);
        this.add.rectangle(5, 5, 630, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(5, 443, 630, 32, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(5, 5, 32, 455, 0xFF0000).setOrigin(0,0);
        this.add.rectangle(603, 5, 32, 455, 0xFF0000).setOrigin(0,0);
        
        this.add.text(5, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(5, 443, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(555, 443, 'Supreme', { fontFamily: '"Roboto Condensed"' });
        this.add.text(555, 5, 'Supreme', { fontFamily: '"Roboto Condensed"' });

        let menuConfig={

            fontFamily: "Helvetica",
            fontSize: "32px",
            backgroundColor: "#FF0000",
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
        
        this.add.text(centerX, 170- textSpacer, "HYPEBEAST PATROL", menuConfig).setOrigin(0.5);
        this.add.text(centerX, 220, "Use ←→ arrows to move & (F) to Fire", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#FF0000";
        menuConfig.color= "#000";
        this.add.text(centerX, 250 + textSpacer, " ← for Weak Mode or → for Lit Mode", menuConfig).setOrigin(0.5);

        keyLEFT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
    }

     //launches the next scene
     update(){

        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings= {
               yeezy_twoSpeed: 3,
                gameTimer: 60000
            }
           
            this.scene.start("playScene"); //starts the next scene
            

        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){

            game.settings= {
                yeezy_twoSpeed: 6,
                 gameTimer: 60000
             }
        
            this.scene.start("playScene"); //starts the next scene

        }

       
        } 
    }


