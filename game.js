function Game(canvas) {
  var self = this;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  this.context = canvas.getContext("2d");
  this.width = canvas.width;
  this.height = canvas.height;

  this.keyPressed = {};

  // Keep track of key states
  // Eg.:
  //   game.keyPressed.up === true  // while UP key is pressed
  //   game.keyPressed.up === false // when UP key is released
  $(canvas).on('keydown keyup', function(e) {
    var keyName = Game.keys[e.which];

    if (keyName) {
      // eg.: `self.keyPressed.up = true` on keydown
      // Will be set to `false` on keyup
      self.keyPressed[keyName] = e.type === 'keydown';
      e.preventDefault();
    }
  });

}

Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

Game.prototype.draw = function() {
  this.context.clearRect(0, 0, this.width, this.height);

  var self = this;
  this.entities.forEach(function(entity) {
    if (entity.draw) entity.draw(self.context);
  });
};

Game.prototype.update = function () {
  this.entities.forEach(function (entity) {
    if (entity.update) entity.update();
  });
};

var stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms

// align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

Game.prototype.start = function () {
  this.lastUpdateTime = new Date().getTime();

  var self = this;
  onFrame(function() {
    self.variableTimeStep();
  });
};

var onFrame = function (callback) {
  if (window.requestAnimationFrame) {
    requestAnimationFrame(function () {
      callback();

      onFrame(callback);
    });
  } else {
    var fps = 60;
    setInterval(callback, 1000 / fps);
  }
};

Game.prototype.variableTimeStep = function () {
  var currentTime = new Date().getTime(),
  fps = 60,
  interval = 1000 / fps,
  timeDelta = currentTime - this.lastUpdateTime,
  percentageOfInterval = timeDelta / interval;

  this.update(percentageOfInterval);
  stats.update();
  this.draw();

  this.lastUpdateTime = new Date().getTime();
};

Game.prototype.fixedTimeStep = function() {
  var fps = 60,
  interval = 1000 / fps,
  updated = false;

  // While we're not up to date ...
  while (this.lastUpdateTime < new Date().getTime()) {
    this.update();
    updated = true;
    // We jump at fixed intervals until we catch up to the current time.
    this.lastUpdateTime += interval;
  }

  // No need to draw if nothing was updated
  if (updated) {
    stats.update();
    this.draw();
  }
  updated = false;
};
