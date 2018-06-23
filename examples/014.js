function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  stroke(7, 54, 66);
  strokeWeight(5);
}

function draw() {
  line(0, 0, mouseX, mouseY);
}