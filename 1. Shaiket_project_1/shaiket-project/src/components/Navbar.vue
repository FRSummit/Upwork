<template>
  <div class="navbar" v-if="userIsAuthorized">
    <v-toolbar style="background-color: #1976d2 !important; border-color: #1976d2 !important;">
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn to="/about" class="mr-2">About</v-btn>
      <v-btn class="mr-2">Contact</v-btn>
      <v-btn class="mr-2" @click="logout">Logout</v-btn>
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
</style>