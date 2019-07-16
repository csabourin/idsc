<template>
  <div class="row">
    <div class="col-md-3">
      <nuxt-link to="/">
        Homepage
      </nuxt-link>
      <br>
      <nuxt-link v-for="(item,index) in menu" :key="index" :to="item.link +'-' + $store.state.lang" class="button--green">
        {{ item.name[lang] }}
      </nuxt-link>
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
      menu
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    }
  },
  watch: {
    lang() {
      const tempLen = this.$route.path.length - 2
      const tempPath = this.$route.path.substr(0, tempLen)
      this.$router.push(tempPath + this.$store.state.lang)
    }
  }
}

</script>
