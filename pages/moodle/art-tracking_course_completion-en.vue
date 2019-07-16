<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Tracking Course Completion in Moodle</h2>
    <p>
      In order to track course completion in Moodle, you first need to enable the feature in your course settings. This will allow tracking
      the course completion using different conditionals.
    </p>
    <h3>enabling Tracking feature</h3>
    <p>First go to your course <strong>settings</strong>.</p>
    <p><img id="Picture 2" src="~/assets/moodle/tracking_course_completion_in_moodle-en_001.jpg" alt=""></p>
    <p>Scroll down to the <strong>Completion Tracking</strong> section and set it to YeS.</p>
    <p><img id="Picture 1" src="~/assets/moodle/tracking_course_completion_in_moodle-en_002.png" alt=""></p>
    <p><strong>Save</strong> the changes.</p>
    <p>A new item called <strong>Course completion</strong> will appear in the Course administration menu.</p>
    <p><img id="Picture 3" src="~/assets/moodle/tracking_course_completion_in_moodle-en_003.png" alt=""></p>
    <h3>Setting course completion conditions</h3>
    <p>
      The <strong>Course completion</strong> page allows you to set the <strong>conditions required</strong> to mark the course as completed.
      Below is a short description of how each condition can be used to determine if the course is complete. You can use combined multiple
      conditions or simply use one.
    </p>
    <h3>Activity Completion</h3>
    <p>
      To use track course completion based on one or more activity completion, you need to enable the completion tracking on the activity's
      setting. Once the completion setting on the activity is activated it will appear on the list.
    </p>
    <dl class="dl-horizontal">
      <dt>Completion of other courses</dt>
      <dd>The learner has to complete other courses in order to have the current course marked as completed.</dd>
      <dt>Date</dt>
      <dd>The learner will be marked as completed after a set date.</dd>
      <dt>enrolment duration</dt>
      <dd>The learner will be marked as completed after a specified number of days of being enrolled in the course.</dd>
      <dt>Unenrolment</dt>
      <dd>The learner will be marked as completed when they withdraw themself from the course.</dd>
      <dt>Course grade</dt>
      <dd>The learner will be marked as completed if they reach the specified course graded.</dd>
      <dt>Manual Self Completed</dt>
      <dd>The learner will have the ability to mark themself as completed.</dd>
      <dt>Manual Completion by others</dt>
      <dd>
        Only users with the specified role (such as a course Manager, teacher or non-editing teacher) can mark the learner as having completed
        the course. This is done via the Course Completion Report.
      </dd>
    </dl>
    <h3>FAQ</h3>
    <details>
      <summary>
        <h4>Should my Moodle course be tracked in ILMS?</h4>
      </summary>
      <p>We recommend that all courses be tracked in ILMS. Tracking your course in ILMS has multiple advantages such as:</p>
      <ul>
        <li>The course will appear in the Learner's transcript and they will be able to re-access it from there. </li>
        <li>Possibility to report on how many learners have registered and completed the course.</li>
        <li>Learners will be able to register to the course offering by themselves.</li>
        <li>The course can be part of a certification in ILMS.</li>
      </ul>
    </details>
    <details>
      <summary>
        <h4>Where can I get a list of all learners who have completed my course?</h4>
      </summary>
      <p>
        You can use the Course Completion Report to see who has been marked as having completed the course. You will see if they completed
        each of the conditions required to complete the course.
      </p>
    </details>
    <details>
      <summary>
        <h4>How do ILMS and Moodle work together to track completion?</h4>
      </summary>
      <p>When the learner has completed the course, Moodle will send a message to ILMS indicating that the course was completed. The course will then be marked as completed in the learner's transcript. To use this function , your Moodle course will need to be mapped to a course offering in ILMS.  Prior to launch, send the Moodle URL and ILMS offering number to LMS Service Ops and request the mapping.</p>
      <p>Note that there might be a slight delay before the user sees the course marked as completed in their transcript.</p>
    </details>
    <details>
      <summary>
        <h4>What happens to the learner's access once he completed the course?</h4>
      </summary>
      <p>Your requirements, determine whether the user remains enrolled in the Moodle course allowing them to refer to the content or, whether the learner's access to the course ends upon completion.  (For example; as part of a multi-phase program). Discuss your options with your business analyst and the ILMS Business Ops team to ensure everything is set up according to your requirements.</p>
    </details>
    <h3>For more information</h3>
    <p>
      Visit the <a href="//docs.moodle.org/29/en/Tracking_progress" target="_blank">Moodle.org</a> site to learn more on how you can track completion
      in Moodle.
    </p>
  </div>
</template>
