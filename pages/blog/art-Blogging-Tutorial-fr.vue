<template>
  <div id="articleContent" class="ajaxed-in">
    <script src="/lib/js/KalturaembedCodeGenerator-1.0.6.min.js" />

    <div id="kaltura_player_1430312140" class="col-md-12 ajaxed-in KalturaVideo" />
    <script>
      $(function() {
      $.getScript("//video.csps-efpc.gc.ca/p/1../../10100/embedIframeJs/uiconf_id/23448248/partner_id/101",
      function(data, textStatus, jqxhr) {
      kWidget.embed({
      "targetId": "kaltura_player_1430312140",
      "wid": "_101",
      "uiconf_id": "23448248",
      "flashvars": {},
      "cache_st": "1430312140 ",
      "entry_id": "0_bc6jau5j",
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
