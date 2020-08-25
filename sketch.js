
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	dustbinObj=new Dustbin(1200,650);
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();


  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-90});
	}
}

