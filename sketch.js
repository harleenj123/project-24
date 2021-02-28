
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,rubber; 

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(10,100); 
	stone = new Stone(30,50);
	rubber = new Rubber(100,300)


	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



