
function test(){

    const isBlue = body.classList.contains("blue");
    const isGreen = body.classList.contains("green");
    const isRed = body.classList.contains("red");

    if (isRed && isGreen && !isBlue) {
        body.classList.toggle("yellow");
    }
    else if (isRed && isBlue && !isGreen) {
        body.classList.toggle("purple");
    }
    else if (isBlue && isGreen && !isRed) {
        body.classList.toggle("cyan");
    }
    else if (isBlue && isGreen && isRed) {
        body.classList.toggle("white");
    }
}
/*
function clique1(){
    buttblue.classList.toggle("whiteb");
    removeMel();
    body.classList.toggle("blue");
    test();
}
*/
function changeColor(color, button) {
    button.classList.toggle("whiteb");
    removeMel();
    body.classList.toggle(color);
    test();
}

function removeMel(){
    body.classList.remove("yellow", "purple", "cyan", "white");
}

const body = document.querySelector("body");
const buttblue = document.querySelector("#btnblue");
const buttgreen = document.querySelector("#btngreen");
const buttred = document.querySelector("#btnred");

buttblue.addEventListener("click", () => changeColor("blue", buttblue)); //quand la fonction attend des parametre, il faut rajouter () => pour que cela fonctionne (fonction fleché) 
buttgreen.addEventListener("click", () => changeColor("green", buttgreen)); 
buttred.addEventListener("click", () => changeColor("red", buttred));