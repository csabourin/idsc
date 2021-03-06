<?xml version="1.0" encoding="utf-16"?>
<?xml-stylesheet type='text/xsl' href='#test'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>EC - Download To Desktop Results File</title>
        <style type="text/css">
          body
          {
          background-color: #FFFFE6;
          color: #000000;
          font-family: Calibri, tahoma, arial, sans-serif;
          font-size: 10pt;
          }

          .title
          {
          padding: 2px 4px 2px 4px;
          width: 100%;
          border: 1px solid #C0C0C0;
          background-color: #0066CC;
          color: #FFFFCC;
          font-size: 20pt;
          font-weight: bold;
          }

          .tabletitle
          {
          font-size: 14pt;
          font-weight: bolder;
          color: #FFFFCC;
          background-color: #0066CC;
          padding: 4px 4px 4px 4px;
          }

          .doctable
          {
          width: 100%;
          font-size: 10pt;
          }

          .doctable th
          {
          padding: 4px;
          background-color: #0066CC;
          color: #FFFFCC;
          font-weight: bold;
          }

          .doctable td
          {
          padding: 2px 4px 2px 4px;
          }

          .error
          {
          color: red;
          }
          .errorpath
          {
          color: blue;
          }
          .errorline
          {
          background-color: #FDACB8;
          }
          .hideline
          {
          visibility: hidden;
          display: none;
          }
          .showline
          {
          visibility: visible;
          }

          .radiobuttons
          {
          padding-bottom: 6px;
          padding-left: 6px;
          padding-top: 10px;
          }

          .doc
          {
          background-image: url(data:image/gif;base64,R0lGODlhEAAQAOZpAP///5SU/1VV1ZGO/4yM/7sAAPHw9P7//1lX1ev//5WR/+n//5qY/46N/6am/pOP//f//5KO/+X//1hW1Y6I/5mX/5eV//L//8j5/6ur/sby/8ny////Aeb//5iV//3///8fACWz/1hY2Y2I//8UAMr5/6en/lZV1fr///96LfLBbf+lWO///8H//4iG/6Oo/v+SVsLD/8n//5GK/42N/1tX1Y2H/9f+/6Wl//n//+3//8fN/6mp/5mZ/9b9/5iX/8jz////QJKK/5WY+Pb///z///K+Z7Ky/2ho2ltY1ff13aKi/+z//9n+/+T//7cAAJib+YeF/4yH/2Bg29H+/+j//1RU1fj//5WV/4SD/w6g/9T8/+bRps38/7zA/4WE/9f8/66u/9X9/93d/9f//4OD//D///+1hldW1fX09AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGkALAAAAAAQABAAQAe0gGmCg4SFgx5XRSg5EGYXLDpMCRODAQCXmABel0cZgwxgTT5iW0AqXEpGGDWVmZhjYQ4GhBauAAe3Bx8ngxVVCQsdEmQkMCsgNwittpkCg0sB0dIBPSazhJZlBNtZADEAPLKDWABfNA0NUQA7Q1AvU4O1LgP09BERUhBogz9ENg8PKCx4UqCgBEqCKjiZoUCBECopgnA400WZIAYlRtCjsCFECxlaNCQZhEOEFQEoU6ZEkiYQADs=);
          }
          .fol
          {
          background-image: url(data:image/gif;base64,R0lGODlhEAAQAOZ4AJRVAP//y9WVANWZAP/ZAP//of//oNWYAP/bAP/qG///ZP/QAP/AAP//xuK7Uv/eAP/UAP/+V5VVAP/fAP/PAP//o///zdWXAOa+Uv//Xf/jBv/pFv//lP/8UP/rH/++AP/NAP69AP/dAP/oE//KAPy7AP//af/lC//2Pf/LAPa1AP/tCdSXAP/9ONaaAP//Z//hAP//nP/cAP/zNv//dP/xMf//p//sIv//YP/4O///a//YAP/kAPOzAP//X//RAP//b5RWAPq6AP//gP/iAv/qGNebAJVYAPm5AP//m5dbAJRUAP//mf28AP/mDv//iPTw6f//jP/5Sf/pGf//j//9VP/tJv/3Qf/vKf/wGpldAJVZAJRXAP/IAPm6AP//k/e3AP/VAP/4RP/XAJRYAP/SAP/EAO2+Ef/wLvW0ALuTUv/JAP/+Vv/OAP/rGf/tJf/9Vf/qDZlYAP//W//1Ov/6TNSTAP/DAPX09AAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAHgALAAAAAAQABAAQAe/gHiCg4SFeAIVHFRRT0M0QDovCjgKQYdJBgYFBnZQhoIDCGEQZT8LFG0gKSRrC1ufsIIHWUVuCVM8BLq6CA9aeAc5NWhYVjceCRsjTicrZIcNFgHT1NQWDRKxsA4C3d0OsRcZcGwRPmcsA+rrGHhGDHddFBBvXzYVBTFMBQB4FyZzIlTpUEeKmCso6MxowQVYHA1EYEx4IEIGAgI7xkw4gseFGQYfQjQpIQQJGBVpenhRggeDnCUAYsqcKUENnkAAOw==);
          }

          .doc, .fol
          {
          background-position: center center;
          background-repeat: no-repeat;
          }

          .doc span, .fol span
          {
          visibility: hidden;
          }
        </style>
        <xsl:call-template name="TheScript">
        </xsl:call-template>
      </head>
      <body>
        <div class="title">EC - Download To Desktop Results</div>
        <div class="radiobuttons">
          Display Method:  
          <input id="Radio1" type="radio" name="ShowType" title="Show All" value="1" checked="checked" onclick="ShowHideGood(true);">Show All   </input> 
          <input id="Radio2" type="radio" name="ShowType" title="Show Errors Only" value="2" onclick="ShowHideGood(false);">Show Errors Only</input>
        </div>
        <table border="1" cellpadding="0" cellspacing="0" class="doctable">
          <tr class="tabletitle">
            <th>Type</th>
            <th>Name</th>
            <th>Original Name</th>
            <th>Parent Path</th>
            <th>Status</th>
          </tr>
          <xsl:call-template name="EC-Download"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template name="EC-Download">
    <xsl:for-each select="EC-Download">
      <xsl:call-template name="ContainerDocs">
      </xsl:call-template>
      <xsl:call-template name="ContainerFolders">
      </xsl:call-template>
    </xsl:for-each>
  </xsl:template>

  <xsl:template name="ContainerFolders">
    <xsl:for-each select="Container">
      <xsl:variable name="IsError" select="(@Status != 'Successful')"></xsl:variable>
      <xsl:element name="tr">
        <xsl:attribute name="valign">top</xsl:attribute>
        <xsl:if test="$IsError">
          <xsl:attribute name="class">errorline</xsl:attribute>
        </xsl:if>
        <xsl:if test="not($IsError)">
          <xsl:attribute name="class">showline</xsl:attribute>
          <xsl:attribute name="id">FolRow_<xsl:value-of select="@ID"/></xsl:attribute>
        </xsl:if>
        <td align="center" class="fol">
          <span>Fol</span>
        </td>
        <td>
          <xsl:value-of select="@Name"/> 
        </td>
        <td>
          <xsl:value-of select="@OriginalName"/> 
        </td>
        <td>
          <xsl:for-each select="ancestor::Container">
            <xsl:value-of select="@Name"/>/
          </xsl:for-each> 
        </td>
        <td>
          <xsl:call-template name="StatusLine">
          </xsl:call-template>
        </td>
      </xsl:element>
      <xsl:call-template name="ContainerDocs">
      </xsl:call-template>
      <xsl:call-template name="ContainerFolders">
      </xsl:call-template>
    </xsl:for-each>
  </xsl:template>


  <xsl:template name="ContainerDocs">
    <xsl:for-each select="Document">
      <xsl:variable name="IsError" select="(@Status != 'Successful')"></xsl:variable>
      <xsl:element name="tr">
        <xsl:attribute name="valign">top</xsl:attribute>
        <xsl:if test="$IsError">
          <xsl:attribute name="class">errorline</xsl:attribute>
        </xsl:if>
        <xsl:if test="not($IsError)">
          <xsl:attribute name="class">showline</xsl:attribute>
          <xsl:attribute name="id">DocRow_<xsl:value-of select="@ID"/></xsl:attribute>
        </xsl:if>
        <td align="center" class="doc">
          <span>Doc</span>
        </td>
        <td>
          <xsl:value-of select="@Name"/>
        </td>
        <td>
          <xsl:value-of select="@OriginalName"/> 
        </td>
        <td>
          <xsl:for-each select="ancestor::Container">
            <xsl:value-of select="@Name"/>/
          </xsl:for-each> 
        </td>
        <td>
          <xsl:call-template name="StatusLine">
          </xsl:call-template>
        </td>
      </xsl:element>
    </xsl:for-each>
  </xsl:template>

  
  <xsl:template name="StatusLine">
    <xsl:variable name="IsError" select="(@Status != 'Successful')"></xsl:variable>
    <xsl:if test="$IsError">
      <xsl:variable name="Part1" select="substring-before(@Status, '|~|')"></xsl:variable>
      <xsl:variable name="Part2" select="substring-after(@Status, '|~|')"></xsl:variable>
      <xsl:variable name="Part21" select="substring-before($Part2, '|~|')"></xsl:variable>
      <xsl:variable name="Part22" select="substring-after($Part2, '|~|')"></xsl:variable>
      <xsl:variable name="Part221" select="substring-before($Part22, '|~|')"></xsl:variable>

      <div class="error">
        <xsl:if test="string-length($Part1) > 0">
          <xsl:value-of select="$Part1"/>
        </xsl:if>
        <xsl:if test="string-length($Part1) = 0">
          <xsl:value-of select="@Status"/>
        </xsl:if>
      </div>
      <div class="errorpath">
        <xsl:value-of select="$Part21"/>
      </div>
      <div class="error">
        <xsl:value-of select="$Part221"/>
      </div>
    </xsl:if>
    <xsl:if test="not($IsError)">
      <xsl:value-of select="@Status"/>
    </xsl:if>
  </xsl:template>
  
  
  <xsl:template name="TheScript">
    <script type="text/javascript">
      var GoodItems = [
      <xsl:for-each select="EC-Download//Container">
        <xsl:variable name="IsError" select="(@Status != 'Successful')"></xsl:variable>
        <xsl:if test="not($IsError)">
          'FolRow_<xsl:value-of select="@ID"/>',
        </xsl:if>
      </xsl:for-each>
      <xsl:for-each select="EC-Download//Document">
        <xsl:variable name="IsError" select="(@Status != 'Successful')"></xsl:variable>
        <xsl:if test="not($IsError)">
          'DocRow_<xsl:value-of select="@ID"/>',
        </xsl:if>
      </xsl:for-each>
      'Dummy' ];

      function ShowHideGood(show)
      {
        for (var i = 0; i &lt; GoodItems.length; i++)
        {
          var rowToShowHide = document.getElementById(GoodItems[i]);
          if (rowToShowHide != null)
          {
            if(show)
              rowToShowHide.className = "showline";
            else
              rowToShowHide.className = "hideline";
          }
        }
      }
    </script>
  </xsl:template>
</xsl:stylesheet>
