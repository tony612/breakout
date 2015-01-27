function Entity() {
  this.x = 0;
  this.y = 0;

  this.width = 0;
  this.height = 0;

  this.xVelocity = 0;
  this.yVelocity = 0;

  this.color = '#fff';
}

Entity.prototype.update = function(percentage) {
  if (!percentage) percentage = 1;
  this.x += this.xVelocity * percentage;
  this.y += this.yVelocity * percentage;
};

Entity.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
};

Entity.prototype.intersect = function(other) {
  return this.y + this.height > other.y &&
  this.y               < other.y + other.height &&
  this.x + this.width  > other.x &&
  this.x               < other.x + other.width;
};
