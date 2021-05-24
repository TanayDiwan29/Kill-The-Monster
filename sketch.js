const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var world,engine;
var attempts=0;
var status="Not Defeated";

function preload() {
//preload the images here
  bg=loadImage("bg.png");
}

function setup() {
  //making the engine
  engine=Engine.create();

  //making the world
  world=engine.world;

  //the canvas 
  createCanvas(1200, 500);
  
  // create sprites here
  ground=new Ground(350,250,900,20);

  superman=new Superman(200,100,250,60);

  monster=new Monster(700,100,100,100);

  rope=new Rope(superman.body,{x:200,y:100});

  //first row
  b1=new Box(400,150);
  b4=new Box(400,150-40);
  b5=new Box(400,150-80);

  //second row
  b2=new Box(440,150);
  b6=new Box(440,150-40);
  b7=new Box(440,150-80);
  b8=new Box(440,150-120);

  //third row
  b3=new Box(480,150);
  b9=new Box(480,150-40);
  b10=new Box(480,150-80);
}

function draw() {
  background(bg);
  Engine.update(engine);

  textSize(20);
  text("Attempts : "+attempts,width-170,50);
  text("Status : "+status,width-200,80);

  if(monster.body.position.y>260){
    status="Defeated";
  }

  ground.display();

  superman.display();
  monster.display();
  rope.display();

  b1.display();
  b2.display();
  b3.display();

  b4.display();
  b5.display();
  b6.display();

  b7.display();
  b8.display();
  b9.display();
  b10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attempts=attempts+1;
  rope.fly();
}

function keyPressed(){
  if(keyCode===32){
    rope.attach(superman.body);
  }
}