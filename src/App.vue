<template>
  <UserAdd/>
  
</template>

<script>
import UserAdd from './components/UserAdd.vue';


export default {
  name: 'App',
  components: {
    UserAdd,
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
  background: hsl(0, 0%, 70%);
  margin-top: 60px;
  
}
</style>
