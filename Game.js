//craete the game class
class Game 
{

  //craete the constructor function
  constructor()
  {

  }

  //create a function to get the game state in database
  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
    {
       gameState = data.val();
    })

  }


  //create a function to update the game state in database
  update(state)
  {
    database.ref('/').update(
      {
      gameState: state
    });
  }


  //create a function to start the game.
  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

   //create all the players,obstacles . give them color and add the image



     player1 = createSprite(200,195,30,30);
    player1.shapeColor = "blue";
    //car1.addImage("car1" , car1_Img);


     player2 = createSprite(200,315,30,30);
    player2.shapeColor = "pink";
   // car2.addImage("car2" , car2_Img);
    

    player3 = createSprite(200,435,30,30);
    player3.shapeColor = "green";
    //car3.addImage("car3" , car3_Img);

     player4 = createSprite(200,555,30,30);
    player4.shapeColor = "red";
   // car4.addImage("car4" , car4_Img);

    cars = [player1, player2, player3, player4];

    obstacle1 = createSprite(3000,205,20,20);
    obstacle2 = createSprite(4000,205,20,20);
    obstacle3 = createSprite(5000,205,20,20);
    obstacle4 = createSprite(3000,325,20,20);
    obstacle5 = createSprite(4000,325,20,20);
    obstacle6 = createSprite(5000,325,20,20);
    obstacle7 = createSprite(3000,445,20,20);
    obstacle8 = createSprite(4000,445,20,20);
    obstacle9 = createSprite(5000,445,20,20);
    obstacle10 = createSprite(3000,565,20,20);
    obstacle11 = createSprite(4000,565,20,20);
    obstacle12 = createSprite(5000,565,20,20);


    obstacle1.shapeColor = "pink";
    obstacle2.shapeColor = "pink";
    obstacle3.shapeColor = "pink";
    obstacle4.shapeColor = "pink";
    obstacle5.shapeColor = "pink";
    obstacle6.shapeColor = "pink";
    obstacle7.shapeColor = "pink";
    obstacle8.shapeColor = "pink";
    obstacle9.shapeColor = "pink";
    obstacle10.shapeColor = "pink";
    obstacle11.shapeColor = "pink";
    obstacle12.shapeColor = "pink";

    obstacle1.addImage("obstacle1",obs1Img);
    obstacle2.addImage("obstacle2",obs2Img);
    obstacle3.addImage("obstacle3",obs3Img);
    obstacle4.addImage("obstacle4",obs4Img);
    obstacle5.addImage("obstacle5",obs5Img);
    obstacle6.addImage("obstacle6",obs6Img);
    obstacle7.addImage("obstacle7",obs7Img);
    obstacle8.addImage("obstacle8",obs8Img);
    obstacle9.addImage("obstacle9",obs9Img);
    obstacle10.addImage("obstacle10",obs10Img);
    obstacle11.addImage("obstacle11",obs11Img);
    obstacle12.addImage("obstacle12",obs12Img);

    obstacle1.scale = 0.5;
    obstacle2.scale = 0.5;
    obstacle3.scale = 0.5;
    obstacle4.scale = 0.5;
    obstacle5.scale = 0.5;
    obstacle6.scale = 0.5;
    obstacle7.scale = 0.5;
    obstacle8.scale = 0.5;
    obstacle9.scale = 0.5;
    obstacle10.scale = 0.5;
    obstacle11.scale = 0.5;
    obstacle12.scale = 0.5;
    
  }


  //craete the play function
  play()
  {
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined)
    {

      //give color to the background by using hexadecimal number
      background("white");

      

      // //add image to the background
      // rotate(90);
      // rect(0,0,180,180);
     // image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the players
      var x ;
      var y = 45;

      for(var plr in allPlayers)
      {
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the playes a little away from each other in x direction
        y = y + 120;
        //use data form the database to display the players in y direction
        x = displayWidth + allPlayers[plr].distance;
        console.log(allPlayers[plr].distance);
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index)
        {
          cars[index - 1].shapeColor = "black";
          camera.position.x = cars[index-1].x
          camera.position.y = displayHeight/2;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null)
    {
      player.distance +=10
      player.update();
    }

    //change the game state to 2
    if(player.distance > 4300)
    {
       gameState = 2;

    }

    // if(keyDown(32))
    // {
    //   space = true;
    //   up = true;

    // }

    // if(space === true)
    // {

      
      
    //   if(up === true)
    //   {
    //     if(jump>-20)
    //     {
    //       jump = jump-5;
    //     }else
    //     {
    //       up = false;
  
    //     }

    //   } 

    // } else 
    // {

    //   if(jump<0)
    //   {
    //     jump = jump + 5;
    //   } else  
    //   {
    //    space = false;

    //   }
    // }

    // cars[0].y = cars[0].y+ jump;

    
    drawSprites();
  }

  //create the end function
  end()
  {
  console.log("Game Ended");
   game.update(2);

  }
}
