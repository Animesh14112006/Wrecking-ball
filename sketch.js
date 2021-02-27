const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;


function setup() {
  createCanvas(1500,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600,1200,20)
  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x:500,y:50});
  box1 = new Blocks(900,100,70,70);
  box2 = new Blocks(900,100,70,70);
  box3 = new Blocks(800,100,70,70);
  box4 = new Blocks(800,100,70,70);
  box5 = new Blocks(800,100,70,70);
  box6 = new Blocks(800,100,70,70);
  box7 = new Blocks(800,100,70,70);
  box8 = new Blocks(800,100,70,70);
  box9 = new Blocks(800,100,70,70);
  box10 = new Blocks(800,100,70,70);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}