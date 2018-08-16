function Sprite(animation, speed, x, y) {
  this.x = x;
  this.y = y;
  this.animation = animation;
  this.speed = speed;
  this.index = 0;
  this.len = this.animation.length;
  
  this.show = function() {
    var index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  this.animate = function() {
    this.index += this.speed;
    this.x -= this.speed;
    if (this.x < 0) {
      this.x = width + this.animation[0].width;
    }
  }
}
