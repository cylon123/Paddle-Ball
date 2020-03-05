const canvas3 = document.querySelector('#paddle');
canvas3.width = canvasWidth;
canvas3.height = canvasHeight;
const ctx3 = canvas3.getContext('2d');
const paddleHeight = 20,paddleWidth = 200;
let xPaddle = canvasWidth/2 - paddleWidth/2,yPaddle = canvasHeight - paddleHeight,dxPaddle = 1;
ctx3.fillStyle = 'yellow';
let timer;
ctx3.fillRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
document.addEventListener('keydown',() => {
    if(event.keyCode == 37){
            ctx3.clearRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
            xPaddle -= dxPaddle;
            ctx3.fillStyle = 'yellow';
            ctx3.fillRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
        }
})