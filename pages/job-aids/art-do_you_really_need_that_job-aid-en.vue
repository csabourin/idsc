<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Do you really need that  job-aid? <span data-pop="Decision tool!" /></h2>
    <p>Sometimes a job-aid is not the best or  appropriate solution to meet our clients' needs. Avoid producing a useless  job-aid by first analyzing if the task in question is a good candidate for a  job-aid. The more you rate each characteristic with a Yes, the more a job-aid  is likely to be an appropriate solution to meet the need.</p>
    <table class="table">
      <tr>
        <td />
        <th />
        <th><h1>{{ total }}</h1></th>
        <th />
      </tr>
      <tr>
        <td>
          <p id="t1">
            Frequency of task
          </p>
        </td>
        <td>
          <button aria-labelledby="t1" @click="decr('p1');">
            Often
          </button>
        </td>
        <td>
          <progress id="p1" :value="p1" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t1" @click="incr('p1');">
            Rarely
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p id="t2">
            Number of steps
          </p>
        </td>
        <td>
          <button aria-labelledby="t2" @click="decr('p2');">
            Few
          </button>
        </td>
        <td>
          <progress id="p2" :value="p2" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t2" @click="incr('p2');">
            Many
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p id="t3">
            Complexity of task
          </p>
        </td>
        <td>
          <button aria-labelledby="t3" @click="decr('p3');">
            Easy
          </button>
        </td>
        <td>
          <progress id="p3" :value="p3" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t3" @click="incr('p3');">
            Difficult
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p id="t4">
            Speed of task
          </p>
        </td>
        <td>
          <button aria-labelledby="t4" @click="decr('p4');">
            N/A
          </button>
        </td>
        <td>
          <progress id="p4" :value="p4" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t4" @click="incr('p4');">
            Important
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p id="t5">
            Impact of error
          </p>
        </td>
        <td>
          <button aria-labelledby="t5" @click="decr('p5');">
            Minor
          </button>
        </td>
        <td>
          <progress id="p5" :value="p5" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t5" @click="incr('p5');">
            Serious
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p id="t6">
            Task change
          </p>
        </td>
        <td>
          <button aria-labelledby="t6" @click="decr('p6');">
            Never
          </button>
        </td>
        <td>
          <progress id="p6" :value="p6" max="10">
            50%
          </progress>
        </td>
        <td>
          <button aria-labelledby="t6" @click="incr('p6');">
            Often
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script language="JavaScript">
export default {
  data: function () {
    return {
      p1: 3,
      p2: 3,
      p3: 3,
      p4: 3,
      p5: 3,
      p6: 3
    }
  },
  computed: {
    total: function () {
      const threshold = this.p1 + this.p2 + this.p3 + this.p4 + this.p5 + this.p6
      if (threshold > 36) { return 'Yes' } else { return 'No' }
    }

  },
  methods: {
    incr(me) {
      this[me] = this[me] < 10 ? this[me] + 1 : this[me]
    },

    decr(me) {
      this[me] = this[me] > 0 ? this[me] - 1 : this[me]
    } } }
</script>
