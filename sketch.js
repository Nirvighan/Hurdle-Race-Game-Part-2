//create all thye variables
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, player1, player2, player3, player4;
var obstacle1,obstacle2,obstacle3;
var obstacle4,obstacle5,obstacle6;
var obstacle7,obstacle8,obstacle9;
var obstacle10,obstacle11,obstacle12;

//create variables for the images
var track, car1_Img, car2_Img, car3_Img, car4_Img;

// var jump = 0;
// var up = false;
// var space = true;
var obs1Img;
var obs2Img;
var obs3Img;
var obs4Img;
var obs5Img;
var obs6Img;
var obs7Img;
var obs8Img;
var obs9Img;
var obs10Img;
var obs11Img;
var obs12Img;


function preload() {
  //load all the images
  
 // track = loadImage("images/track.jpg");
  //car1_Img = loadImage("images/car1.png");
 // car2_Img = loadImage("images/car2.png");
  //car3_Img = loadImage("images/car3.png");
  //car4_Img = loadImage("images/car4.png");
  obs1Img = loadImage("obs1.jpg");
  obs2Img = loadImage("obs1.jpg");
  obs3Img = loadImage("obs1.jpg");
  obs4Img = loadImage("obs1.jpg");
  obs5Img = loadImage("obs1.jpg");
  obs6Img = loadImage("obs1.jpg");
  obs7Img = loadImage("obs1.jpg");
  obs8Img = loadImage("obs1.jpg");
  obs9Img = loadImage("obs1.jpg");
  obs10Img = loadImage("obs1.jpg");
  obs11Img = loadImage("obs1.jpg");
  obs12Img = loadImage("obs1.jpg");

}





function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  //call the end function if gamestate is 2
  if (gameState === 2) {
    game.end();

  }
}