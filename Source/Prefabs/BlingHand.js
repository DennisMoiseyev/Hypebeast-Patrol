class BlingHand extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);//add object to the existing scene, displayList, updateList
        this.isFiring = false;  //track bling hand's firing stats
        this.sfxHand= scene.sound.add("bling"); //add bling sound effects
        
    }

    update(){

        //left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >=8){
                this.x -=3;
            } else if(keyRIGHT.isDown && this.x <= 578){
                this.x +=2;
            }
        }

        
        //fire button (Not Spacebar)
        //waits for player to take finger off the button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxHand.play(); //play bling sound effects for the hand
        }

        // Once fired, hand has left right controls to move up and side to side (10)
        if(this.isFiring && this.y >= 108){
            this.y -=3;
            if(keyLEFT.isDown && this.x >=10){
                this.x -=3;
            } else if(keyRIGHT.isDown && this.x <= 578){
                this.x +=2;
            }
        }

        //reset on miss
        if(this.y <=108){
            this.isFiring = false;
            this.y = 420;
        }
    }

    reset(){
        //reset hand to the ground
        this.isFiring = false;
        this.y = 420;
    }
}