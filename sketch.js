
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binLeft = new Bin (680,600,5,50);
	binRight = new Bin (740,600,5,50);
	binBase = new Bin(710,622,55,5);

	ground = new Ground ();

	paper = new CrumpledPaper(100,100,70,70);



	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background("grey");
  binLeft.display();
  binRight.display();
  binBase.display();

  paper.display();

  ground.display();

 
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (paper.body,paper.body.position,{x:805,y:-805})
	}
}

