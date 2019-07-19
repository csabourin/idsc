<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ SupportCentre[lang] }}
      </h1>
      <h2 class="subtitle">
        {{ forID[lang] }}
      </h2>
      <div class="row">
        <div
          v-for="(item, index) in menu"
          :key="index"
          visible
          role="tabpanel"
          class="menuItem col-md-4"
        >
          <b-button v-b-toggle="'accordion-' + index" variant="light" class="col-md-12">
            {{ item.name[lang] }}           </b-button>
          <b-collapse :id="'accordion-'+ index" accordion="my-accordion" role="tabpanel">
            <ul>
              <li v-for="(sub,indexed) in item.links" :key="indexed" class="listItem list-unstyled">
                <nuxt-link :to="sub.link+'-'+lang">
                  {{ sub.description[lang] }}
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { menu } from '~/static/menu.js'
export default {
  data() {
    return {
      menu,
      SupportCentre: {
        en: `Learning Support Centre`,
        fr: `Centre de soutien à l'apprentissage`
      },
      forID: {
        en: `at the Canada School of Public Service`,
        fr: `à l'École de la fonction publique du Canada`
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    }
  }
}

</script>
<style>

details li>a{color:#26a69a!important;}

.listItem{
  list-style-type: none;
  padding-inline-start:0px;
  padding-bottom:.25em;
  font-size: small;

}
.menuItem{
  padding:2em;
  text-align: left;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #3f2a56;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

summary>h4,summary>h3{
  display:contents
}

</style>
