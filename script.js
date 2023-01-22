const stopWatchTag = document.getElementsByClassName('stopWatchText')[0];
const miliSecondTag = document.getElementsByClassName('miliS')[0];
const startButtonTag = document.getElementsByClassName('startButton')[0];
const pauseButtonTag = document.getElementsByClassName('pauseButton')[0];
const clearButtonTag = document.getElementsByClassName('clearButton')[0];
const continueButtonTag = document.getElementsByClassName('continueButton')[0];
const restartButtonTag = document.getElementsByClassName('restartButton')[0];


let hours = 0, minutes = 0, seconds = 0, miliseconds = 0;

const startTime = () => {
    if (buttonCheck > 1){
        console.log(buttonCheck)
        return;
    }
    miliseconds++;
    if (miliseconds > 99){
        seconds += 1;
        miliseconds = 0;
        if (seconds === 60){
            seconds = 0;
            minutes += 1;
            if (minutes === 60){
                minutes = 0;
                hours += 1;
            }
        }
    }
    
        
        
        
    
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    const miliText = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds;
    
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
    miliSecondTag.textContent = miliText;
    
    

};


let intervalId;
let buttonCheck = 0;
let ConCatch = 0;
let reCatch = 0;


startButtonTag.addEventListener("click", () => {
    if (buttonCheck == 1){return;}
   buttonCheck += 1;
   ConCatch += 1;
   reCatch += 1;
   intervalId = setInterval(startTime, 10);
} );

pauseButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
})

continueButtonTag.addEventListener("click", () => {
    buttonCheck = 0;
    buttonCheck += 1;
    if (ConCatch < 1){return;}
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
})

clearButtonTag.addEventListener("click", () => {
   
    buttonCheck = 0;
    clearInterval(intervalId);
    
    miliseconds = 0;
    hours = 0;
    seconds = 0;
    minutes = 0;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    const miliText = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds;
    
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
    miliSecondTag.textContent = miliText;
})

restartButtonTag.addEventListener("click", () => {
    if (reCatch < 1){return;}
    clearInterval(intervalId);
    miliseconds = 0;
    hours = 0;
    seconds = 0;
    minutes = 0;
    intervalId = setInterval(startTime, 10);
})