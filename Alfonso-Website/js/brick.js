
// variables for the canvas and ball.
var canvas = document.getElementById("brick");
canvas.style.background = "#272D2D";
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx= 2;
var dy = -2;
var ballRadius = 10;

// variables for the paddle.
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;


// variables for the bricks.
var brickRowCount = 5;
var brickColumnCount = 7;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// variable that holds the players score.
var score = 0;
var lives = 3;

var gameOverMenu = document.getElementById("gameOver");
var winner = document.getElementById("winner");

function drawBall() {
	// Draws a ball that moves around.
	ctx.beginPath()
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#85CB33";
	ctx.fill();
	ctx.closePath();

}

function drawPaddle() {
	// draws the paddle to hit the ball with.
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#85CB33";
	ctx.fill();
	ctx.closePath();
}


// This function makes it so the ball only bounces off its full size and not just its radius. It also makes it so the ball bounces off each side of the canvas.

function draw() {
	// Below are all the called functions inside of the main draw function.
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle="#272D2D";
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();
	x += dx;
	y += dy;
// makes it so the wall won't go off screen in the top, right and left sides

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
	dx = -dx;
}

if(y + dy < ballRadius) {
	dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
	if(x >paddleX && x < paddleX + paddleWidth){
		dy = -dy;
	}
	else {
	 lives--;
            if(!lives) {
               gameOverMenu.style.visibility = "visible";
                setTimeout(function () {
                location.reload(true); }, 2000);
               
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width-paddleWidth)/2;
                
            }
}


}

// insures that the paddle will not go off screen when moving left and right.

if(rightPressed && paddleX < canvas.width-paddleWidth) {
	paddleX += 7;
}
else if(leftPressed && paddleX > 0) { 
	paddleX -= 7;
}
// Allows the browser to choose the framerate for the ball being drawn.
}

setInterval(draw, 10);



// Listens for keypressed of left and right arrows for the paddle.
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	// checks if the left and right keys were pressed, if they were, return true, if not retrurn false.
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}


function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}


// Make a function that detects collision between the ball and the bricks
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            // If all the follwing below is true, the ball will bounce off in the opposite direction of the bricks it hits.
            if(b.status == 1) {
            	if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
             	b.status = 0;
             	score += 1;
             	// changed this from the tutorial I found(originally if the score was 15 it triggered). Now with some basic math it triggers when the score is 150, which is the max score.
             	if(score == brickRowCount*brickColumnCount) {
             		winner.style.visibility = "visible";
                setTimeout(function () {
                location.reload(true); }, 5000);
             		}
            	}
            }
        }
    }
}

// Displays the players current score.
function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#85CB33";
	ctx.fillText("Score: "+score, 8, 20);
}

// shows the players lives on the top right.
function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#85CB33";
	ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}





function drawBricks() {
	// draws the bricks and insures they are laid out rather then all places on top of each other in one spot.
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
        	if(bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#85CB33";
            ctx.fill();
            ctx.closePath();
        	}
        }
    }
}

// Reload function for the reload button.
function reload() {
	document.location.reload();
}

function displayMenu(menu) {
    menu.style.visibility = "visible";
}




// redraws the ball 
draw();







