<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
    <title>Ygame - Accueil</title>
</head>
<body>
    <?php include '_header.php'; ?>
    <section>
        <?php include '_rules.php';?>
        <img id="plateau" src="img/plateau_monopoly_3Dp.png" alt="plateau">
        <?php include '_aPropos.php';?>
    </section>
    <footer>
        <a href="#" onclick="onglet('accueil')"><img src="img/logoYgame.png" alt="logo"></a>
        <p>Ygame - Un jeu par de élèves Ynovant</p>
    </footer>
    <?php if(!isset($_GET['game'])): ?>
    <script src="index.js"></script> 
    <?php 
    endif; 
    if(isset($_GET['game'])):?>
    <script src="game.js"></script> 
    <?php endif; ?>
</body>
</html>