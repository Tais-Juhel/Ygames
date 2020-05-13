plateau.style.width = "200vh";

const card = ["c1", "c2", "c3", "c4", "c5", "c6", "cj"];
const dé = document.getElementById("de") 
const qstn = document.getElementsByClassName("qust")
const abc = document.getElementsByClassName("abc")
const buttonRep = document.getElementsByClassName("buttonRep")

//Lance le dé
function lancer(){
    numCard = Math.floor(Math.random() * Math.floor(7));
    const playCard = document.getElementById(card[numCard]);
    playCard.style.transform = "translate(0%)";
    dé.style.display= "none";
    qstn[numCard].innerHTML = "La question ?";
    abc[numCard].innerText = "A/B/C";
}

//Affiche la réponse
function reponse(){
    buttonRep[numCard].value = "Rep";
    buttonRep[numCard].onclick = nextTour();
    console.log('ayayaya')
}

//Marque la fin du tour
function nextTour(){
    for(let i=0; i<document.getElementsByClassName("c_left").length; i++){
        document.getElementsByClassName("c_left")[i].style.transform = "translate(-90%)";
    }
    for(let i=0; i<document.getElementsByClassName("c_right").length; i++){
        document.getElementsByClassName("c_right")[i].style.transform = "translate(90%)";
    }
}

