var game = new Game($('canvas')[0]);

var x, y, color, bricks = [],
    height = 20, width = Math.floor(game.width / 14),
    colors = ['#FF4136', '#FF851B', '#FFDC00', '#01FF70', '#7FDBFF', '#0074D9', '#B10DC9', '#B21488'];
for (var i = 0; i < 8; i++) {
  y = 30 + i * height;
  for (var j = 0; j < 14; j++) {
    x = j * width;
    console.log(x);
    var brick = new Brick(x, y, colors[i]);
    bricks.push(brick);
  }
}

game.bricks = bricks;

game.entities = [
  game.ball = new Ball(),
  game.paddle = new Paddle()
].concat(bricks);

game.start();

$('canvas')[0].focus();
