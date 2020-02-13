<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
  data() {
    return {

    }
  },
  methods: {
  },
  created() {
    console.log(screen.height);
    const height = screen.height + 'px';
    console.log(height + 'px');
    document.getElementById('app').style.height = height;
  }
}
</script>

<style>
html {
  background-color: #333333; 
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding: 0 24px; */
  width: 72%;
  margin: 0 auto;
}
.v-btn--active:before {
  background-color: red !important;
}
body {
  background-image: url("./assets/images/gradient.png") !important;
  background-repeat: repeat-x;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
/* body {
  background-image: url("./assets/images/gradient.png");
} */
</style>
