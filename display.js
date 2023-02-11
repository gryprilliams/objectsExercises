//setting properties for abomination object (it's a red circle)
let abomination = {
    width: 60,
    height: 60,
    color: '#FF0000',
    x: 400,
    y: 400,
 };

//creating the canvas
 var canvas = document.createElement('canvas');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 document.body.appendChild(canvas);
 //allowing objects to be drawn on the canvas
 var object = canvas.getContext('2d');
 
 //drawing the abomination
 function drawAbomination(abomination) {
     object.fillStyle = abomination.color;
     object.beginPath();
     object.arc(abomination.x, abomination.y, abomination.width/2, 0, 2 * Math.PI);
     object.fill();
 }
 //calling the draw function
 drawAbomination(abomination);