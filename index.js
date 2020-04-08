const plateau = document.getElementById("plateau")
const puce = document.getElementById("puce")
const rulesText = document.getElementsByClassName('_rules')[0]
const aProposText = document.getElementsByClassName('_aPropos')[0]

// Initialiser la position de la puce d'onglet
let pucePosInit = (window.innerWidth / 5) - 5;
puce.style.left = pucePosInit+"px";

// Déplacer le texte des <<Règles>>
function f_rules(){
    rulesText.className = "_rules active";
    aProposText.className = "_aPropos";
}

// Déplacer le texte d' <<A propos>>
function f_aPropos(){
    rulesText.className = "_rules";
    aProposText.className = "_aPropos active";
}

// Déplacer la puce sous le bon onglet
function onglet(name){
    plateau.classList = name;

    if(name != "accueil"){
        let posLeft = document.getElementById(name).offsetLeft;
        let width = document.getElementById(name).offsetWidth;

        let pucePos = (width / 2) + posLeft - 5;

        puce.style.opacity = "100%";
        puce.style.left = pucePos+"px";
        plateau.style.opacity = "40%";

        if(name == 'rules'){f_rules()}
        else{f_aPropos()}
    }else{
        puce.style.opacity = "0%";
        puce.style.left = pucePosInit+"px";
        plateau.style.opacity = "100%";

        rulesText.className = "_rules";
        aProposText.className = "_aPropos";
    }
}