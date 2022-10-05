<?php

session_start();

include "modules/module_accueil/Vue_Accueil.php";

?>

<!DOCTYPE html>
<html>
<head>
    <title>Test</title>

    <!-- STYLE -->
    <link rel="stylesheet" type="text/css" href="style/images.css">
    <link rel="stylesheet" type="text/css" href="style/game.css">
    <link rel="stylesheet" type="text/css" href="style/default.css">
    <link rel="stylesheet" type="text/css" href="style/header.css">
    <link rel="stylesheet" type="text/css" href="style/progress_bar.css">
    <link rel="stylesheet" type="text/css" href="style/main.css">

    <!-- JS -->
    <script type="text/javascript" src="scripts/game.js"></script>
    <script type="text/javascript" src="scripts/progress_bar.js"></script>
    <script type="text/javascript" src="scripts/functions.js"></script>
    <script type="text/javascript" src="scripts/main.js"></script>
    <script type="text/javascript" src="scripts/default.js"></script>


</head>
<body>

<?php

$vue_accueil = new Vue_Accueil();
$vue_accueil->show_header();

?>

<main>
    <?php

    $vue_accueil->show_game_nav();
    $vue_accueil->show_progress_bar();
    $vue_accueil->show_main();

    ?>
</main>

<?php



?>
<script type="text/javascript" src="scripts/element/main.js"></script>
</body>
</html>