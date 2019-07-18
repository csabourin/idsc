<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Travaillons ensemble</h2>L’équipe des Services et technologies d’apprentissage peut vous aider.
    <h3>Foire aux questions</h3>
    <details>
      <summary>Je dois transformer un cours existant et j'ai des questions sur les outils qui sont disponibles</summary>
      Je contacte <a href="mailto:csps.learningservicerequest-demandeserviceapprentissage.efpc@canada.ca">l'équipe de Conception et solution d'apprentissage</a>.
    </details>
    <details>
      <summary>J'ai prévu créer un produit multimédia pour mon cours</summary>
      J'envoie un courriel à <a href="mailto:csps.learningservicerequest-demandeserviceapprentissage.efpc@canada.ca">l'équipe de l'éditique et du développement multimédia</a>.
    </details>
    <details>
      <summary>Je souhaite en apprendre davantage sur les produits qui nous viennent de l'extérieur</summary>
      J'envoie un courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Pages">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>Je dois décider du design de mes pages de cours</summary>
      J'envoie un courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Pages">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>J'ai une idée d'atelier de formation</summary>
      J'envoie un courriel à <a href="mailto:csps.supportservicesservicesdesoutien.efpc@canada.ca?Subject=Formation">l'équipe de Services de soutien à l'apprentissage</a>.
    </details>
    <details>
      <summary>J'aimerais discuter et peut-être ajouter de nouvelles fonctionnalités</summary>
      J'envoie un courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Information">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>J'ai besoin d'un compte Moodle et/ou Drupal</summary>
      J'envoie un courriel à <a href="mailto:csps.ilmsbusinessoperationsoperationsdaffaireshga.efpc@canada.ca?Subject=Compte">l'équipe des services des opérations</a>.
    </details>
    <details>
      <summary>Je dois soumettre le contenu de mes pages Drupal pour les faire coder</summary>
      J'envoie un courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Contenu">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>Je dois soumettre la liste de cours que je veux ajouter dans GCcampus</summary>
      J'envoie la <a href="http://gcdocs.csps-efpc.gc.ca/otcs/llisapi.dll?func=ll&objId=6908429&objAction=download" target="_blank">liste</a> complétée par courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Cours">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>Je dois modifier les paramètres et/ou les fonctionnalités d’un cours existant dans Moodle</summary>
      J'envoie un courriel à <a href="mailto:csps.gccampus.efpc@canada.ca?Subject=Contenu">l'équipe GCcampus</a>.
    </details>
    <details>
      <summary>Je dois faire modifier un cours programmé en HTML</summary>
      J'envoie un courriel à <a href="mailto:csps.learningservicerequest-demandeserviceapprentissage.efpc@canada.ca?Subject=Éditique">l’Éditique et du développement multimédia</a>.
    </details>
    <details>
      <summary>On me dit que je dois rencontrer le CICÉ (SCIC). À quelle étape dois&#8209;je le faire?</summary>
      Lorsque je rencontrerai l’équipe de Conception et solution d’apprentissage, ils m’expliqueront le processus au complet.
    </details>
    <details>
      <summary>Je ne sais pas quelles autres actions pourraient faciliter le processus d’intégration</summary>
      Lorsque je rencontrerai l’équipe de Conception et solution d’apprentissage ou GCcampus, ils m’informeront du processus d’intégration au complet.
    </details>

    <div class="wb-frmvld wb-fdbck nojs-hide">
      <h3>Vous ne savez pas qui contacter?</h3>Faites-nous parvenir vos questions par courriel et nous vous dirigerons vers les bonnes personnes dans les plus brefs délais.
      <form action="mailto:csps.gccampus.efpc@canada.ca?Subject=Demande%20du%20centre%20de%20soutien" enctype="text/plain" method="post">
        <div class="form-group" />
        <div class="form-group">
          <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-3">
              <label for="name" />
              <span class="field-name">Votre nom</span>
            </div>
            <div class="col-md-9">
              <input id="name" type="text"><br>
            </div>
          </div>

          <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-3">
              <label for="email" class="required" />
              <span class="field-name">Votre courriel</span>
            </div>
            <div class="col-md-9">
              <input id="email" required size="50" type="email"><br>
            </div>
          </div>

          <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-3">
              <label for="subject" />
              <span class="field-name">Sujet</span>
            </div>
            <div class="col-md-9">
              <input id="subject" size="50" type="text"><br>
            </div>
          </div>

          <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-3">
              <label for="question" class="required" />
              <span class="field-name">Votre question</span>
            </div>
            <div class="col-md-9">
              <textarea name="Question" cols="60" rows="8" class="form-control" required />
            </div>
          </div>
        </div>
        <input id="fbsbmt" class="btn btn-primary" name="" type="submit" value="envoyer">
        <input class="btn btn-default" type="reset" value="Réinitialiser">
      </form>
    </div>
  </div>
</template>
