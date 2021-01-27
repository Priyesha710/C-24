
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var userEngine, userWorld;
var paperObject, dustbin, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100,200);
  
	var ground_options = {
		isStatic : true
	} 
	ground = Bodies.rectangle(400,695,800,10, ground_options);
	World.add(userWorld,ground);
	
	dustbin = new Dustbin(600,670,PI/256);
	Engine.run(userEngine);
  
}

function keyPressed(){
}
function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbin.display();
  //calling keyPressed
  keyPressed();
  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-15});
}

  //displaying ground
  fill("white");
  rect(ground.position.x,ground.position.y,800,10); 
}



