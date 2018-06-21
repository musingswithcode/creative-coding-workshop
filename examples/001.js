var gridSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill("black");
  stroke("white");
}

function draw() {
  background("lightgray");

  for (var y = 0; y < height; y += gridSize) {
    for (var x = 0; x < width; x += gridSize) {
      ellipse(x, y, 4);
      line(x, y, mouseX, mouseY);
    }
  }
}