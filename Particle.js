class Particle{
constructor(x,y,r){

    var options ={
        restitution:0.4

}
this.x = x
this.y =y
this.r = r
this.body = Bodies.circle(x,y,this.r/2,options)
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body)

}
display(){

    var pos=this.body.position
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle)

    noStroke();
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(this.x,this.y,this.r,this.r)
    pop();
}
}