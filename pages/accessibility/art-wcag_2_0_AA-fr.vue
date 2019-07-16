<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Les normes WCAG 2.0 AA</h2>
    <p>Les normes et les technologies du Web évoluent constamment et l'accessibilité des sites Web contribue grandement à l'efficacité et à l'efficience du canal Web au sein du gouvernement du Canada. Afin de respecter son engagement en matière d'accessibilité des sites Web, le gouvernement du Canada a adopté les WCAG 2.0. Il y est précisé ce qui suit (traduction) :</p>
    <blockquote>
      &laquo; L'observation des présentes lignes directrices rendra le contenu accessible à un plus vaste éventail de personnes handicapées, y compris les personnes aveugles et à vision réduite, les personnes sourdes et ayant une perte de l'ouïe, les personnes ayant des troubles d'apprentissage, ayant des limitations cognitives, une mobilité réduite, un trouble de la parole, ou des problèmes de photosensibilité, ou une combinaison de ceux-ci. L'observation des présentes lignes directrices rendra aussi votre contenu Web plus accessible aux utilisateurs en général &raquo;.
      <footer>
        Source : <a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=23601" target="_blank">Normes sur l’accessibilité des sites Web – SCT </a>
      </footer>
    </blockquote>
    <p>L’École de la fonction publique du Canada (EFPC) adhère aux normes WCAG 2.0 AA afin de fournir la meilleure expérience de navigation et d’apprentissage en ligne possible pour ses clients et son personnel. En tant que concepteur pédagogique de l’EFPC, vous avez la responsabilité de prendre les mesures appropriées afin d’assurer la conformité WCAG 2.0 AA pendant toutes les activités de conception et de développement dont vous prenez part.</p>
    <h3>Les principes et règles de WCAG</h3>
    <p>Les WCAG 2.0 comprennent douze règles, qui sont réparties en quatre principes : perceptible, utilisable, compréhensible et robuste. Des critères de succès testables sont fournis pour chaque règle; ces critères sont en trois niveaux de conformité : A, AA et AAA.(<a href="http://www.w3.org/WAI/intro/wcag.php" target="_blank">http://www.w3.org/WAI/intro/wcag.php</a>)</p>
    <details>
      <summary>
        <h3>Principes</h3>
      </summary>
      <h4>Perceptible</h4>
      <p>L’information et les composants de l’interface utilisateur doivent être présentés à l’utilisateur de façon à ce qu’il puisse les percevoir.</p>
      <ul>
        <li> Les utilisateurs doivent donc être en mesure de percevoir l’information (elle doit être perceptible par au moins un des sens)</li>
      </ul>
      <p />
      <h4>Utilisable</h4>
      <p>Les composants de l’interface utilisateur et de navigation doivent être utilisables.</p>
      <ul>
        <li>Les utilisateurs doivent donc être en mesure d’utiliser l’interface (cette dernière ne peut pas comprendre de fonction que l’utilisateur n’est pas en mesure d’utiliser).</li>
      </ul>
      <h4>Compréhensible</h4>
      <p>L’information et l’utilisation de l’interface utilisateur doivent être compréhensibles.</p>
      <ul>
        <li>Les utilisateurs doivent comprendre le contenu et le fonctionnement de l’interface utilisateur (le contenu ni le fonctionnement ne peuvent pas être au-delà du niveau de compréhension des utilisateurs).</li>
      </ul>
      <h4>Robuste</h4>
      <p>Le contenu doit être suffisamment robuste pour être interprété de manière fiable par une vaste gamme d’agents utilisateurs, y compris les technologies d’assistance.</p>
      <ul>
        <li>Les utilisateurs doivent être en mesure d’accéder au contenu au fil des développements technologiques (au fur et à mesure que les technologies et les agents d’utilisateurs évoluent, le contenu doit rester accessible).</li>
      </ul>
      <p>Si ces quatre principes ne sont pas respectés, les utilisateurs handicapés ne sont pas en mesure d’utiliser les sites Web.</p>
    </details>
    <details>
      <summary>
        <h3>R&egrave;gles</h3>
      </summary>
      <dl class="dl-horizontal">
        <dt>1.1 Équivalents textuels :</dt>
        <dd>Proposer des équivalents textuels à tout contenu non textuel qui pourra alors être modifié en d’autres formes selon les besoins de l’utilisateur : grands caractères, braille, synthèse vocale, symboles ou langage simplifié.</dd>
        <dt>1.2 Médias temporels :</dt>
        <dd>Proposer des versions de remplacement aux médias temporels.</dd>
        <dt>1.3 Adaptable :</dt>
        <dd>Créer un contenu qui puisse être présenté de différentes manières sans perte d’information ni de structure (par exemple avec une mise en page simplifiée).</dd>
        <dt>1.4 Distinguable :</dt>
        <dd>Faciliter la perception visuelle et auditive du contenu par l’utilisateur, notamment en séparant le premier plan de l’arrière-plan.</dd>
        <dt>2.1 Accessibilité au clavier :</dt>
        <dd>Rendre toutes les fonctionnalités accessibles au clavier.</dd>
        <dt>2.2 Délai suffisant :</dt>
        <dd>Laisser à l’utilisateur suffisamment de temps pour lire et utiliser le contenu.</dd>
        <dt>2.3 Crises :</dt>
        <dd>Ne pas concevoir de contenu susceptible de provoquer des crises.</dd>
        <dt>2.4 Navigable :</dt>
        <dd>Fournir à l’utilisateur des éléments d’orientation pour naviguer, trouver le contenu et se situer dans le site.</dd>
        <dt>3.1 Lisible :</dt>
        <dd>Rendre le contenu textuel lisible et compréhensible.Prévisible : Faire en sorte que les pages apparaissent et fonctionnent de manière prévisible.</dd>
        <dt>3.2 Assistance à la saisie :</dt>
        <dd>Aider l’utilisateur à éviter et à corriger les erreurs de saisie.</dd>
        <dt>3.3 Assistance à la saisie :</dt>
        <dd>Aider l’utilisateur à éviter et à corriger les erreurs de saisie.</dd>
        <dt>4.1 Compatible :</dt>
        <dd>Optimiser la compatibilité avec les agents utilisateurs actuels et futurs, y compris les technologies d’assistance.</dd>
      </dl>
    </details>
    <details>
      <summary>
        <h3>Critères de succès</h3>
      </summary>
      <p>Pour chaque règle, on a établi des critères de succès qui décrivent de façon précise les mesures à prendre pour respecter la norme. Ils sont semblables aux « points à contrôler » indiqués dans les WCAG 1.0. Chaque critère de succès est un énoncé qui s’avérera vrai ou faux lorsqu’un contenu Web donné sera mis à l’essai. Les critères de succès sont formulés de sorte à être neutres sur le plan technologique.</p>
      <p>
        Tous les critères de succès contenus dans les WCAG 2.0 sont des énoncés testables qui permettent de déterminer de façon objective si le contenu répond aux critères. Certains tests sont effectués de façon automatisée au moyen de logiciels d’évaluation, alors que d’autres nécessitent l’intervention partielle ou totale d’une personne.<br>
        (<a href="http://www.w3.org/Translations/WCAG20-fr/#intro-layers-guidance" target="_blank">http://www.w3.org/Translations/WCAG20-fr/#intro-layers-guidance</a>)
      </p>
      <h3>Qu’entendons par les niveaux A, AA et AAA?</h3>Levels A, AA and AAA correspond to
      WCAG success criteria levels. In simplified terms, these levels mean:
      <ul type="square">
        <li>Sans le niveau A : il sera impossible pour certaines personnes d’accéder à la page</li>
        <li>Sans le niveau AA : il sera difficile pour certaines personnes d’accéder à la page</li>
        <li>Sans le niveau AAA : certaines personnes ne tireront pas pleinement profit de ce que la page peut offrir</li>
      </ul>
      <p>Pour que votre site atteigne le niveau AA, il doit respecter la norme établie pour le niveau A et le niveau AA</p>
    </details>
    <br>
    <footer>
      Source: <a href="http://www.csps-efpc.gc.ca/forlearners/coursesandprograms/CourseDetail-eng.aspx?courseno=T711" target="_blank">T710 – Les normes de l’accessibilité du Web du Gouvernement du Canada</a>
    </footer>
  </div>
</template>
