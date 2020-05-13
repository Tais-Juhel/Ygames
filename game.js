plateau.style.width = "200vh";

const card = ["c1", "c2", "c3", "c4", "c5", "c6", "cj"];
const dé = document.getElementById("de") 
const qstn = document.getElementsByClassName("qust")
const abc = document.getElementsByClassName("abc")

//Affiche la réponse
function reponse(){
    console.log("yooo!");
}

//Lance le dé
function lancer(){
    numCard = Math.floor(Math.random() * Math.floor(7));
    const playCard = document.getElementById(card[numCard]);
    playCard.style.transform = "translate(0%)";
    dé.style.display= "none";
    console.log(qstn);
    qstn[numCard].innerHTML = "La question ?";
    abc[numCard].innerText = "A/B/C";
}