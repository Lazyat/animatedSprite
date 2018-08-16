var spritesheet;
var spritedata;
var animation = [];
var rats = [];
var nbTotal = 7;

function preload() {
  spritedata = loadJSON('res/rat3.json');
  spritesheet = loadImage('res/ratAndBatSpritesheetCalciumtrice.png');
}

function setup() {
  createCanvas(300, 200);

  var frames = spritedata.frames;
  for (var i = 0; i < frames.length; i++) {
    var pos = frames[i].position;
    var img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (var i = 0; i < nbTotal; i++) {
    rats[i] = new Sprite(animation, random(0.3, 0.7), width, random(height-32));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < nbTotal; i++) {
    rats[i].show();
    rats[i].animate();
  }
}
