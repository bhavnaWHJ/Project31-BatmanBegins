class Umbrella{
    constructor(x,y){
        var options =  {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,20,60,options);
       
        this.boy = loadAnimation("images/Walking Frame/walking_1.png")
        World.add(world,this.body);
        

    }

    display(){
        boyUmbrella = createSprite(this.body.position.x,this.body.position.y,20,60);
        boyUmbrella.addAnimation("frame",this.boy);


        
        
    }
}