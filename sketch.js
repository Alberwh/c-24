
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObj;
var groundObj;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperObj = new Paper(100,600,10)
  
   groundObj = new Ground(400,680,800,20)
   dustbin1 = new dustbin(550,620,20,100)
   dustbin2 = new dustbin(610,660,100,20)
   dustbin3 = new dustbin(670,620,20,100)
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  paperObj.display();
  groundObj.display();
  dustbin1.display();
  dustbin2.display(); 
  dustbin3.display();
  drawSprites();
 
}
 function keyPressed(){
	 if (keyCode === 32){
		 Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:15,y:-15})
	 }
 }