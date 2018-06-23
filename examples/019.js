// Transforms: translate, rotate & scale.

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(131, 148, 150);
  stroke(7, 54,  66);
  strokeWeight(2);

  angleMode(DEGREES);
}

function draw() {
  background(238, 232, 213);

  // translate(300, 300);
  // rotate(30);
  // scale(2);

  drawGrid();

  rect(40, 40, 100, 200);
}

function drawGrid() {
  push();

  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 20) {
      noFill();
      stroke(147, 161, 161);
      strokeWeight(1);
      line(x, -height, x, height);
      line(-x, -height, -x, height);
      line(-width, y, width, y);
      line(-width, -y, width, -y);
    }
  }

  stroke(7, 54,  66);
  strokeWeight(2);
  line(0, 0, width, 0);
  line(0, 0, 0, height);

  textAlign(CENTER);
  text("(0, 0)", 20, 20);
  pop();
}