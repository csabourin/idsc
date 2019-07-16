<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Designing for accessibility</h2>
    <p>
      Though your role as an instructional designer does not require the
      ability to program content in HTML, you still play an important part in the
      accessibility of your content design or in the development of course
      material. Below is a simplified overview of methods for accessible content
      design.
    </p>
    <h3>Principles of Accessible Content Design</h3>
    <ul type="square">
      <li>Provide appropriate alternative text</li>
      <li>Provide headings for data tables</li>
      <li>Ensure users can complete and submit all forms</li>
      <li>Ensure links make sense out of context</li>
      <li>Caption or provide transcripts for media</li>
      <li>Ensure accessibility of non-HTML content (PDF, Word, Flash)</li>
      <li>Allow users to skip repetitive elements on the page</li>
      <li>Do not rely on colour alone to convey meaning or instruction</li>
      <li>Make sure content is clearly written and easy to read</li>
      <li>Make JavaScript accessible</li>
      <li>Design to standards</li>
    </ul>
    <h4>Images</h4>
    <ul type="square">
      <li>Use alternate text (&lt;alt&gt; attribute)</li>
      <li>Describe what image shows or what it represents</li>
      <li>If image is a link describe the destination</li>
      <li>Decorative images – leave alternate text blank (alt="")</li>
    </ul>
    <h4>Background Images</h4>
    <ul type="square">
      <li>No alternate text</li>
      <li>Will not be voiced so meaning is not conveyed</li>
    </ul>
    <h4>Links</h4>
    <ul type="square">
      <li>Ensure that destination is clear from the link</li>
      <li>If link opens new tab or window inform the user</li>
      <li>Avoid redundant &lt;title&gt; attributes</li>
    </ul>
    <h4>Headings</h4>
    <ul type="square">
      <li>Often used as navigation mechanism by screen reader users</li>
      <li>Break up content into more manageable chunks</li>
      <li>Try to nest correctly</li>
      <li>Useful for Search Engine Optimization (SEO)</li>
    </ul>
    <h4>Text</h4>
    <ul type="square">
      <li>Not too small</li>
      <li>Good colour contrast</li>
      <li>
        Should allow itself to be resized without breaking layout
        (initially)
      </li>
      <li>Avoid justification</li>
      <li>Colour and meaning</li>
    </ul>
    <h4>Lists</h4>
    <ul type="square">
      <li>If it's a list of items – mark it up as a list</li>
    </ul>
    <h4>Video</h4>
    <ul type="square">
      <li>Avoid auto-start</li>
      <li>Add captions</li>
      <li>Provide text equivalent</li>
    </ul>
    <h4>Keyboard Focus</h4>
    <ul type="square">
      <li>Should be easily visible</li>
      <li>Tab order should make sense</li>
      <li>Ensure all functionality accessible by keystrokes (e.g. dropdown menus)</li>
    </ul>
    <footer>
      Source: <a
        href="http://www.csps-efpc.gc.ca/forlearners/coursesandprograms/CourseDetail-eng.aspx?courseno=T711"
        target="_blank"
      > T711 – Web Accessibility Basics, Canada School of Public Service</a>
    </footer>
  </div>
</template>
