let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let xSpeed1 = 3;  // speed in X direction
let ySpeed1 = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball

let x2 = 10;     // x position of the ball
let y2 = 0;       // y position of the ball
let xSpeed2 = 3;  // speed in X direction
let ySpeed2 = 7; // speed in Y direction
let d2 = 50;      // diameter of the ball

let x3 = 200;     // x position of the ball
let y3 = 0;       // y position of the ball
let xSpeed3 = 3;  // speed in X direction
let ySpeed3 = 7; // speed in Y direction
let d3 = 50;      // diameter of the ball

function setup() {
  createCanvas(600, 600);
  textSize(60);
  fill(0);
}

function draw() {
  background(51); // try commenting this out!

  // if x hits the right side or the left side of the canvas,
  // switch directions...

  // first shape
  if (x1 > width || x1 < 0) {
    xSpeed1 = xSpeed1 * -1;  
  }
  x1 = x1 + xSpeed1; // adding a negative xSpeed *decreases* x, right?
  

  // second shape 
  if (x2 > width || x2 < 0) {
    xSpeed2 = xSpeed2 * -1;  
  }
  x2 = x2 + xSpeed2;

  //third shape 

  if (x3 > width || x3 < 0) {
    xSpeed3 = xSpeed3 * -1;  
  }
  x3 = x3 + xSpeed3;


  // same as above, but for the top and bottom of the canvas
  //first shape 
  if (y1 > width || y1 < 0) {
    ySpeed1 = ySpeed1 * -1;  
  }
  y1 = y1 + ySpeed1;


  // second shape 
  if (y2 > width || y2 < 0) {
    ySpeed2 = ySpeed2 * -1;  
  }
  y2 = y2 + ySpeed2;


  //third shape
  if (y3 > width || y3 < 0) {
    ySpeed3 = ySpeed3 * -1;  
  }
  y3 = y3 + ySpeed3;


  //first shape (color & shape)
  fill(252, 3, 211)
  ellipse(x1, y1, d1);

  //second shape (color & shape)
  fill(3, 252, 215)
  ellipse(x2, y2, d2);

  //third shape (color & shape)
  fill(64, 17, 56)
  ellipse(x3, y3, d3);
  
//mouse function
  fill (255, 255, 255)
  ellipse(mouseX, mouseY, 33, 33);


// keyboard funtion 
text(key, 20, 75); // Draw at coordinate (20,75)
}
