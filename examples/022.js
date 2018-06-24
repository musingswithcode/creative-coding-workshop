// A fractal tree.

var angle = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(238, 232, 213);

  stroke(7, 54, 66);
  strokeWeight(2);

  angleMode(DEGREES);

  noLoop();
}

function draw() {
  translate(width/2, height);
  branch(200);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);

  if (length > 5) {
    // Right branch
    push();
      rotate(angle);
      branch(length * 0.67);
    pop();

     // Left branch
    push();
      rotate(-angle);
      branch(length * 0.67);
    pop();
  }
}