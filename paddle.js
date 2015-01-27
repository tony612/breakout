function Paddle() {
  Entity.call(this);

  var width = 120;
  this.width = 120;
  this.height = 20;

  this.x = game.width / 2 - width / 2;
  this.y = game.height - 5 * this.height;
}

Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;
