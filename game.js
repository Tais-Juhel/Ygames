plateau.style.width = "100%";

let numCard = 0;

const card = ["c1", "c2", "c3", "c4", "c5", "c6"];
const dé = document.getElementById("de") 
const qstn = document.getElementsByClassName("qust")
const abc = document.getElementsByClassName("abc")
const buttonRep = document.getElementsByClassName("buttonRep")
const buttonJOK = document.getElementsByClassName("JOKER")

//Lance le dé
function lancer(){
    numCard = Math.floor(Math.random() * Math.floor(6));
    console.log(numCard);
    const playCard = document.getElementById(card[numCard]);
    playCard.style.transform = "translate(0%)";
    dé.style.display= "none";
    qstn[numCard].innerHTML = "La question ?";
    abc[numCard].innerText = "A/B/C";
}

//Affiche la réponse
function reponse(){
    buttonRep[numCard].onclick = nextTour();
    alert('Ici la réponse !');
    dé.style.display= "block";
    resetOnclick();
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

function joker(){
    if ( confirm( "Etes vous sur de vouloir utiliser le JOKER ? Il n'est disponible qu'une fois par partie !" ) ) {
        for(let i=0; i<buttonJOK.length; i++){
            buttonJOK[i].style.display = "none";
        }
    }
}

function resetOnclick(){
    buttonRep[numCard].setAttribute('onclick', 'reponse()');
}