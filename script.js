// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth; // Set canvas width to window width
canvas.height = window.innerHeight; // Set canvas height to window height
canvas.style.position = 'absolute'; // Position it absolutely
canvas.style.top = '0'; // Align to the top
canvas.style.left = '0'; // Align to the left
canvas.style.zIndex = '1000'; // Make sure it's on top
document.body.appendChild(canvas);

// Get the drawing context
const ctx = canvas.getContext('2d');

// Set a background color
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent white
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Function to draw an arrow
function drawArrow(x1, y1, x2, y2) {
    const headLength = 10; // Length of the arrow head
    const dx = x2 - x1; // Change in x
    const dy = y2 - y1; // Change in y
    const angle = Math.atan2(dy, dx); // Angle of the arrow

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 2; // Line width
    ctx.strokeStyle = 'black'; // Line color
    ctx.stroke();

    // Draw the arrow head
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLength * Math.cos(angle - Math.PI / 6), y2 - headLength * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - headLength * Math.cos(angle + Math.PI / 6), y2 - headLength * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(x2, y2);
    ctx.fillStyle = 'black'; // Arrow head color
    ctx.fill();
}

let startX, startY;
let isDrawing = true;


drawArrow(mouse.x, mouse.y, 200, 200);
