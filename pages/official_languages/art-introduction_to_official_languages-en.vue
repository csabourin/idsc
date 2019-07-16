<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Introduction to Official Languages</h2>
    <p>
      <img alt="Picture of team holding a cardboard with the words 'Français' and 'english' equally balanced" class="pull-right" src="~/assets/official_languages/GCcampus_OFFICIAL-LANGUAGeS_march_2015_en.jpg">
      To fulfil its obligations under Blueprint&nbsp;2020, the School is working to implement a training approach that favours new ways of delivering training to public servants; that is, online learning, workshops, forums such as GCconnex, GCpedia, and other social media.
    </p>
    <p>Going forward, we will favour training methods that offer greater flexibility to learners and that are based more on collaboration and networking as well as informal exchanges on social media, where useful resources are shared. This more open and informal context, however, entails challenges for the School in terms of its official languages obligations: how can we continue to ensure high-quality, bilingual products for our clients? The Official Languages Committee understands that it will have a key role to play in this transition and that it must be in a position to support instructional designers in respecting the School's official languages obligations.</p>
    <p>This information is intended for instructional designers to be aware of the School's official languages obligations and to guide them in developing the tools that will populate its learning ecosystem.</p>

    <section>
      <div class="row">
        <div class="col-xs-12 clearfix">
          <header>
            <h3>Learning ecosystem</h3>
            <br><br><br>
          </header>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div id="ecoParent">
              <div class="DashedCircle hidden-sm hidden-xs" />
              <div class="ContourCircle hidden-sm hidden-xs" />
              <div class="gOn-valign text-center">
                <img src="~/assets/official_languages/ecosystem_4.png">Learning ecosystem
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
      <li><p>events, workshops, Webcasts, Webinars</p></li>
      <li><p>Virtual Classrooms</p></li>
      <li><p>Self-paced<br>Online</p></li>
      <li><p>Online Resources<br><small><em>(Videos, Best Practices, Commercial Products)</em></small></p></li>
      <li><p>Classroom</p></li>
      <li><p>Mobile Learning</p></li>
      <li>
        <p class="text-right">
          Crowd&nbsp;/ Social Learning<br><small><em>(Blogs, Forums, Open Content)</em></small>
        </p>
      </li>
      <li><p>Job Aids</p></li>
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
