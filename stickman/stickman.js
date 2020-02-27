
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    const ctx2 = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let xSlide = canvas.width/2 -100;
    let canBeginGame = false;
    document.addEventListener('keydown',($event) => {
        if(event.keyCode == 39 && xSlide+200 < canvas.width){
            xSlide += 40;
        }
        else if(event.keyCode == 37 && xSlide > 0){
            xSlide -= 40;
        }
    })
    // document.addEventListener('keyup',() => {
    //     clearInterval(inter);
    // })
    function onPlayClicked(){
        canBeginGame = !canBeginGame;
        let x = canvas.width/2;
        let y = canvas.height/2;
        let dx = 10;
        let dy = -10;
        let hitCount = 0;
        let flag = false;
        let ballRadius = 10;
        document.querySelector('.gameBegin').classList.add('display');
        console.dir(document.querySelector('.gameBegin').classList)  ; 
        if(canBeginGame){
            console.dir(document.querySelector('.gameBegin'))  ; 
            const inter = setInterval(function animate(){
                ctx.fillStyle = 'green';
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(x,y,ballRadius,0,2*Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx2.beginPath();
                ctx2.rect(xSlide,canvas.height-20,200,20);
                ctx2.fillStyle = 'yellow';
                ctx2.fill();
                ctx2.beginPath();
                let i = 60,j = 60,skeetWidth = 100,skeetHeight = 20,count = 0,offset = 10,k = 1;
                while(j < canvas.height / 2){
                    while(i < canvas.width - skeetWidth * k){
                        ctx2.rect(i,j,skeetWidth,skeetHeight);
                        i += skeetWidth + offset;
                    }
                    j += skeetHeight + offset; 
                    i = 60 + (skeetWidth + offset) * k;
                    ++k;
                }
                ctx2.fillStyle = 'brown';
                ctx2.fill();
                x += dx;
                y += dy;
                if(y < ballRadius || (x < xSlide + 200 && x > xSlide && y > canvas.height - ballRadius - 20 && y < canvas.height)){
                    dy = -dy;
                    ++hitCount;
                    document.querySelector('.scoreboard p').innerHTML = hitCount;
                } 
                if(x < ballRadius || x > canvas.width - ballRadius)
                {
                    dx = -dx;
                    document.querySelector('.scoreboard p').innerHTML = hitCount;
                }
                if(y - 2*ballRadius> canvas.height){
                    document.querySelector('.gameBegin').classList.remove('display');
                    console.dir(document.querySelector('.gameBegin').classList)  ; 
                    canBeginGame = !canBeginGame;  
                    clearInterval(inter);          
                }
            },15) 
        }
    }