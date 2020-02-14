<template>
  <div class="login">
    <v-app id="inspire" class="login-v-app">
      <v-content>
        <v-container class="" fluid>
          <v-row align="center" justify="center">
            <!-- <v-col cols="12" sm="8" md="4"> -->
            <v-col>
              <v-card class="elevation-12" style="width: 50%; margin: 0 auto;">
                <v-toolbar color="primary" dark flat>
                  <v-spacer />
                  <v-toolbar-title>Login here</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="onSubmit">
                    <v-text-field v-model="username" id="username" placeholder="Login" name="login" type="text"/>
                    <v-text-field v-model="password" id="password" placeholder="Password" name="password" type="password"/>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn type="submit" class="login-btn" color="primary">Login</v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Home',
  components: {
  },
  props: {
    source: String,
  },
  data() {
    return {
      username: '',
      password: '',
      users: [],
    }
  },
  created() {
    // firebase.database().ref('users').on('value', (snapshot)=> {
    //   this.users = snapshot.val();
    // });
  },
  methods: {
    onSubmit() {
      const currentUserName = '';
      const currentUserPassword = '';
      firebase.database().ref('users').on('value', (snapshot)=> {
        this.users = snapshot.val();
        // console.log(snapshot.val());
        const userLength = Object.keys(snapshot.val());
        // console.log(userLength.length);
        for(let i=0; i<userLength.length; i++){
          // console.log(this.users[Object.keys(snapshot.val())[i]]);
          // console.log(Object.keys(snapshot.val())[i]);
          const usrEmail = this.users[Object.keys(snapshot.val())[i]].email;
          const usrPass = this.users[Object.keys(snapshot.val())[i]].password;
          if(usrEmail == this.username && usrPass == this.password){
            console.log('pass');
            var loginPass = {'login_auth_value': 'authorized'};
            localStorage.setItem('upwork_project_shaiket_login_pass', JSON.stringify(loginPass));
            router.replace('/home');
            window.location.reload();
          } else {
            console.log('fail');
            // console.log(this.$route);
          }
        }
      });
    }
  }
}
</script>

<style scoped>
/* .login {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
} */
.login-v-app {
  /* background-image: url("../assets/images/login-back.jpg") !important;
  background-size: cover !important; */
  background: transparent !important;
}
.headline {
  color: #ffffff;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
.login-v-toolbar {
  background: #81c6d68f;
}
.login-btn {
  width: 30%;
}
/* .container.fill-height {
  display: block;
} */
</style>
