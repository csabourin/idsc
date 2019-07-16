<template>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Untitled Document</title>
      <script>
        $(function() {
        $( "#slider" ).slider({
        value:100,
        min: 0,
        max: 500,
        step: 50,
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
        }
        });
        $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
        });
      </script>
    </head>
    <body>
      <h4>Do you really need that  job-aid? Decision tool!</h4>
      <p>&nbsp;</p>
      <p>Sometimes a job-aid is not the best or  appropriate solution to meet our clients' needs. Avoid producing a useless  job-aid by first analyzing if the task in question is a good candidate for a  job-aid. The more you rate each characteristic with a Yes, the more a job-aid  is likely to be an appropriate solution to meet the need. </p>

      <p>
        <label for="amount">Donation amount ($50 increments):</label>
        <input id="amount" type="text" readonly style="border:0; color:#f6931f; font-weight:bold;">
      </p>

      <div id="slider" />
    </body>
  </html>
</template>
