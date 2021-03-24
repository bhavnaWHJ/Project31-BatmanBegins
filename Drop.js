class Drop{
    constructor(x,y){

        var options = {
            friction:0.001,
            restitution:0.1

        }

        this.rain = Bodies.circle(x,y,7,options);
        this.radius = 7;
        World.add(world,this.rain);
        
    }
    updateY(){

        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,600),y:random(0,600)})
        }
    }

    showDrop(){

        var pos = this.rain.position;

        ellipseMode(CENTER);
        fill('blue')
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}