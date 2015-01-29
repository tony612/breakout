function Brick(x, y, color) {
  Paddle.call(this);

  this.x = x;
  this.y = y;
  this.color = color;

  this.width = Math.floor(game.width / 14);
}

Brick.prototype = Object.create(Paddle.prototype);
Brick.prototype.constructor = Brick;

Brick.prototype.update = function() {
  var hit = Paddle.prototype.update.apply(this, arguments);

  var self = this;
  if (hit) {
    game.entities = game.entities.filter(function (el) {
      return el !== self;
    });
    self = null;
  }
};
