<template>
  <div class="home" v-if="userIsAuthorized">
    <p>How about your day?</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
    }
  },
  created() {
    this.checkUserIsAuthorized();
  }
}
</script>
