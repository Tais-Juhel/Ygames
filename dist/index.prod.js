"use strict";var plateau=document.getElementById("plateau"),puce=document.getElementById("puce"),rulesText=document.getElementsByClassName("_rules")[0],aProposText=document.getElementsByClassName("_aPropos")[0],pucePosInit=window.innerWidth/5-5;function f_rules(){rulesText.className="_rules active",aProposText.className="_aPropos"}function f_aPropos(){rulesText.className="_rules",aProposText.className="_aPropos active"}function onglet(e){if("accueil"!=(plateau.classList=e)){var t=document.getElementById(e).offsetLeft,s=document.getElementById(e).offsetWidth/2+t-5;puce.style.opacity="100%",puce.style.left=s+"px",plateau.style.opacity="40%","rules"==e?f_rules():f_aPropos()}else puce.style.opacity="0%",puce.style.left=pucePosInit+"px",plateau.style.opacity="100%",rulesText.className="_rules",aProposText.className="_aPropos"}puce.style.left=pucePosInit+"px";