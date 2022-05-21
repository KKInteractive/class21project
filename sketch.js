const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, left, right, top_wall;
var ball;
var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  btn1 = createButton('1')
  btn1.position(100,30)
  btn1.size(30,20)
  btn1.mouseClicked(hForce)

  btn2 = createButton('2')
  btn2.position(130,30)
  btn2.size(30,20)
  btn2.mouseClicked(vForce)

  ground = new Ground(200, 390, 400,10);
  left = new Ground(10,200,10,400)
  right = new Ground(390, 200, 10,400)
  top_wall = new Ground(200,10,400,10)

  var options = {
    restitution:0.69

  }
  ball = Bodies.circle(100,200,20,options);
  World.add(world,ball)
 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);


  
}



function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  left.show()
  right.show()
  top_wall.show()

  ellipse(ball.position.x,ball.position.y,20)

  
}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05,y:0})
  
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0,y:0.05})
}

