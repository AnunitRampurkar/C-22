
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

var ground, ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_option = {
    isStatic: true
  }

  var ball_option = {
    restitution: 1.5
  }
  ground = Bodies.rectangle(200, 390, 400, 10, ground_option);
  World.add(myWorld, ground);

  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(myWorld, ball);

  console.log(ball);

}

function draw() {
  background(0);

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}