// Type a key.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(238, 232, 213);

  textSize(120);
  textAlign(CENTER);
  fill(7, 54, 66);

  if (keyIsPressed) {
    text(key, width/2, height/2);
  }
}