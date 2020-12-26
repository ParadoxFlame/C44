var back1, back2, back3, track1, track2, track3
var player, playerCar, playerSprite
var zombieMove, zombieIdle;
var zombieGroup;
var score, coin, coinSprite;
var gameState="level1";
var back;
var count=0;
var levelComplete, levelFailed, levelSprite;
function preload()
{
  track1 = loadImage("Images/desertroadOFFICIAL.png");
  track2 = loadImage("Images/map1OFFICIAL.png");
  //track3 = loadImage("Images/track.jpg");
  playerCar = loadImage("Images/carOfficial.png");
  
  /*playerSprite=loadAnimation("Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_0.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_1.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_2.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_3.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_4.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_3.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_5.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_6.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_7.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_8.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_9.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_10.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_11.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_13.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_14.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_15.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_16.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_17.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_18.png",				
"Images/playerOFFICIAL/knife/meleeattack/survivor-meleeattack_knife_19.png");*/

  zombieMove = loadAnimation("Images/zombieOFFICIAL/Move/skeleton-move_0.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_1.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_2.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_3.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_4.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_5.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_6.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_7.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_8.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_9.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_10.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_11.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_12.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_13.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_14.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_15.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_16.png")

  zombieIdle = loadAnimation("Images/zombieOFFICIAL/idle/skeleton-idle_0.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_1.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_2.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_3.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_4.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_5.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_6.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_7.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_8.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_9.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_10.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_11.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_12.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_13.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_14.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_15.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_16.png")

  coin = loadAnimation("Images/ScoreOFFICIAL/Coin1.png",
  "Images/ScoreOFFICIAL/Coin2.png",
  "Images/ScoreOFFICIAL/Coin3.png",
  "Images/ScoreOFFICIAL/Coin4.png",
  "Images/ScoreOFFICIAL/Coin5.png",
  "Images/ScoreOFFICIAL/Coin6.png",
  "Images/ScoreOFFICIAL/Coin1.png")

  levelComplete = loadImage("Images/levelCompleteScreenOFFICIAL.png");

 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  score = 0
  //console.log("in setup:"+windowWidth/2+","+windowHeight)
  back1 = createSprite(windowWidth/2, windowHeight, 1000,500);
  back1.addImage("track1",track1);
  back1.addImage("track2",track2);
  back1.scale = 0.9;

  player = createSprite(windowWidth/2, windowHeight/2+4200,20,50);
  player.addImage("player_driving", playerCar);
  player.scale = 0.05;
  zombieGroup= new Group();

  

  spawnZombies();
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  camera.position.x=windowWidth/2;
  camera.position.y=player.y;

 drawSprites();
  
  if(gameState === "level1")
  {
    back1.changeImage("track1",track1);

   
    if(keyDown(UP_ARROW))
    {
      player.y = player.y - 10;
      //player.changeImage("")
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }


  
    for(var i=0;i<zombieGroup.length;i++)
    {
      if(zombieGroup.get(i).isTouching(player))
      {
        zombieGroup.get(i).destroy();
        score = score + 10
  
      }   
      }
      for(var i=0;i<zombieGroup.length;i++)
      {
        if(zombieGroup.length >0 )
        {
          if(player.y-zombieGroup.get(i).y < 300)
          {
          
            zombieGroup.get(i).changeAnimation("moving", zombieMove);
            zombieGroup.get(i).velocityY = 3; 
          }
      }

      if(gameState === "level2")
      {
        zombieGroup.get(i).destroy();
      }
    }
    //console.log(player.y);
    if(player.y < -2750)
    {
      console.log(player.y)
      //gameState= "level2";

      camera.position.x=windowWidth/2;
      camera.position.y=-2750;

      levelSprite = createSprite(windowWidth/2, -2750);
      levelSprite.addImage("Level Passed", levelComplete);
      levelSprite.scale = 0.5
  
    }
  }
  else if(gameState === "level2")
  {

    back1.changeImage("track2",track2);
    
    text("i am in level2")
    back1.scale = 1.1;

    if(keyDown(UP_ARROW))
    {
      console.log("UP Pressed")
      player.y = player.y - 300;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }

    if(keyDown(DOWN_ARROW))
    {
      player.y = player.y + 5;
    }
  }
  

 
  /*coinSprite = createSprite(camera.position.x - 500, camera.position.y - 400);
  coinSprite.addAnimation("coin image", coin);*/

  fill("white");
  textSize(20);
  text("Score: " + score, camera.position.x - 450, camera.position.y - 395);
 
}
function controlPlayer()
{
  if(keyDown(UP_ARROW))
    {
      player.y = player.y - 10;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }
  
}
function spawnZombies() 
{
  for (var i=0; i<100; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2-100,windowWidth/2+100)),Math.round(random(-2500, 4000)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
	  zombie.scale = 0.3;
	
	  //add each zombie to the group
	  zombieGroup.add(zombie);
  }
}