// Move using the arrow keys.

var x, y;
var stepSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);

  x = width/2;
  y = height/2;
}

function draw() {
  background(238, 232, 213);

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x += stepSize;
    }
    if (keyCode == LEFT_ARROW) {
      x -= stepSize;
    }
    if (keyCode == DOWN_ARROW) {
      y += stepSize;
    }
    if (keyCode == UP_ARROW) {
      y -= stepSize;
    }
  }

  ellipse(x, y, 100);
}