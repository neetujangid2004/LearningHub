// JS program for DDA line generation algorithm 
function round(n){
    if(n - Math.floor(n) < 0.5){
        return Math.floor(n);
    }
    return Math.floor(n + 1);
};
function DDALine(x1,y1,x2,y2){
    let dx = x2 - x1;
    let dy = y2 - y1;
    let step;
    if(Math.abs(dx) > Math.abs(dy)){
        step = Math.abs(dx);
    } else {
        step = Math.abs(dy);
    }
    let x_inc = (dx/step);
    let y_inc = (dy/step);

    let x = x1;
    let y = y1;

    for(let i=0;i<step;i++){
        console.log(round(x) + " " + round(y));
        x = x + x_inc;
        y = y + y_inc;
    }
};
let x1 = 200,y1 = 180,x2 = 180,y2 = 160;
DDALine(x1,y1,x2,y2);