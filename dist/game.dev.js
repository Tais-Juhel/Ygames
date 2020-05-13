"use strict";

plateau.style.width = "200vh";
var card = ["c1", "c2", "c3", "c4", "c5", "c6", "cj"];
var dé = document.getElementById("de");
var qstn = document.getElementsByClassName("qust");
var abc = document.getElementsByClassName("abc"); //Affiche la réponse

function reponse() {
  console.log("yooo!");
} //Lance le dé


function lancer() {
  numCard = Math.floor(Math.random() * Math.floor(7));
  var playCard = document.getElementById(card[numCard]);
  playCard.style.transform = "translate(0%)";
  dé.style.display = "none";
  console.log(qstn);
  qstn[numCard].innerHTML = "La question ?";
  abc[numCard].innerText = "A/B/C";
}