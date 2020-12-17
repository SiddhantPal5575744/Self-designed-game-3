class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color="blue";
        World.add(world, this.body);

    }

    reposition(){
        if(this.particle.position.y>height){
            Matter.body.setPosition(this.rain,{x:andom(50,550),y:random(50,550)})
        }
    }
    display() {

        var pos = this.body.position;
         

        push();
        translate(pos.x, pos.y);
       
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
     

    }

 

};