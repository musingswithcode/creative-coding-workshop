function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  fill(131, 148, 150, 50);
	noStroke();

  noLoop();
}

function draw() {
	for (var x = 0; x < 20; x++) {
    scale(1.2);
    ellipse(0, 0, 50);
  }
}