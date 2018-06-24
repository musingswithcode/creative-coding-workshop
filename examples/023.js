var puppies;

function preload() {
  puppies = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basenji_puppies.jpg/640px-Basenji_puppies.jpg");
}

function setup() {
  createCanvas(puppies.width, puppies.height);
  pixelDensity(1);
  noLoop();
}

function draw() {
  image(puppies, 0, 0);

  loadPixels();
  for (var x = 0; x < puppies.width; x++) {
    for (var y = 0; y < puppies.height; y++) {
      var index = getIndex(x, y, puppies.width);
      var colorValue = getColor(index, pixels);
      var grayValue = (colorValue.r + colorValue.g + colorValue.b)/3;
      set(x, y, color(grayValue));
    }
  }
  updatePixels();
}

function getIndex(x, y, width) {
  return (y * width + x) * 4;
}

function getColor(index, pixelsArray) {
  return { r: pixelsArray[index + 0],
           g: pixelsArray[index + 1],
           b: pixelsArray[index + 2],
           a: pixelsArray[index + 3]
         };
}