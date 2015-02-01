function Brick(x, y, color) {
  Paddle.call(this);

  this.x = x;
  this.y = y;
  this.color = color;

  this.width = Math.floor(game.width / 14);
}

Brick.prototype = Object.create(Paddle.prototype);
Brick.prototype.constructor = Brick;
