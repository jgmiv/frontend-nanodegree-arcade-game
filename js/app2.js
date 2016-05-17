// Enemies our player must avoid
var Tile_Width = 101;
	Tile_Height = 90;

var Character = function ()  {
    this.x = Tile_Width * this.col;
    this.y = Tile_Height * this.row;
}

Character.prototype.render = function () {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)

}

var Enemy = function () {
	new Character();
    this.col = -2;
    this.row = getRandomIntInclusive(2, 3);
	this.speed = getRandomIntInclusive(1, 6);
    this.path = 'images/enemies/';
    this.image = ['enemy-copia.png', 'enemy-bug.png'];
    this.value = Math.floor(Math.random() * ((0-3)+1) + 2);
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = this.path + this.image[this.value];

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	this.x = this.x + this.speed;
    this.y = (Tile_Height * this.row) - (Tile_Height/2);
    if (this.x > 505) {
        this.reset();
    }
    if (player.row === this.row && (player.x >= this.x && player.x <= (this.x + 101))) {
        player.reset();
        this.reset();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Enemy.prototype.reset = function () {
    this.row = getRandomIntInclusive(2, 3);
    this.x = 101 * this.col;
    this.y = (Tile_Height * this.row) - (Tile_Height/2);
    this.speed = getRandomIntInclusive(1, 6);
    this.path = 'images/enemies/';
    this.image = ['enemy-copia.png', 'enemy-bug.png'];
    this.value = Math.floor(Math.random() * ((0-3)+1) + 2);
    this.sprite = this.path + this.image[this.value];
     
};

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };


Enemy.prototype = new Character();

Enemy.prototype.constructor = Enemy;

var allEnemies = [];{
	for (var i = 0; i < 4; i++)
		allEnemies.push(new Enemy());
}

function getRandomIntInclusive(min, max) {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    var obj = Character();
    this.col = 2;
    this.row = 5;
	this.move = true;
    this.sprite = 'images/char-boy.png';
    
};

Player.prototype.update = function() {
    if (this.moveable) {
    this.x = 101 * this.col;
    this.y = 75 * this.row;

    }
    if (this.y < 75 && this.moveable) {
        this.moveable = false;
        return true;
    }
   
};


Player.prototype.reset = function() {
  	this.col = 2;
    this.row = 5;
    this.moveable = true;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player();

// Place the player object in a variable called player

Player.prototype.handleInput = function(key) {

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
    if (this.col < 0) this.col = 0;
    if (this.col > 4) this.col = 4;
    if (this.row > 5) this.row = 5;
    //Player wins the game reset
    if (this.row < 0) this.reset();

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

