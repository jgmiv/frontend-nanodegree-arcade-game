var Tile_Width = 101;
    Tile_Height = 77;  

var Character = function ()  {
    "use strict";
    this.reset();

};

Character.prototype.render = function () {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Enemy = function () {
    "use strict";
    Character.call(this);
    this.sprite = 'images/enemies/enemy-bug.png';
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    "use strict";
    this.x = this.x + this.speed;
    this.y = Tile_Height * (this.row - 0.25);
    if (this.x > 505) {
        this.reset();
    }

    if (player.row === this.row && (player.x >= this.x && player.x <= (this.x + Tile_Width))) {
        player.reset();
        this.reset();
    }

};

Enemy.prototype.reset = function () {
    "use strict";
    this.col = -2;
    this.row = getRandomIntInclusive(1, 3);
    this.x = Tile_Width * this.col;
    this.y = Tile_Height * this.row;
    this.speed = getRandomIntInclusive(1, 6); 
     
};


var allEnemies = []; 
    for (var i = 0; i < 4; i++) {
        allEnemies.push(new Enemy () );
}

// Draw the enemy on the screen, required method for game

// Now write your own player class
// This class requires an update(), render() and

function Player() {
    "use strict";
    Character.call(this);
    this.moveable = true;
    this.sprite = 'images/char-boy.png';
    
}

Player.prototype = Object.create (Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    "use strict";
    if (this.moveable) {
    this.x = Tile_Width * this.col;
    this.y = Tile_Height * this.row;

    }
    if (this.y < Tile_Height && this.moveable) {
        this.moveable = false;
        return true;
    }
   
};


Player.prototype.reset = function() {
    "use strict";
    this.col = 2;
    this.row = 5;
    this.moveable = true;

};

var player = new Player();

// Place the player object in a variable called player

Player.prototype.handleInput = function(key) {
    "use strict";
    switch (key) {

        case "left" : this.col--;
        break;

        case "right" : this.col++;
        break;

        case "up" : this.row--;
        break;
        
        case "down" : this.row++;
        break;

    }

    if (this.col < 0) {
        this.col = 0;
    }
    if (this.col > 4) {
        this.col = 4;
    }
    if (this.row > 5) {
        this.row = 5;
    }
    //Player wins the game reset
    if (this.row < 0) {
        this.reset();
    }

};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
   
});

function getRandomIntInclusive(min, max) {
      "use strict";
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}
