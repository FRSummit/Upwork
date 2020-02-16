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
  width: 968px;
  margin: 0 auto;
  margin-bottom: 20px;
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
.v-application--wrap {
  min-height: auto;
}
/* About Us page -> For carousel*/
.v-window__next {
  right: 0;
}
.v-carousel .v-window-item {
  background: #AA1111;
  padding: 10px;
}
.v-responsive {
  width: 640px;
  height: 480px;
  margin: 0 auto;
}
.v-image__image--cover {
  background-size: contain;
}
</style>
