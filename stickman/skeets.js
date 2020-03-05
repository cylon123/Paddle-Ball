const canvas4 = document.querySelector('#skeets');
const brickStatus = [];
let flag = false;
const ctx4 = canvas3.getContext('2d');
canvas4.height = canvasHeight;
canvas4.width = canvasWidth;
const skeetHeight = 15;
const skeetWidth = 100;
const offset = 20;
let i,j;
function fillSkeets(){
    ctx4.fillStyle = 'brown';
    for(i = 60;i < canvasHeight/3;i = i + offset + skeetHeight){
        brickStatus[i] = [];
        for(j = 60; j < canvasWidth - skeetWidth;j = j + offset + skeetWidth){
            ctx4.fillRect(j,i,skeetWidth,skeetHeight);
            brickStatus[i][j] = true;
        }
    }
}
function checkSkeetStatus(){
    for(i = 60;i < canvasHeight/3;i = i + offset + skeetHeight){
        for(j = 60; j < canvasWidth - skeetWidth;j = j + offset + skeetWidth){
            if(brickStatus[i][j]){
                flag = true;
            }
        }
    }
    return flag;
}
function collisionDetection(){
    for(i = 60;i < canvasHeight/3;i = i + offset + skeetHeight){
        for(j = 60; j < canvasWidth - skeetWidth;j = j + offset + skeetWidth){
            if(x + dx > j - ballRadius  && x + dx < j + skeetWidth + ballRadius && y + ballRadius + dy > i && y  - ballRadius + dy < i + skeetHeight && brickStatus[i][j]){
                ctx4.clearRect(j,i,skeetWidth,skeetHeight);
                brickStatus[i][j] = false;
                dy = -1.05*dy;
                dxPaddle = 1.005 * dxPaddle;
                score += 1;
                if(score > maxScore){
                    maxScore = score;
                    document.querySelector('.maxScoreKeeper').classList.add('.animate');
                }
                document.getElementById('score').innerHTML = score;
                console.log(score);
            }
        }
    }
}