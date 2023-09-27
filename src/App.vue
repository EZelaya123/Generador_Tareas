<template>
  <div id="app">  
   <Tareas></Tareas>
  </div>
</template>

<script>
import Tareas from '@/components/Tareas.vue';

export default {
  name: 'App',
  components: {
       Tareas
  }
}
</script>

<style>
@import '~fortawesome/fontawesome-free/css/all.css';
@import '~fortawesome/fontawesome-free/css/brands.css';
@import '~fortawesome/fontawesome-free/css/solid.css';
@import '~fortawesome/fontawesome-free/css/regular.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
