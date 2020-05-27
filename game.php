<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="game.css">
    <title>Ygame - Game</title>
</head>
<body>
    <div>
        <button id="de" onclick="lancer()">
            <img src="/img/de.png" alt="de">
        </button>
    </div>
    <section>
        <div>
            <?php for($i=1; $i<4; $i++): ?>
                <span id="c<?php echo $i; ?>" class="card c_left">
                    <p class="qust"></p>
                    <p class="abc"></p>
                    <div>
                        <input class="buttonRep" type="button" onclick="reponse()" value="Réponse">
                        <input class="JOKER" type="button" onclick="joker()" value="JOKER">
                    </div>
                </span>
            <?php endfor; ?>
        </div>
        <img id="plateau" src="img/plateau_monopoly_3Dp.png" alt="plateau">
        <div>
            <?php for($i=4; $i<7; $i++): ?>
                <span id="c<?php echo $i; ?>" class="card c_right">
                    <p class="qust"></p>
                    <p class="abc"></p>
                    <div>
                        <input class="buttonRep" type="button" onclick="reponse()" value="Réponse">
                        <input class="JOKER" type="button" onclick="joker()" value="JOKER">
                    </div>
                </span>
            <?php endfor; ?>
        </div>
    </section>
    <footer>
        <a href="/" onclick="onglet('accueil')"><img src="img/logoYgame.png" alt="logo"></a>
        <p>Ygame - Un jeu par de élèves Ynovant</p>
    </footer>
    <script src="game.js"></script>
</body>
</html>