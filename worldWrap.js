//setting object "ball"'s properties
let ball = {
    x: 50,
    y: 300,
    size: 100,
    color: '#FA0000',
    velocity: 5
};
//creating a canvas
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
//allowing objects to be drawn on the canvas
var object = canvas.getContext('2d');

//drawing the ball
function draw() {
    object.clearRect(0, 0, canvas.width, canvas.height);
    object.fillStyle = ball.color;
    object.beginPath();
    object.arc(ball.x, ball.y, ball.size / 2, 0, 2 * Math.PI);
    object.fill();
//moving the ball to the right
    ball.x += ball.velocity;
//resetting ball's position when it reaches the right of the canvas
    if (ball.x > 750) {
        ball.x = 50;
    }
}
//calling my draw function
setInterval(draw, 16);