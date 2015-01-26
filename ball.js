function Ball() {
  Entity.call(this);

  this.width = 20;
  this.height = 20;

  this.x = game.width / 2;
  this.y = game.height - 6 * this.height;

  this.yVelocity = -10;
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);


};
