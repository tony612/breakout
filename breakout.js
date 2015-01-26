var game = new Game($('canvas')[0]);

game.entities = [
  game.ball = new Ball()
];

game.start();

$('canvas')[0].focus();
