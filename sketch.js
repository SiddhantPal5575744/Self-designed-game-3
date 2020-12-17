const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var input,button;

var Input,volcanoImg,titleImg,title
var gamestate="login";
var robot, robotImg,labImg,lab;
var mineImg,mine,teleportImg,teleport,insideMineImg,insideMine;
var teleportsound;
var g1,g2,b1,b2
var gImg1,gImg2,bImg1,bImg2;
var skyImg,sky;
var g1s,g2s,b1s,b2s;
var player;
var particles1=[]
var rockImg,lives=3,rockgroup,gameoverImg,gameover;


 








function preload(){
volcanoImg=loadImage("Volcano.png");
titleImg=loadImage("Title.png");
robotImg=loadImage("Robot.png");
labImg=loadImage("lab.png");
mineImg=loadImage("MineEntrance.png");
teleportImg=loadImage("teleport2.png")
teleportsound=loadSound("teleport.mp3")

gImg1=loadImage("Girl1.png");
gImg2=loadImage("Girl2.png");
bImg1=loadImage("Boy1.png");
bImg2=loadImage("Boy2.png");

skyImg=loadImage("sky.png");
insideMineImg=loadImage("insideMine.png");

rockImg=loadImage("stone.png");
gameoverImg=loadImage("gameover.png");


 }

 function setup(){
   textFont("cellestar");


     createCanvas(displayWidth,displayHeight);
     engine = Engine.create();
    world = engine.world;
    Input=new Form()
  

   //making backgrounds
 teleport=createSprite(displayWidth/2, displayHeight/2,displayWidth.displayHeight);
teleport.addImage(teleportImg);
teleport.visible=false;
teleport.scale=1.5;

lab=createSprite(displayWidth/2,displayHeight/2);
lab.addImage(labImg);
lab.scale=2.4;


sky=createSprite(displayWidth/2,displayHeight/2-150);
sky.addImage(skyImg);
sky.visible=false;
sky.scale=4;

mine=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
mine.addImage(mineImg);
mine.scale=1.72;
mine.visible=false;

insideMine=createSprite(displayWidth/2,displayHeight/2);
insideMine.addImage(insideMineImg);
insideMine.visible=false;
insideMine.scale=2.5;



   //creating buttons for selecting character
   g1s=createButton('select');
   g1s.position(displayWidth/2-230,displayHeight/2+290);
   g1s.mousePressed(characterg1);
   g1s.hide();
  
   g2s=createButton('select');
   g2s.position(displayWidth/2-130,displayHeight/2+290);
   g2s.mousePressed(characterg2);
   g2s.hide();
  
   b1s=createButton('select');
   b1s.position(displayWidth/2+170,displayHeight/2+290);
   b1s.mousePressed(characterb1);
   b1s.hide();
   
   b2s=createButton('select');
   b2s.position(displayWidth/2+270,displayHeight/2+290);
   b2s.mousePressed(characterb2);
   b2s.hide();
 


   //journey title
title=createSprite(displayWidth/2+50, 100);
title.addImage(titleImg);

//character choosing sprites
g1=createSprite(displayWidth/2-200,displayHeight/2+230);
g1.addImage(gImg1);
g1.visible=false;
g1.scale=0.3;

g2=createSprite(displayWidth/2-100,displayHeight/2+230);
g2.addImage(gImg2);
g2.visible=false;
g2.scale=0.3;

b1=createSprite(displayWidth/2+200,displayHeight/2+230);
b1.addImage(bImg1);
b1.visible=false;
b1.scale=0.3;


b2=createSprite(displayWidth/2+300,displayHeight/2+230);
b2.addImage(bImg2);
b2.visible=false;
b2.scale=0.3;


//min players
robot=createSprite(displayWidth/2-300, 550);
robot.addImage(robotImg);
robot.scale=2.2;

player=createSprite(displayWidth/2-100, 550);
 player.visible=false;
 player.scale=0.4

  rockgroup=createGroup();

  gameover=createSprite(displayWidth/2-200,displayHeight/2,10,10);
  gameover.addImage(gameoverImg);
  gameover.visible=false;




 

 }

 function draw(){
   background(volcanoImg);
  Engine.update(engine);
   console.log(gamestate);
   console.log(lives);


  if(gamestate==="login"){
    robot.visible=false;
    lab.visible=false;
    title.visible=true;
     
   

  }
 

if(gamestate==="lobby"){
   lab.visible=true;
   volcanoImg.visible=false;
 
    title.visible=false;
   robot.visible=true;
   
   


   if(keyDown('space')){
     gamestate="character pick";
   }
}

if(gamestate==="character pick"){
  sky.visible=true;
  g1.visible=true;
  g2.visible=true;
  b1.visible=true;
  b2.visible=true;
  lab.visible=false;
  robot.visible=false;
  g1s.show();
  g2s.show();
  b1s.show();
  b2s.show();
}
if(gamestate==="teleport"){
  teleport.visible=true;
  lab.visible=false;
  robot.visible=false;
   setTimeout(mineEntrance,1000);
   
  teleportsound.play();
  

}

if(gamestate==='mineEntrance'){
 mine.visible=true;
  teleportsound.stop();
  teleport.visible=false;
  

  robot.visible=true;
  player.visible=true;

  robot.depth=mine.depth+1;
  player.depth=mine.depth+1;

setTimeout(minechanger,2000)
   
  
}

if(gamestate==="insidemine"){
  insideMine.visible=true;
  mine.visible=false;
  setTimeout(landslidechanger,2000)

  }

  if(gamestate==="landslide"){
    
    
    effectlandslide();
    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+4;
    }
    if(keyDown("LEFT_ARROW")){
      player.x=player.x-4;
    }

    if(player.isTouching(rockgroup)){
      lives=lives-1;

    }

    if(lives<=0){
      console.log("dead");
      gamestate='buried in landslide';
    }
    setTimeout(intoTheHole,5000);
  }

  if(gamestate==="buried in landslide"){
   player.rotationSpeed=10;
   gameover.visible=true;
 setTimeout(mineEntrance,4000);
  
}

