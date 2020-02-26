<template>
  <div id="app" style="min-height: 800px;">
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
  /* background-image: url("./assets/images/gradient.png") !important; */
  background-image: url("./assets/images/back5.webp") !important;
  background-repeat: repeat;
  /* background-repeat: repeat-x; */
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
.v-slide-group__content {
  background-color: #EBEBEB;
  padding: 6px !important;
}
/* About Us page -> For carousel*/
/* ---------------------------- */
/* Register, Standing, Award page */
.v-tabs-slider {
  background-color: #AA1111 !important;
}
.v-tab {
  font-weight: bold !important;
  font-family:Arial, Helvetica, sans-serif;
  font-size:14.4px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  margin: 0 6px;
}
.v-tab--active {
  background-color: #AA1111;
  color: #FFFFFF !important;
}
.v-tab:hover {
  background-color: #AA1111;
  color: #FFFFFF !important;
}
/* Register, Standing, Award page */
.award .v-tabs-bar {
  height: 60px;
  padding-bottom: 2px;
  /* border: 2px solid #a11; */
}
</style>
