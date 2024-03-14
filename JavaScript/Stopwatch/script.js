const startStopBtn = document.querySelector('#startStopBtn');       
const resetBtn = document.querySelector('#resetBtn')            

let seconds = 0;       
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++                   // +1 aux secondes
    if(seconds / 60 === 1){     // si les secondes atteignent 60
        seconds = 0;            // reset à 0
        minutes++;              // et minute +1
    }
    if(minutes / 60 === 1){
        minutes = 0;
        hours++;
    }
    if(seconds < 10) {          // si seconde inf à 10
        leadingSeconds = "0" + seconds.toString();  // rajoute un 0 avant seconde donc 09 au lieu de 9
    } else {        
        leadingSeconds = seconds;   // sinon seconde normal
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds; 
}

startStopBtn.addEventListener('click', function(){      // au click sur stop/start
    if(timerStatus === "stopped") {                     // si le timer est à l'arrêt
        timerInterval = window.setInterval(stopWatch, 1000);        // toute les 1s rejoue la fonction stopwatch au dessus
        document.getElementById('startStopBtn').style.backgroundColor = "orange"    // met le bouton en orange
        timerStatus = "started";            // le met sur start
    } else {        // sinon
        window.clearInterval(timerInterval);    // arrête l'interval d'1 seconde
        document.getElementById('startStopBtn').style.backgroundColor = "lightgreen"    // met le bouton en vert     
        timerStatus = "stopped";        // met le timer à l'arrêt
    }
});

resetBtn.addEventListener('click', function(){      // au click sur reset
    window.clearInterval(timerInterval);        // arrête l'interval d'1 seconde
    seconds = 0;                    // met seconde à 0
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";        // remplace le texte du timer par 00:00:00
    document.getElementById('startStopBtn').style.backgroundColor = "lightgreen"    // met le bouton en vert
})