if(gamestate==="inHole"){
  
  insideMine.visible=true;
  

  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+4;
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-4;
  }
 
}


 



Input.display();
title.display();
drawSprites();
 }

 

//chosen character functions 
 function characterg1(){
   g1.visible=false;
   g2.visible=false;
   b1.visible=false;
   b2.visible=false;
   sky.visible=false;
   g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
   gamestate="teleport";
   player.addImage(gImg1);

   }

   function characterg2(){
    g1.visible=false;
    g2.visible=false;
    b1.visible=false;
    b2.visible=false;
    sky.visible=false;
    g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
    gamestate="teleport";
    player.addImage(gImg2);
 
    }

    function characterb1(){
      g1.visible=false;
      g2.visible=false;
      b1.visible=false;
      b2.visible=false;
      sky.visible=false;
      g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
      gamestate="teleport";
      player.addImage(bImg1);
   
      }

      function characterb2(){
        g1.visible=false;
        g2.visible=false;
        b1.visible=false;
        b2.visible=false;
        sky.visible=false;
        g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
        gamestate="teleport";
        player.addImage(bImg2);
     
        }


  //switching gamestate functions
   function mineEntrance(){
    
      gamestate=  'mineEntrance';
      player.rotationSpeed=0;
      gameover.visible=false;
      insideMine.visible=false;
     }

   function minechanger(){
     gamestate="insidemine";
   }

   function landslidechanger(){
     gamestate="landslide";
 
   }

   // landslide effect
   function effectlandslide(){
     if(frameCount%10===0){
       var rocks=createSprite(random(0,displayWidth),0,10,10);
       rocks.addImage(rockImg);
       rocks.scale=0.1;
       rocks.velocityY=8;
       rocks.lifetime=displayWidth/8+30;
       rockgroup.add(rocks);

     }

     }

     function intoTheHole(){
       gamestate="inHole";
       insideMine.visible=false;
       rockgroup.visible=false;
    }

  

 

 