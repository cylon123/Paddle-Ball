const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height = window.innerHeight;
const canvasWidth = canvas.width = window.innerWidth;
const paddleHeight = 20,paddleWidth = 200;
let xPaddle = canvasWidth/2 - paddleWidth/2,yPaddle = canvasHeight - paddleHeight,dxPaddle = 30;
ctx.fillStyle = 'green';
let score = 0;
let maxScore = 0;
let lives = 3
document.getElementById('maxScore').innerHTML = maxScore;
document.getElementById('lives').innerHTML = lives;
ctx.fillRect(0,0,canvasWidth,canvasHeight);