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
        this.load.audio("outsiders", "./Assets/ES_Stories From the Street - Aesyme.mp3");
        this.load.spritesheet("explosion", "./Assets/yeezplosion.png", {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        

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
        
        
        this.setupFire= this.add.text(278, 54, "🔥🔥FIRE🔥🔥", { fontFamily: "Roboto Condensed", fontSize: "32px", backgroundColor: "#FF0000"}).setOrigin(0.5);
        

        this.bgMusic= this.sound.add("outsiders");
        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.bgMusic.play(musicConfig);
    

        //create bling hand
        this.blingHand = new BlingHand(this, game.config.width/2, 420,"hand").setScale(0.5,0.5).setOrigin(0,0);
        


        //createshoes
        this.yeezy01 = new Yeezy(this, game.config.width +200, 44, "yeezy_two", 0, 60).setOrigin(0,0);
        this.yeezy02 = new Yeezy(this, game.config.width +96, 110, "yeezy_two", 0, 20).setOrigin(0,0);
        this.yeezy03 = new Yeezy(this, game.config.width, 200, "yeezy_two", 0, 10).setOrigin(0,0);

        //define keyboard keys
        keyF= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //animation configuration
        this.anims.create({

            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion", {start: 0, end: 9, first: 0}), frameRate: 30

        });
        
        //score
        this.p1score= 0;
        this.p1highScore= 0;

        //score display
        let scoreConfig = {
            fontFamily: "Helvetica",
            fontSize: "28px",
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
            align: "right",
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.scoreLeft= this.add.text(10,  35, this.p1score, scoreConfig); 
        this.gameOver= false;

        this.highScoreText= this.add.text(433, 35, "High Score: " + this.p1highScore, {
            fontFamily: "Helvetica",
            fontSize: "28px",
            fill: "white",
            backgroundColor: "#FF0000"
        });

        //60 Second Play Clock
        scoreConfig.fixedWidth= 0;
        this.clock= this.time.delayedCall(Math.floor(game.settings.gameTimer), () => {
            this.add.text(game.config.width/2, game.config.height/2, "GAME OVER", scoreConfig).setOrigin(0.5);  
            this.add.text(game.config.width/2, game.config.height/2 +64, "(F)ire to Restart or ← for Menu", scoreConfig).setOrigin(0.5); 
            this.gameOver= true, this.bgMusic.stop(musicConfig);
        }, null, this);

        this.delayText= this.add.text(245, 18);
        

       
        
    }

    update(){
        //check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)){
            this.scene.restart();
    
        }
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start("menuScene"); 

        }
        //scroll the Jordans
        this.jordanwall.tilePositionX -= 6;
        
        //Display the play clock
        this.delayText.setText('Time: ' + this.clock.getProgress().toString().substr(0, 4));
        
        
        if(!this.gameOver){

        this.blingHand.update();
        this.yeezy01.update();
        this.yeezy02.update();
        this.yeezy03.update();
        
        }

        //check collisions
        if(this.checkCollisions(this.blingHand, this.yeezy03)){
            this.blingHand.reset();
            this.shoeExplode(this.yeezy03);
        }

        if(this.checkCollisions(this.blingHand, this.yeezy02)){
            this.blingHand.reset();
            this.shoeExplode(this.yeezy02);
           
        }

        if(this.checkCollisions(this.blingHand, this.yeezy01)){
            this.blingHand.reset();
            this.shoeExplode(this.yeezy01);
            
        }

    }

    checkCollisions(finger,shoe){
        if(finger.x < shoe.x + shoe.width && finger.x + finger.width > shoe.x && finger.y < shoe.y + shoe.height && 
            finger.height + finger.y > shoe.y){
                return true;
            }
            else{
                return false;
            }


    }

    shoeExplode(shoe){
        shoe.alpha = 0; //temporarily hide the ship
        let boom = this.add.sprite(shoe.x, shoe.y, "explosion").setOrigin(0,0); //create explosion sprite at ship's position
        boom.anims.play("explode"); //play the explode animation
        boom.on("animationcomplete", () => { //callback after animation completes
            shoe.reset(); //reset the postition of the ship
            shoe.alpha =1; //make ship visible again
            boom.destroy(); //kill animation (remove sprite)
            this.sound.play("money");

        });

        //score increment and repaint
        this.p1score += shoe.points;
        this.scoreLeft.text = this.p1score;
        //High score tracker
        this.highScoreText.text= "High Score: " + localStorage.getItem("p1highScore");
        {
            if(this.p1score > localStorage.getItem("p1highScore")){
                
                localStorage.setItem("p1highScore", this.p1score);
       }
   }
       

    }
    

}