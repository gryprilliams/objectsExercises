//setting properties for both rectangles
let rectangle1 = {
    x: 100,
    y: 100,
    width: 25,
    height: 100
};

let rectangle2 = {
    x: window.innerWidth - 100,
    y: 100,
    width: 25,
    height: 100
};
//creating the canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
//allowing objects to be drawn on the canvas
var object = canvas.getContext('2d');
//drawing the rectangles
function drawRectangles(rectangle1, rectangle2) {
    object.clearRect(0, 0, canvas.width, canvas.height);
    object.fillRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
    object.fillRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);
}
//setting the movement of the rectangles
document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowUp") {
        rectangle1.y = rectangle1.y - 10;
        rectangle2.y = rectangle2.y + 10;
    } else if (event.code === "ArrowDown") {
        rectangle1.y = rectangle1.y + 10;
        rectangle2.y = rectangle2.y - 10;
    }
    //calling the draw function when up or down is pressed
    drawRectangles(rectangle1, rectangle2);
});



