<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Ceci est {{ title }}</p>
  </div>
</template>
<style>
/**{border:1px solid red;}*/
h1 {
  font-family: sans-serif;
}

</style>
<script>
export default {
  data() {
    return {
      title: `Page un`
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}

</script>
