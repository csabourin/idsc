<template>
  <div id="articleContent" class="ajaxed-in">
    <script type="text/javascript" src="../../js/contentreload.js" />

    <script src="/lib/js/KalturaEmbedCodeGenerator-1.0.6.min.js" />

    <h2 style="text-align:center">
      Se brancher à une session VC
    </h2>

    <div id="kaltura_player_1471456389" class="col-md-12 ajaxed-in KalturaVideo" />
    <script>
      $(function() {
      $.getScript("//video.csps-efpc.gc.ca/p/1../../10100/embedIframeJs/uiconf_id/23448245/partner_id/101",
      function(data, textStatus, jqxhr) {
      kWidget.embed({
      "targetId": "kaltura_player_1471456389",
      "wid": "_101",
      "uiconf_id": "23448245",
      "flashvars": {},
      "cache_st": "1471456389 ",
      "entry_id": "0_zkx692ea",
      flashvars: {
      "localizationCode" : "fr"
      }
      });
      });
      });
      $(function() {});
    </script>
  </div>
</template>
