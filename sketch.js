
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
	var binSprite = createSprite(650,550,140,50);
	binSprite.shapeColor= color("brown");
	var DbinSprite = createSprite(580,570,23,130) ;
	var dbinSprite = createSprite(720,570,23,130);

	paper= new Paperclass(100,350,25);
	bin =  new Dustbin(650,570,140,20);
	Dbin=  new Dustbin(580,570,20,100);
	dbin=  new Dustbin(720,570,20,100);

	var groundSprite=createSprite(400, 640, 800,120);
	groundSprite.shapeColor=color(200);
	var ground= Bodies.rectangle(400,650,800,100,{isStatic:true});
	World.add(world, ground);

   Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
	paper.display(); 
	Dbin.display(); 
	dbin.display();
	bin.display ();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-180})
	}
}



