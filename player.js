function Player() {
  Paddle.call(this);
}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  Paddle.prototype.update.apply(this, arguments);

  if (game.keyPressed.left) {
    this.xVelocity = -10;
  } else if (game.keyPressed.right) {
    this.xVelocity = 10;
  } else {
    this.xVelocity = 0;
  }
};
