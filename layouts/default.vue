<template>
  <div @load="getLang">
    <div class="topBar">
      <link href="https://fonts.googleapis.com/css?family=Lato|Noto+Sans&display=swap" rel="stylesheet">
      <span class="fip">
        <p>&nbsp;</p>
      </span>
      <span class="lang"><select v-model="lang" @change="setLang">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select></span>
    </div>
    <div class="row nomargin">
      <div class="col-md-12">
        <nuxt :lang="lang" />
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from '~/static/menu.js'
import lscStyle from '~/assets/IDSC_Content.css'
export default {
  head: {
    htmlAttrs: {
      lang: `en`
    },
    title: `CSPS Learning Support Centre - Centre de soutien d'apprentissage de l'EFPC`
  },
  data() {
    return {
      menu,
      lang: `en`
    }
  },
  computed: {
    styles() { return lscStyle }
  },

  methods: {
    setLang(e) {
      const val = e.target.value
      document.documentElement.lang = val
      this.$store.commit('switchLang', val)
      this.$router.push({ query: { lang: val } })
    },
    getLang() {
      const val = this.$route.query.lang
      document.documentElement.lang = val
      this.$store.commit('switchLang', val)
    }
  }
}

</script>
<style>
.nuxt-link-exact-active:before {content:'‣ ';
margin-left:-1em;}

#articleContent {
    padding: 3em;}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.fip {
  margin: 3px;
  width: 230px;
  height: 28px;
  float: left;
  background-repeat: no-repeat;
}

[lang=en] .fip {
  background-image: url('../assets/goc-fip-en.png');
}

[lang=fr] .fip {
  background-image: url('../assets/goc-fip-fr.png');
}

select,
option {
  background-color: black;
  border: 0px;
  color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.lang {
  float: right
}

.topBar {
  color: #fff;
  background-color: #000;
  box-shadow: 0px 0px 10px 5px #AAA;
  padding: .5px;
  height: 2.5em;
  width:100%;
}

.row.nomargin{margin-right: 0;
margin-left: 0;}

.page-enter-active, .page-leave-active {
  transition: opacity .25s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.KalturaVideo{
  height: 75vh;
}
</style>
