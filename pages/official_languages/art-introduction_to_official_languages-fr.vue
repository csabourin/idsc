<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Introduction aux langues officielles</h2>
    <p>
      <img alt="Portrait d'une équipe tenant un carton affichant les mots 'Français' et 'english' également en équilibre" class="pull-right" src="~/assets/official_languages/GCcampus_OFFICIAL-LANGUAGeS_march_2015_fr.jpg">
      Afin de remplir ses obligations envers Objectif&nbsp;2020, l'École est en train de mettre en place une approche en matière de prestation de la formation. Cette approche privilégie de nouvelles façons d'offrir de la formation aux fonctionnaires : apprentissage en ligne, ateliers, forums tels que GCconnex, GCpédia et autres média sociaux.
    </p>
    <p>Les méthodes d'apprentissage qui seront maintenant privilégiées offrent une plus grande flexibilité aux apprenants et se fondent aussi davantage sur la collaboration et le réseautage, avec des échanges informels sur les média sociaux où l'on partage des ressources utiles. Ce caractère plus libre et informel pose bien entendu des défis pour l'École en ce qui a trait à ses obligations en matière de langues officielles&nbsp;: comment continuer à assurer à notre clientèle des produits de qualité et bilingues? Le Comité des langues officielles comprend qu'il aura un rôle important à jouer dans cette transition et devrait être en mesure de pouvoir offrir un soutien aux concepteurs pédagogiques pour les aider à respecter les obligations de l'École en termes de langues officielles.</p>
    <p>Ce guide se veut un outil de travail pour sensibiliser les concepteurs pédagogiques à connaître les obligations de l'École en matière de langues officielles et ainsi les guider dans le développement des outils qui peupleront l'écosystème d'apprentissage.</p>

    <section>
      <div class="row">
        <div class="col-xs-12 clearfix">
          <header>
            <h3>Écosystème d'apprentissage</h3>
            <br><br><br>
          </header>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div id="ecoParent">
              <div class="DashedCircle hidden-sm hidden-xs" />
              <div class="ContourCircle hidden-sm hidden-xs" />
              <div class="gOn-valign text-center">
                <img src="~/assets/official_languages/ecosystem_4.png">Écosystème d'apprentissage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ul id="ecosystem" data-arrows="&lt;div class='back-triangle'&gt;&lt;/div&gt;">
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_7.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_5.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_2.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_1.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_3.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_6.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_8.png">&nbsp;
      </li>
      <li data-size="100px">
        <img src="~/assets/official_languages/ecosystem_9.png">&nbsp;
      </li>
    </ul>
    <ul id="ecosystemTxt">
      <li><p>Événements. ateliers, webdiffusions, webinaires</p></li>
      <li><p>Salle de classe virtuelle</p></li>
      <li>
        <p class="text-left">
          Apprentissage<br>en ligne, à rythme libre
        </p>
      </li>
      <li><p>Ressources en ligne<br><small><em>(vidéos, pratiques exemplaires, produits disponibles sur le marché)</em></small></p></li>
      <li><p>Salle de classe</p></li>
      <li><p>Apprentissage mobile sans fil</p></li>
      <li>
        <p class="text-right">
          Apprentissage de masse&nbsp;/ social<br><small><em>(blogues, forums, contenu libre)</em></small>
        </p>
      </li>
      <li><p>Soutien au rendement&nbsp;/ Outils de travail</p></li>
    </ul>

    <script type="text/javascript">
      ecoparamsImg = {
      ListId:"ecosystem",
      CurrPage:"indexen",
      parentelem:"ecoParent",
      idPrefix:"eco-Diag",
      BaseClassName: "ecoDiag",
      extraClassName: " noPadding hvr-grow-shadow",
      radius:252,
      tunrOffset:95,
      putOnTop:true
      };
      ecoparamsImg.addArrows = {
      ShowArrows:true,
      TurnWithGraph:true,
      Angles:[0.001,90],
      DifferentRadius:150,
      FontSize:"100px",
      arrowOffset:-45
      };
      ecoparamsTxt = {
      ListId:"ecosystemTxt",
      CurrPage:"indexenTxt",
      parentelem:"ecoParent",
      idPrefix:"eco-DiagTxt",
      BaseClassName: "ecoDiagTxt",
      extraClassName: " gOn-valign",
      radius:175,
      tunrOffset:95
      };
      ecoparamsTxt.addArrows = {
      ShowArrows:false,
      TurnWithGraph:false
      };
      ecosystemFr = new grafOnator(ecoparamsImg);
      ecosystemFr.create();
      ecosystemTxtFr = new grafOnator(ecoparamsTxt);
      ecosystemTxtFr.create();
      vAlignChild();
    </script>
    <script>
      window.addeventListener('resize', function () {
      "use strict";
      window.location.reload();
      });
    </script>
  </div>
  </body>
<!-- Instanceend -->
</template></html>
