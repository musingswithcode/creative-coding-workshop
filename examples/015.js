// Follow the mouse, part 2.

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  stroke(7, 54, 66, 102);
  strokeWeight(5);
}

function draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}