const canvas3 = document.querySelector('#paddle');
canvas3.width = canvasWidth;
canvas3.height = canvasHeight;
const ctx3 = canvas3.getContext('2d');
ctx3.fillStyle = 'yellow';
ctx3.fillRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
function moveRight(){
    ctx3.fillStyle = 'black';
    ctx3.fillRect(0,canvasHeight-1.36*skeetHeight,canvasWidth,canvasHeight);
    xPaddle += dxPaddle;
    ctx3.fillStyle = 'yellow';
    ctx3.fillRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
}   
function moveLeft(){
    ctx3.fillStyle = 'black';
    ctx3.fillRect(0,canvasHeight-1.36*skeetHeight,canvasWidth,canvasHeight);
    xPaddle -= dxPaddle;
    ctx3.fillStyle = 'yellow';
    ctx3.fillRect(xPaddle,yPaddle,paddleWidth,paddleHeight);
}

function movePaddle(){
    if(event.keyCode == 37 && xPaddle > 0){
        moveLeft();
    }
    else if(event.keyCode == 39 && xPaddle + paddleWidth < canvasWidth){
        moveRight();
    }
}

document.addEventListener('keydown',movePaddle);