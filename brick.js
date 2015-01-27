function Brick(x, y, color) {
  Entity.call(this);

  this.x = x;
  this.y = y;
  this.color = color;

  this.width = Math.floor(game.width / 14);
  this.height = 20;
}

Brick.prototype = Object.create(Entity.prototype);
Brick.prototype.constructor = Brick;
