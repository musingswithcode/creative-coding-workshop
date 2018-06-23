// Making shapes tranparent.

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(238, 232, 213);

	// Red circle
  fill(255, 0, 0, 120);
  ellipse(300, 150, 200, 200);

  // Green circle
  fill(0, 255, 0, 120);
  ellipse(400, 150, 200, 200);

  // Blue circle
  fill(0, 0, 255, 120);
  ellipse(350, 250, 200, 200);
}