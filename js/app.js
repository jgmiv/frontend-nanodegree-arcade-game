// Enemies our player must avoid
var Enemy = function(x, y, min, max) {
    this.width = 101
    this.height = 101
	this.x = -101;
	this.y = Math.ceil(Math.random() * 5) * 83 - 83 * 0.3;
	this.speed = Math.floor(Math.random() * (max - min + 1)) + min;
    this.path = 'images/enemies/';
    this.image = ['enemy-copia.png', 'enemy-bug.png'];
    this.value = Math.floor(Math.random() * ((0-2)+1) + 2);
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = this.path + this.value + '.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, player) {
	this.x = this.x + (this.speed * dt);
    if (this.x > 505) {
        this.reset();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Enemy.prototype.reset = function getRandomIntInclusive(min, max) {
    this.x = Math.floor(Math.random() * (max - min + 1)) + min;
    speed = Math.floor(Math.random() * (max - min + 1)) + min;
    return speed;
     
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var copia1 = new Enemy (50, 300);
var copia2 = new Enemy (50, 300);
var copia3 = new Enemy (50, 300);
var copia4 = new Enemy (50, 300);

var allEnemies = [copia1, copia2, copia3, copia4];


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.move = speed;
    this.sprite = 'images/char-boy.png';
    
};

Player.prototype.update = function() {
    // this.x = this.x + (this.speed * dt);
    if (this.y < 50) {
        this.reset();
    }
};


Player.prototype.reset = function() {


};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player(200, 350,  70);

// Place the player object in a variable called player



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

    // switch (input) {
    //   case 'up':
    //     if (this.y > 0){
    //         this.y -= 83px;
    //     }
    //     break;

    //   case 'down':
    //     if (this.y < 505) {
    //         this.y += 83px;
    //     }
    //     break;

    //   case 'right': 
    //     if (this.x > 0) {
    //         this.x -= 101px;
    //     } 
    //     break;

    //   case 'left':
    //     if (this.x < 505) {
    //         this.x += 101px;
    //     }
    //     break;

    // };
});
