class Yeezy extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);//add object to the existing scene, displayList, updateList
        this.points = pointValue;
        
    }

    update(){
        //update spaceship left
        this.x -= game.settings.yeezy_twoSpeed;
        //wraparound screen bounds
        if(this.x <= 0 -this.width){
            this.x = game.config.width;


        }
    } 

    reset(){
        this.x = game.config.width;
   }
}










