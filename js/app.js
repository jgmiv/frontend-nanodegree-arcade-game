// Enemies our player must avoid
var Enemy = function(x, y, min, max) {
    this.width = 101
    this.height = 101
	this.x = x;
	this.y = Math.ceil(Math.random() * 4) * 83 - 83 * 0.3;
    // console.log(this.y);
	this.speed = Math.floor(Math.random() * (max - min + 1)) + min;
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
Enemy.prototype.update = function(dt, player) {
	this.x = this.x + (this.speed * dt);
    if (this.x > 505) {
        this.reset();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Enemy.prototype.reset = function (min, max) {
    this.x = Math.floor(Math.random() * (max - min + 1)) + min;
    speed = Math.floor(Math.random() * (max - min + 1)) + min;
    return speed;
    console.log(speed);
     
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy1 = new Enemy (-75, 30, 50, 100);
var enemy2 = new Enemy (-75, 40, 50, 100);
var enemy3 = new Enemy (-75, 10, 50, 100);
var enemy4 = new Enemy (-75, 20, 50, 100);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];


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
