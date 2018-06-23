// Circle moving across the screen.

// Create a variable to store
// the position of the circle.
var circleX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);
}

function draw() {
  background(238, 232, 213);

  // Draw the circle using the circleX
  // variable for it's X position.
  ellipse(circleX, height/2, 200);

  // Update circleX for the next frame.
  circleX = circleX + 5;
}