
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;
var ground1;
var paper2;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,680,800,10)
	paper1 = new Paper(100,100,20)
	dustbin1 = new Dustbin(700,670,100,10)
	dustbin2 = new Dustbin(650,620,10,100)
	dustbin3 = new Dustbin(750,620,10,100)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
  drawSprites();
 
  
  ground1.display()
  paper1.display()
  dustbin1.display()
//   dustbin2.display()
//   dustbin3.display()
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15, y:-20})
	}
}
