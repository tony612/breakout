function Ball() {
  Entity.call(this);

  var width = 20;
  this.width = width;
  this.height = width;

  this.x = game.width / 2 - width / 2;
  this.y = game.height - 6 * width;

  var min = -3, max = 3;
  this.yVelocity = -10;
  this.xVelocity =  Math.floor(Math.random() * (max - min)) + min;
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);

  if (this.x <= 0 || this.x >= game.width) {
    this.xVelocity *= -1;
  }

  if (this.y <= 0) {
    this.yVelocity *= -1;
  }

  var hit = false, self = this;
  game.entities.forEach(function(entity) {
    if (!(entity instanceof Paddle)) { return; }
    if (self.intersect(entity)) {
      hit = true;
      if (!(entity instanceof Brick)) { return; }
      game.entities = game.entities.filter(function (el) {
        return el !== entity;
      });
      entity = null;
    }
  });

  if (self.intersect(game.player)) { hit = true; }

  if (hit) {
    this.yVelocity *= -1;
  }
};
