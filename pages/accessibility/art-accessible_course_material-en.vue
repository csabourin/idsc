<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Accessible course material</h2>
    <p>
      Accessibility compliance does not only apply to Web content – it also applies to any course material CSPS employees design, develop
      and distribute. Microsoft Office and PDF documents can be accessible but there are steps you need to take to ensure they are. Once you
      have developed the final version of your course material, it should be sent to <a href="mailto:csps.learningservicerequest-demandeserviceapprentissage.efpc@canada.ca" class="nobr">Learning Technologies and Services</a> for more
      robust compliance testing.
    </p>
    <h3>Designing accessible course material</h3>
    <p>
      There are certain design principles that you should adhere to for course material. Below are best practices to keep in mind for
      Microsoft Office and PDF documents.
    </p>
    <h4>Microsoft Office documents:</h4>
    <ul>
      <li>Use heading styles (H1, H2, H3, etc.).</li>
      <li>Use lists (bulleted, numbered and/or multi-level). Don't insert dashes and numbers manually.</li>
      <li>Create a table of contents if your document is longer than 3 pages.</li>
      <li>Do not justify your text. Left-align paragraphs.</li>
      <li>Use sans serif fonts.</li>
      <li>Do not use font sizes smaller than 12 points.</li>
      <li>Only underline links.</li>
      <li>Ensure there is a good contrast ratio between your background and text.</li>
      <li>Do not make any content colour or shape dependant (i.e. the example in green is correct/ the example in red is incorrect).</li>
      <li>Use tables for data – not for cosmetic enhancements to content.</li>
      <li>
        Add text descriptions to all images of importance. To add text descriptions, right-click on your image, select <strong>Format
          picture</strong>, and select <strong>Alt text</strong>.
      </li>
    </ul>
    <h4>PDF documents</h4>
    <ul>
      <li>Identify the language setting for your PDF. Go to <strong>File</strong> &gt;<strong>Properties</strong> &gt;<strong>Advanced</strong> to select a language.</li>
      <li>
        Make sure text is searchable. Scanned documents are not accessible as their text is not searchable. Scans produce images of
        text only.
      </li>
      <li>Add interactive labels for any PDF form fields.</li>
      <li>
        Add descriptive text, if missing, for any images or form fields. When creating a PDF from an accessible Office document,
        descriptive text will generally be exported to the PDF document.
      </li>
      <li>Remove or modify any empty tags in your PDF.</li>
    </ul>
    <p>Visit the following online resources for more details on these best practices:</p>
    <ul>
      <li>
        <a href="http://www.gov.uk/service-manual/user-centred-design/resources/creating-accessible-PDFs.html#in-microsoft-word" target="_blank">User&mdash;centered
          design</a>
      </li>
      <li> <a href="http://www.w3.org/TR/WCAG20-TECHS/pdf.html" target="_blank">PDF Techniques for WCAG 2.0</a> </li>
    </ul>
    <h3>Testing accessibility in Microsoft Office applications </h3>
    <p>To test for accessibility issues in Word, PowerPoint and Excel applications:</p>
    <ol>
      <li>Open the document you wish to test</li>
      <li>In the <strong>File</strong> menu, select <strong>Info</strong></li>
      <li>Click <strong>Check for issues</strong>, and then click <strong>Check accessibility</strong></li>
      <li>View the <strong>Inspection Results</strong> errors, warnings and tips which appear on the right-hand pane of your screen</li>
      <li>Click on each error or warning in order to view its details and steps to fix it</li>
      <li>Correct each issue, and then repeat steps 1-3 until no errors or warnings are issued.</li>
    </ol>
    <p>
      For more information on Microsoft Office's accessibility checker and how to fix issues, visit these support pages:
      <ul>
        <li> <a href="//support.office.com/en-us/article/Creating-accessible-Word-documents-d9bf3683-87ac-47ea-b91a-78dcacb3c66d?CorrelationId=f56e74d3-879b-498e-b597-ab5326607785&ui=en-US&rs=en-US&ad=US" target="_blank"> Creating accessible Word documents</a> </li>
        <li> <a href="//support.office.com/en-us/article/Check-for-accessibility-issues-a16f6de0-2f39-4a2b-8bd8-5ad801426c7f?CTT=5&origin=HA101999993&CorrelationId=e9297554-c0e5-428d-ab48-384686a46564&ui=en-US&rs=en-US&ad=US" target="_blank"> Check for accessibility issues</a> </li>
        <li> <a href="//support.office.com/en-us/article/Rules-used-by-the-Accessibility-Checker-651e08f2-0fc3-4e10-aaca-74b4a67101c1?CTT=5&origin=HA101999993&CorrelationId=60021480-d58f-4f41-a93b-921bf513a805&ui=en-US&rs=en-US&ad=US" target="_blank"> Rules used by the accessibility checker</a> </li>
      </ul>
    </p><h3>Testing accessibility of PDF documents</h3>
    <ol>
      <li>Prior to converting your document to PDF format, ensure that your source document and/or content are accessible.</li>
      <li>
        In Word, PowerPoint or Excel, go to <strong>Acrobat</strong>&gt; <strong>Preferences</strong>. Checkmark the following options:
        Create bookmarks, Add links, Enables accessibility and reflow with tagged Adobe PDF.
      </li>
      <li>Click <strong>OK</strong>, then go to <strong>File</strong> &gt;<strong>Save as Adobe PDF</strong>.</li>
      <li>
        Once you have converted your document to a PDF format, in Adobe Acrobat Standard, validate its accessibility again by selecting <strong>View &gt;Tools&gt; Accessibility</strong>. Click on <strong>Set-up assistant</strong> to assign the accessibility settings
        for your PDF. (Note: Adobe accessibility checker tools comply with 508 compliance standards which are lower than WCAG 2.0
        standards. Use WCAG 2.0 testing tools for more robust validation.)
      </li>
      <li>
        Once you have assigned the proper accessibility settings, you can test your document using the Adobe Accessibility Checker if
        you are using Adobe XI Pro. If you are using Adobe XI Standard, you can use the following tools to test your PDF:
      </li>
    </ol>
    <ul>
      <li>
        <a href="http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html" target="_blank">PAC PDF Accessibility
          Checker</a>
      </li>
      <li><a href="//accessibility.tingtun.no/en/tests/PDF/>" target="_blank">eAccessibility Tests</a></li>
      <li> <a href="//www.nvaccess.org/" target="_blank">NVDA Screen Reader</a> (Open source) </li>
    </ul>
    <p>For more information on creating accessible PDF documents, the following online resources are recommended to you:</p>
    <ul>
      <li> <a href="//support.office.com/en-us/article/Create-accessible-PDFs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed?CorrelationId=4bbad5c9-b745-4f70-9a6d-3166368cff86&ui=en-US&rs=en-US&ad=US" target="_blank"> Create accessible PDFs</a> </li>
      <li>
        <a href="http://www.adobe.com/content/dam/Adobe/en/accessibility/products/acrobat/pdfs/acrobat-xi-pdf-accessibility-overview.pdf" target="_blank">PDF
          accessibility overview</a>
      </li>
      <li>
        <a href="http://wwwimages.adobe.com/content/dam/Adobe/en/accessibility/products/acrobat/pdfs/acrobat-xi-accessible-forms.pdf" target="_blank">Acrobat
          XI Pro Accessible Forms and Interactive Documents</a>
      </li>
      <li> <a href="//wwwimages.adobe.com/content/dam/Adobe/en/accessibility/products/acrobat/pdfs/acrobat-xi-pro-accessibility-best-practice-guide.pdf" target="_blank"> Acrobat XI Pro Best Practices for PDF Accessibility</a> </li>
      <li>
        <a href="//blogs.adobe.com/accessibility/2012/01/wcag-2-0-techniques-for-pdf.html" target="_blank">Adobe WCAG 2.0 Level A &amp; AA success
          criteria for PDFs</a>
      </li>
      <li>
        <a href="//webguide.gov.au/accessibility-usability/accessibility/pdf-accessibility/" target="_blank">Australian Government's Guide to PDF
          accessibility</a>
      </li>
      <li><span class="glyphicon glyphicon-film" /><a href="//support.office.com/en-us/article/Video-Find-and-fix-accessibility-issues-in-Word-2010-d1dee0af-8cea-40a4-aa1f-4e8b932025f5?CorrelationId=cfa19312-d427-4b98-a2f7-7a62719b7fae&ui=en-US&rs=en-US&ad=US" target="new"> Video: Find and fix accessibility issues in Word 2010</a> </li>
    </ul>
  </div>
</template>
