const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particle;

var particles =[];
var plinkos = []
var divisions = [];
var divisionHeight =300;

var score = 0
var count = 0;
var gameState  = "start"
function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,width,10)


for (var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  

}
for(var j = 40;j<=width; j=j+50){
  plinkos.push(new Plinko(j,75,27))
}
for(var j = 15;j<=width-10;j=j+50) 
{
plinkos.push(new Plinko(j,175,27))
}
for(var  j= 40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275,27))
}
for(var j =15;j<width;j=j+50){
plinkos.push(new Plinko(j,375,27))

}


}
 
function draw() {
  background("black");  
  textSize(35)
  fill("white")
  text("score : " + score, 100, 40);

  textSize(23)
   text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

 
 
    Engine.update(engine);
  ground.display();

 

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
    
    }
   
  }
  function mousePressed(){
if(gameState!=="end"){
  count=count+1
  particle=new Particle(mouseX,10,10,10);
  particle = null;
}

  }
if(particle!=null){
  particle.display();
  if(particle.body.position.y>760)
  {
    if(particle.body.position.x<300)
    {
score = score+500
particle =null;

  }
}
}

