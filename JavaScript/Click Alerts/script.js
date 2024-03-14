const revealBtn = document.querySelector(".open-btn");            
const hiddenContent = document.querySelector(".modal-container");  
const hideBtn = document.querySelector(".close-btn");   

/*
function test() {    
    if (!hiddenContent.classList.contains("hideNo")){
    hiddenContent.classList.add("hideNo");      
    }         
}

function test2() { 
    if (hiddenContent.classList.contains("hideNo")){
        hiddenContent.classList.remove("hideNo"); 
    }
}

revealBtn.addEventListener("click", test);
hideBtn.addEventListener("click", test2);  
*/

revealBtn.addEventListener("click", function() {
    hiddenContent.style.display = "block";
});

hideBtn.addEventListener("click", function() {
    hiddenContent.style.display = "none";
});