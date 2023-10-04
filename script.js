let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
let button = document.getElementById("btn");
let circles = document.getElementById("circles");
canvas.height = 500
canvas.width = 900

let wave = [];

let x =0;
let counter=0;

let a;

let num;

ctx.strokeStyle = 'white'

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    let x1 = 200;
    let y1 = 200;

    let n;
    
    for(let i = 0; i <num;i++){
        let prevx = x1;
        let prevy = y1;

        n = i*2 + 1;

        let radius = 7.5 * 4 * (1/ n * Math.PI)
        
        x1 += radius * Math.cos(n * x)
        y1 += radius * Math.sin(n * x)

        ctx.beginPath();
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath()

        ctx.fillStyle = "white"

        ctx.moveTo(prevx,prevy)
        ctx.lineTo(x1,y1)
        ctx.stroke()
    }
    wave.unshift(y1);

    for(let i =0;i<wave.length;i++){
        ctx.fillRect(400+i,wave[i],1,1);
        ctx.moveTo(x1,y1);
        ctx.lineTo(400,wave[0])
    }
    ctx.stroke();

    if(wave.length>=650){
        wave.pop();
    }

    x-=0.03;

    a = requestAnimationFrame(animate);
}

btn.addEventListener('click',()=>{
    wave=[]
    num = circles.value;
    if(x!=0){
        window.cancelAnimationFrame(a)
        x=0;
    }
    animate();
})