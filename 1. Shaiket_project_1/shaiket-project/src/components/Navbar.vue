<template>
  <!-- <div class="navbar" v-if="userIsAuthorized"> -->
  <div class="navbar">
    <dir class="nav-head-top-section">
      <div class="nav-head-text-section">
        <div class="nav-head-title">
          <span>Basket Ball Organization</span>
        </div>
        <div class="nav-head-subtitle">
          <span>Established 1968</span>
        </div>
      </div>
      <dir class="nav-head-img-section">
        <img src="../assets/images/mmspl-logo.png" alt="">
      </dir>
    </dir>
    
    <v-toolbar style="background-color: #1976d2 !important; border-color: #1976d2 !important;">
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn to="/about" class="mr-2">About</v-btn>
      <v-btn class="mr-2">Contact</v-btn>
      <v-btn class="mr-2" @click="logout" v-if="userIsAuthorized">Logout</v-btn>
      <v-btn to="/signup" class="mr-2" color="primary" v-if="!userIsAuthorized">Sign up</v-btn>
      <!-- <div>{{ $route.name }}</div> -->
      <!-- <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn> -->
    </v-toolbar>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import router from '../router'

export default {
  components: {

  },
  data() {
    return {
      userIsAuthorized: false,
    }
  },
  methods: {
    checkUserIsAuthorized() {
      const userAuth = localStorage.getItem("upwork_project_shaiket_login_pass");
      if(userAuth) {
        const authValue = JSON.parse(userAuth).login_auth_value;
        console.log(authValue);
        if(authValue == 'authorized') {
          this.userIsAuthorized = true; 
        }
      }
    },
    logout() {
      localStorage.removeItem("upwork_project_shaiket_login_pass");
      router.replace('/');
      window.location.reload();
    }
  },
  created() {
    this.checkUserIsAuthorized();
    console.log('This component name : ' + this.$route.name);
  }
};
</script>

<style scoped>
.headline.text-uppercase {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;
}
.mr-2 {
  background-color: #0b447d8c !important;
  border-color: #06192b !important;
  margin: 0 2px;
  color: #ffffff !important;
  font-weight: 700;
}
.nav-head-top-section {
  background-image: url("../assets/images/gradient.png") !important;
  background-repeat: repeat-x;
  padding: 20px 30px;
}
.nav-head-text-section {
  width: 50%;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 4px 16px;
}
.nav-head-img-section {
  width: 50%;
  display: inline-block;
  text-align: right;
}
.nav-head-text-section .nav-head-title{
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.nav-head-text-section .nav-head-subtitle{
  color: #ffffff;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>