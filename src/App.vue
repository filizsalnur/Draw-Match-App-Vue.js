<template>
  <HeaderApp/>
  <main><router-view></router-view></main>
  <FooterApp/>
  
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue';


export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #b6d5e1;
  margin-top: 60px;
  
}
</style>
