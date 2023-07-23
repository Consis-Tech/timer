let timeDisplay=document.getElementById("timer");


let reset=document.getElementById("resetbtn");

let start=document.getElementById("startbtn");

let pause=document.getElementById("pausebtn");

let startTime=0;
let elaspedTime=0;
let paused=true;
let currentTime=0;
let mins= 0;

let secs=0;

let hrs=0;
let interival=0;


start.addEventListener("click" ,  ()=>{

    if(paused){
        paused=false;
        startTime=Date.now()-elaspedTime;
     interival=   setInterval(updatetime, 1000);
    }


}  );

pause.addEventListener("click", ()=>{
    if(!paused){
        paused=true;
        elaspedTime=Date.now()-startTime;
        clearInterval(interival);
    }
    
    });

reset.addEventListener("click",()=>{
    paused=true;
    clearInterval(interival);
    let startTime=0;
let elaspedTime=0;
let currentTime=0;
let mins= 0;

let secs=0;

let hrs=0;
timeDisplay.textContent="00:00:00";
});

function updatetime(){
elaspedTime=Date.now()-startTime;

secs=Math.floor((elaspedTime /1000) % 60);

mins=Math.floor((elaspedTime / (1000 * 60)) % 60);

hrs=Math.floor((elaspedTime / (1000*60*60)) % 60);

secs=addZeros(secs);

mins=addZeros(mins);

hrs=addZeros(hrs);

timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
function addZeros(unit){
    return(("0") +unit).length > 2 ? unit: "0" + unit;
    
    }
    
    }