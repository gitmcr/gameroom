const croixOne = document.querySelector("#croixOne");
const croixTwo = document.querySelector("#croixTwo");
const croixThree = document.querySelector("#croixThree");
const hiddenContentOne = document.querySelector(".hiddenOne");
const hiddenContentTwo = document.querySelector(".hiddenTwo");
const hiddenContentThree = document.querySelector(".hiddenThree");
 
function toggle(vari, hiddy, plus) { 
    vari.classList.toggle(hiddy);
    if (plus.textContent == "+") {
        plus.textContent = "-";
    } else {
        plus.textContent = "+";
    }
}

croixOne.addEventListener("click", () => toggle(hiddenContentOne, "hiddenOne", croixOne));
croixTwo.addEventListener("click", () => toggle(hiddenContentTwo, "hiddenTwo", croixTwo));
croixThree.addEventListener("click", () => toggle(hiddenContentThree, "hiddenThree", croixThree));
