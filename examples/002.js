function setup() {
  createCanvas(windowWidth, windowHeight);

  background("lightgray");
  fill(0, 102);
  noStroke();
}

function draw() {
	ellipse(mouseX, mouseY, 20);
}