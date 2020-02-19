<template>
  <!-- <div class="navbar" v-if="userIsAuthorized"> -->
  <div class="navbar">
    <dir class="nav-head-top-section">
      <div class="nav-head-text-section">
        <div class="nav-head-title">
          <span>Mississauga Men's Senior Slo-Pitch</span>
        </div>
        <div class="nav-head-subtitle">
          <span>Established 1968</span>
        </div>
      </div>
      <dir class="nav-head-img-section">
        <img src="../assets/images/mmspl-logo.png" alt="">
      </dir>
    </dir>
    
      <div class="navbar-toolbar">
        <div class="navbar-toolbar-menu_sec">
          <v-btn to="/home" class="mr-2">Home</v-btn>
          <v-btn to="/register" class="mr-2">Register</v-btn>
          <v-btn to="/standings" class="mr-2">Standings</v-btn>
          <v-btn to="/schedules" class="mr-2">Schedules</v-btn>
          <v-btn to="/admin" class="mr-2">Admin</v-btn>
          <v-btn to="/about" class="mr-2">About us</v-btn>
          <v-btn to="/award" class="mr-2">Award</v-btn>
          <v-btn to="/contact" class="mr-2">Contact</v-btn>
          <v-btn to="/community" class="mr-2">My Community</v-btn>
          <v-btn class="mr-2" @click="logout" v-if="userIsAuthorized">Logout</v-btn>
          <v-btn to="/signup" class="mr-2" color="primary" v-if="!userIsAuthorized">Sign up</v-btn>
        </div>

      </div>
    <!-- </v-toolbar> -->
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
  },
};
</script>

<style scoped>
.navbar {
  width: 968px;
  margin: 0 auto;
  height: 190px;
  background-image: url("../assets/images/gradient.png") !important;
  background-repeat: repeat-x;
  padding: 5px 4px;
  background-size: contain;
}
.headline.text-uppercase {
  color: #ffffff;
  font-weight: 700;
  font-size: 14.4px;
}
.mr-2 {
  /* background-color: #0b447d8c !important; */
  border-color: #06192b !important;
  margin: 0 2px;
  color: #ffffff !important;
  font-weight: 700;
  font-size: 14.4px;
  text-transform: none;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0;
  background-color: transparent !important;
  box-shadow: none;
  height: 24px !important;
  padding: 0 14px !important;
}
.v-btn:before {
  background-color: #690000;
}
/* .nav-head-top-section {
  background-image: url("../assets/images/gradient.png") !important;
  background-repeat: repeat-x;
  padding: 20px 30px;
} */
.nav-head-text-section {
  width: 60%;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 20px 16px 0;
}
.nav-head-img-section {
  width: 40%;
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
.navbar-toolbar {
  margin-top: 14px;
  text-align: right;
}
/* .navbar-toolbar-route_name_sec {
  display: inline-block; 
  width: 20%; 
  text-align: left;
  vertical-align: middle;
} */
.navbar-toolbar-menu_sec {
  text-align: center;
}
</style>