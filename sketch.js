const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var pig1;
var pig2;
var log1;
var log2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390, 1200, 20);

    box1 = new Box(700,320,70,70,"blue");
    box2 = new Box(920,320,70,70,"blue");
    box3 = new Box(700,240,70,70,"blue");
    box4 = new Box(920,240,70,70,"blue");
    box5 = new Box(810,160,70,70,"blue");
    pig1 = new Pig(810,350, "yellow");
    pig2 = new Pig(810,220, "yellow");
    log1 = new Log(810,260,300,"green", PI/2)
    log2 = new Log(810,180,300,"green", PI/2) 
    log3 = new Log(760,120,150,"green", PI/4)
    log4 = new Log(870,120,150,"green", -PI/4)

    bird = new Bird(100,100,"red");

}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display(); 
    log2.display();
    log3.display(); 
    log4.display();
    bird.display();
}
