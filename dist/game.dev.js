"use strict";

plateau.style.width = "100%";
var numCard = 0;
var card = ["c1", "c2", "c3", "c4", "c5", "c6"];
var dé = document.getElementById("de");
var qstn = document.getElementsByClassName("qust");
var abc = document.getElementsByClassName("abc");
var buttonRep = document.getElementsByClassName("buttonRep");
var buttonJOK = document.getElementsByClassName("JOKER"); //Lance le dé

function lancer() {
  numCard = Math.floor(Math.random() * Math.floor(6));
  console.log(numCard);
  var playCard = document.getElementById(card[numCard]);
  playCard.style.transform = "translate(0%)";
  dé.style.display = "none";
  qstn[numCard].innerHTML = "La question ?";
  abc[numCard].innerText = "A/B/C";
} //Affiche la réponse


function reponse() {
  buttonRep[numCard].onclick = nextTour();
  alert('Ici la réponse !');
  dé.style.display = "block";
  resetOnclick();
} //Marque la fin du tour


function nextTour() {
  for (var i = 0; i < document.getElementsByClassName("c_left").length; i++) {
    document.getElementsByClassName("c_left")[i].style.transform = "translate(-90%)";
  }

  for (var _i = 0; _i < document.getElementsByClassName("c_right").length; _i++) {
    document.getElementsByClassName("c_right")[_i].style.transform = "translate(90%)";
  }
}

function joker() {
  if (confirm("Etes vous sur de vouloir utiliser le JOKER ? Il n'est disponible qu'une fois par partie !")) {
    for (var i = 0; i < buttonJOK.length; i++) {
      buttonJOK[i].style.display = "none";
    }
  }
}

function resetOnclick() {
  buttonRep[numCard].setAttribute('onclick', 'reponse()');
}