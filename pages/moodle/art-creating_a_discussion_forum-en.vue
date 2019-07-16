<template>
  <div id="articleContent" class="ajaxed-in">
    <script type="text/javascript" src="../../js/contentreload.js" />
    <script src="/lib/js/KalturaEmbedCodeGenerator-1.0.6.min.js" />

    <div id="kaltura_player_1430311983" class="col-md-12 ajaxed-in KalturaVideo" />
    <script>
      $(function() {
      $.getScript("//video.csps-efpc.gc.ca/p/1../../10100/embedIframeJs/uiconf_id/23448244/partner_id/101",
      function(data, textStatus, jqxhr) {
      kWidget.embed({
      "targetId": "kaltura_player_1430311983",
      "wid": "_101",
      "uiconf_id": "23448244",
      "flashvars": {},
      "cache_st": "1430311983 ",
      "entry_id": "0_ckz19zo9",
      flashvars: {
      "localizationCode" : "en"
      }
      });
      });
      });
      $(function() {});
    </script>
  </div>
  </div>
</template>
