<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Sidebar from '@/components/TheSidebar.vue'
import Footer from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* width: 100%;
  min-height: 100%; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
