// Follow the mouse!

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);
}

function draw() {
  ellipse(mouseX, mouseY, 50);
}