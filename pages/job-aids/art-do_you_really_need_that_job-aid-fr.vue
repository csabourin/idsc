<template>
  <div id="articleContent" class="ajaxed-in">
    <h2>Avez-vous vraiment besoin<br>d&rsquo;un outil de travail&nbsp;? <span data-pop="Outil d&rsquo;aide &agrave; la d&eacute;cision!" /></h2>
    <p>
      Parfois un outil de travail n&rsquo;est pas la meilleure solution pour les
      besoins de nos clients.&nbsp; &eacute;vitez le d&eacute;veloppement d&rsquo;un
      outil inutile en analysant, en premier lieu, si la t&acirc;che en question sera
      un bon candidat pour un outil de travail. Le plus vous r&eacute;pondez Oui
      &agrave; chacune des caract&eacute;ristiques ci-dessous, le plus un outil de
      travail peut &ecirc;tre une solution appropri&eacute;e pour r&eacute;pondre au
      besoin.
    </p>
    <div class="row">
      <div class="col-md-3">
        <p id="t1">
          Fr&eacute;quence de la t&acirc;che
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t1" @click="decr('p1');">
          Souvent
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p1" :value="p1" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t1" @click="incr('p1');">
          Rarement
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <p id="t2">
          Nombre d&rsquo;&eacute;tapes
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t2" @click="decr('p2');">
          Peu
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p2" :value="p2" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t2" @click="incr('p2');">
          Beaucoup
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <p id="t3">
          Complexit&eacute; de la t&acirc;che
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t3" @click="decr('p3');">
          Facile
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p3" :value="p3" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t3" @click="incr('p3');">
          Difficile
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <p id="t4">
          Rapidit&eacute; de la t&acirc;che
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t4" @click="decr('p4');">
          N/A
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p4" :value="p4" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t4" @click="incr('p4');">
          Important
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <p id="t5">
          Impact en cas d&rsquo;erreur
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t5" @click="decr('p5');">
          Mineur
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p5" :value="p5" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t5" @click="incr('p5');">
          S&eacute;rieux
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <p id="t6">
          Changements de t&acirc;che
        </p>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t6" @click="decr('p6');">
          Jamais
        </button>
      </div>
      <div class="col-md-3">
        <progress id="p6" :value="p6" max="10">
          50%
        </progress>
      </div>
      <div class="col-md-3">
        <button aria-labelledby="t6" @click="incr('p6');">
          Souvent
        </button>
      </div>
    </div>
    <h1>{{ total }}</h1>
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
      if (threshold > 36) { return 'Oui' } else { return 'Non' }
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
