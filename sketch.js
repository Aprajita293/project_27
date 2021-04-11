
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(585,115,220,20)
    bob1=new Bob(500,300,40)
	bob2=new Bob(540,300,40)
	bob3=new Bob(580,300,40)
	bob4=new Bob(620,300,40)
	bob5=new Bob(660,300,40)
	
	rope1=new Rope(bob1.body,{x:500,y:115})
	rope2=new Rope(bob2.body,{x:540,y:115})
	rope3=new Rope(bob3.body,{x:580,y:115})
	rope4=new Rope(bob4.body,{x:620,y:115})
	rope5=new Rope(bob5.body,{x:660,y:115})

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  
 roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}
