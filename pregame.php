<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="pregame.css">
    <title>Document</title>
</head>
<body>
    <div id="container">
        <form method="GET" action="/game.php">
        <h1>YGAMES</h1>
            <div>
                <label for="nbrJoueur">Nombre de Joueur (2-4):</label>
                <input type="number" id="nbrJoueur" name="nbrJoueur" min="2" max="4">
            </div>
            <input id="jouer" type="submit" value="JOUER">
        </form>
    </div>
</body>
</html>