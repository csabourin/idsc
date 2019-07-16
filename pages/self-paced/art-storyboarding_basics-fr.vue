<template>
  <div id="articleContent" class="ajaxed-in">
    <script src="/lib/js/KalturaembedCodeGenerator-1.0.6.min.js" />
    <div id="kaltura_player_1435936545" class="col-md-12 ajaxed-in KalturaVideo" />
    <script>
      $(function() {
      $.getScript("//video.csps-efpc.gc.ca/p/1../../10100/embedIframeJs/uiconf_id/23448245/partner_id/101",
      function(data, textStatus, jqxhr) {
      kWidget.embed({
      "targetId": "kaltura_player_1435936545",
      "wid": "_101",
      "uiconf_id": "23448245",
      "flashvars": {},
      "cache_st": "1436992161 ",
      "entry_id": "0_9f3fp3ui",
      flashvars: {
      "localizationCode": "fr"
      }
      });
      });
      });
      $(function() {});
    </script>
  </div>
</template>
