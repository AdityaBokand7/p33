class Plinko{
    constructor(x,y,diameter) {
        var options = {
         restitution:0.8,
         density:1.2,
         friction:1.1,
            isStatic: true
        }
    
        this.diameter = diameter
this.bob=Bodies.circle(x,y,this.diameter/2,options)
World.add(world,this.bob)
    }
display(){
    var pos =this.bob.position;
   

    fill("white")
ellipse(RADIUS);
    ellipse(pos.x, pos.y, this.diameter,this.diameter);
  }
}



    
