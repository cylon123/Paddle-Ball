const canvas2 = document.querySelector('#ball');
const ctx2 = canvas2.getContext('2d');
canvas2.height = canvasHeight;
canvas2.width = canvasWidth;
let lifeFlag = true;
const ballRadius = 10;
maxScore = score;
let timer;
let x = canvasWidth/2,y = canvasHeight/2,dx = 1.5,dy = -2;
function yesButtonClicked(){
    document.querySelector('.continueModal').classList.remove('display');
    clearInterval(timer);
    timer = setInterval(moveBall,5);
    document.addEventListener('keydown',movePaddle);
}
if(document.querySelector('.newGame').classList.contains('display')){
    clearInterval(timer);
}
function startGameClicked(){
     timer = setInterval(moveBall,5);
     document.querySelector('.continueModal').classList.remove('display');
     document.querySelector('.newGame').classList.remove('display');
     document.querySelector('#maxScore').innerHTML = maxScore;
     fillSkeets();
}
document.querySelector('.startGame').addEventListener('click',startGameClicked)
document.querySelector('.yesButton').addEventListener('click',yesButtonClicked)
document.addEventListener('keyup',() => {
    if(event.keyCode == 27){
        clearInterval(timer);
        document.removeEventListener('keydown',movePaddle);
        document.querySelector('.continueModal').classList.add('display');
        document.querySelector('.options').classList.add('display');
    }
    if(event.keyCode == 32){
        clearInterval(timer);
        timer = setInterval(moveBall,5);
        document.addEventListener('keydown',movePaddle);
    }
})
function moveBall(){
    ctx2.fillStyle = 'black';
    ctx2.fillRect(0,0,canvasWidth,canvasHeight);
    ctx2.beginPath();
    ctx2.fillStyle = 'red';
    ctx2.arc(x,y,ballRadius,0,2*Math.PI);
    ctx2.fill();
    if(y + dy < 0){
        dy = -dy;
    }
    if(x + dx < 0 || x + dx > canvasWidth){
        dx = -dx;
    }
    if(x + dx  < xPaddle + paddleWidth + ballRadius && x + dx > xPaddle - ballRadius && y + dy > canvasHeight - paddleHeight){
        dy = -dy;
    }
    if(y - ballRadius > canvasHeight){
        clearInterval(timer);
        if(lifeFlag){
            lives -= 1;
        }
        document.querySelector('#lives').innerHTML = lives;
        lifeFlag = false;
        console.log(lifeFlag);
    }
    if(y - ballRadius > canvasHeight && lives > 0){
        x = canvasWidth/2;
        y = canvasHeight/2;
        dx = 2;
        dy = -2;
        document.querySelector('.continueModal').classList.add('display');
        document.querySelector('.options').classList.add('display');
        lives -= 1;
    }
    if(y - ballRadius > canvasHeight && lives == 0){
        x = canvasWidth/2;
        y = canvasHeight/2;
        dx = 2;
        dy = -2;
        document.querySelector('.continueModal').classList.add('display');
        document.querySelector('.newGame').classList.add('display');
        lives = 3;
        score = 0;
        document.querySelector('#lives').innerHTML = lives;
        xPaddle = canvasWidth/2 - paddleWidth/2,yPaddle = canvasHeight - paddleHeight,dxPaddle = 30;
        fillSkeets();
    }
    x += dx;
    y += dy;
    console.log(dx,dy);
    collisionDetection();
    if(!checkSkeetStatus()){
        fillSkeets();
    }
    document.getElementById('maxScore').innerHTML = maxScore;
}