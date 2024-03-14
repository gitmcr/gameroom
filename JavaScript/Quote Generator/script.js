const newQuoteButton = document.querySelector(".button");  
const newQuote = document.querySelector(".quote")
const newAuthor = document.querySelector(".author")

let i = 0;

let quoteList = [
["La vie est un court exil.", "PLATON"], 
["Qui naquit chat court après les souris.", "PROVERBE FRANCAIS"], 
["On ne ferre pas un cheval qui court.", "PROVERBE HOLLANDAIS"],
["Va chèché lou bWA Da-mi.", "Jôsé"],
];

function changeQuote () {
    // partie transition
    setTimeout(() => {
        newQuote.classList.remove("bite");
        newAuthor.classList.remove("bite");
    }, 300);
    newAuthor.classList.add("bite")
    newQuote.classList.add("bite")
    // fin de la partie transition
    newQuote.textContent = quoteList[i][0];
    newAuthor.textContent = quoteList[i][1];
    i++;
    if (i == quoteList.length){
        i=0;
    }
};

newQuoteButton.addEventListener("click", changeQuote);