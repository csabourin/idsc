<template>
  <div class="row">
    <div class="col-md-3">
      <nuxt-link to="/">
        {{ homepage[lang] }}
      </nuxt-link>
      <br>

      <div
        v-for="(item, index) in menu"
        :key="index"
        visible
        role="tabpanel"
      >
        <a v-b-toggle="'accordion-' + index" href="#" :item="item">
          {{ item.name[lang] }}
        </a>
        <b-collapse :id="'accordion-'+ index" accordion="my-accordion" :visible="isVisible(item.group)" role="tabpanel">
          <ul>
            <li v-for="(sub,indexed) in item.links" :key="indexed" class="listItem list-unstyled">
              <nuxt-link :to="sub.link+'-'+lang">
                {{ sub.description[lang] }}
              </nuxt-link>
            </li>
          </ul>
        </b-collapse>
      </div>

      <br>
    </div>
    <div class="col-md-9">
      <nuxt-child />
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
      homepage: {
        en: `Home page`,
        fr: `Page d'accueil`
      }
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    currentName() {
      return this.$route.path.split('/')[1]
    },
    routeIndex() {
      const routes = this.$router.options.routes
      let index
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].name === this.$route.name) {
          index = i
          break
        }
      }

      return index
    }

  },
  watch: {
    lang() {
      const tempLen = this.$route.path.length - 2
      const tempPath = this.$route.path.substr(0, tempLen)
      this.$router.push(tempPath + this.$store.state.lang)
    }
  },
  methods: { isVisible(group) {
    return this.$route.matched[0].name === group
  }
  }
}

</script>
<style scoped>
ul.SideNav {
  padding: 0;
  margin: 0;
  border-right: 0.99px solid #bebebe;
  position: relative;
}

.SideNav li {
  width: 100%;
  position: relative;
  padding-top: .5em;
  padding-bottom: .5em;
  border: 1px solid #bebebe;
  border-left-width: 0;
  border-right: 1px solid #bebebe;
  vertical-align: middle;
  border-right: 5px solid #fff;
}

.SideNav li:not(.active):hover {
  background-color: #bebebe;
  border-right: 5px solid #01535e;
  padding-right: 0;
}

.SideNav li a {
  color: #01535e;
  text-decoration: none;
  vertical-align: middle;
  display: inline-block;
  width: 100%;
  padding: .25em;
  padding-right: 0;
}

</style>
