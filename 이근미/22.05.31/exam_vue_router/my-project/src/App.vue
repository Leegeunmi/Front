<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
 @import '@/assets/scss/style.scss';
</style>
