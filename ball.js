function Ball() {
  Entity.call(this);

  var width = 20;
  this.width = width;
  this.height = width;

  this.x = game.width / 2 - width / 2;
  this.y = game.height - 6 * width;

  this.yVelocity = -10;
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);


};
