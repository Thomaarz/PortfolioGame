<?php


class Vue_Accueil
{

    public function show_header() {
        ?>

        <header id="top">
            <h1 id="title-1" class="lime biggest bold"></h1>
        </header>

        <?php
    }

    public function show_game_nav() {
        ?>

        <div id="game">
            <div id="player" class="game"></div>
            <div id="plateforme-1" class="plateforme game"></div>

            <div id="game-nav">
                <div onmouseout="hide_text('link-presentation')" onmouseover="show_text('link-presentation')" id="game-link-presentation" class="game nav-element big moveable speed-0">
                    <a id="link-presentation" class="undecorated lime bold moveable speed-0" href="index.php#presentation">?</a>
                </div>
                <div onmouseout="hide_text('link-experience')" onmouseover="show_text('link-experience')" id="game-link-experience" class="game nav-element big moveable speed-0">
                    <a id="link-experience" class="undecorated lime bold moveable speed-0" href="index.php#experience">?</a>
                </div>
                <div onmouseout="hide_text('link-projets')" onmouseover="show_text('link-projets')" id="game-link-projets" class="game nav-element big moveable speed-0">
                    <a id="link-projets" class="undecorated lime bold moveable speed-0" href="index.php#projets">?</a>
                </div>
                <div onmouseout="hide_text('link-contact')" onmouseover="show_text('link-contact')" id="game-link-contact" class="game nav-element big moveable speed-0">
                    <a id="link-contact" class="undecorated lime bold moveable speed-0" href="index.php#contact">?</a>
                </div>
            </div>
        </div>

        <?php
    }

        public function show_progress_bar() {
            ?>

            <div id="progress-bar">
                <div id="progress-bar-top"></div>
                <div id="progress-bar-middle"></div>
                <div id="progress-bar-bottom"></div>

                <a href="index.php#top" id="arrow-up" class="moveable speed-0"></a>
            </div>

            <?php
        }

    public function show_main() {
        ?>

        <!-- TOP -->
        <div class="main-box">
            <p id="deplacement-infos" class="white big visualizable text reveal">
                Déplacez vous à l'aide des touches <span class="touch">Q</span> et <span class="touch">D</span> puis
                interagissez avec les touches <span class="touch">Entrer</span> ou <span class="touch">E</span> !
                Déplacez-vous sur les <span class="touch">?</span> pour choisir où naviguer !
            </p>
        </div>

        <!-- PRESENTATION -->
        <div class="main-box">
            <h1 class="title shadow white bold biggest reveal hover-text" id="presentation">Présentation</h1>
            <p class="text white reveal">
                Bienvenue sur mon Portfolio !<br/>
                Je m'appelle Thomas Girbe, je suis née en 2002 et j'ai actuellement <span class="lime">19</span> ans !
            </p>
            <p class="text white reveal">
                Je suis passionné par l'informatique et plus particulièrement par la programmation Java/Web depuis plus de <span class="lime">5</span> ans.
                Mon objectif est de continuer à progresser dans ce domaine !
            </p>
        </div>


        <!-- EXPERIENCE -->
        <div class="main-box">
            <h1 class="title shadow white bold biggest reveal hover-text" id="experience">Expérience</h1>
            <p class="text white reveal">
                je suis actuellement en deuxième année de <span class="lime">DUT Informatique</span> à l'iut de Montreuil (93).
                J'ai obtenu mon BAC <span class="lime">S</span> au Lycée Blaise Pascal à Orsay (91).
            </p>
        </div>

        <!-- PROJETS -->
        <div class="main-box">
            <h1 class="title shadow white bold biggest reveal hover-text" id="projets">Projets</h1>
        </div>

        <!-- CONTACT -->
        <div class="main-box">
            <h1 class="title shadow white bold biggest reveal hover-text" id="contact">Contact</h1>
        </div>

        <?php
    }

}

?>