// Order of transforms.

var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);

  angleMode(DEGREES);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-50, -50, 100, 100);

  angle += 1;
}