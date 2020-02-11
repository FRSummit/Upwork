<template>
  <div class="sign-up">
    <v-app id="inspire" class="sign-up-v-app">
      <!-- <div class="login-toolbar-sec">
        <v-toolbar class="login-v-toolbar" color="primary">
          <v-toolbar-title class="headline text-uppercase">
            <span>Demo Project</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn to="/" class="mr-2" color="primary">Sign in</v-btn>
        </v-toolbar>
      </div> -->
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-spacer />
                  <v-toolbar-title>Sign up here</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="onSubmit">
                    <div class="name-field">
                      <label class="field-label" for="name">Name</label>
                      <v-text-field class="field-input" v-model="name" id="name" placeholder="F R Summit" name="name" type="text"/>
                      <!-- <hr class="name-field-error"/> -->
                      <!-- <span>{{ nameFieldEmpty }}</span> -->
                    </div>
                    <div class="email-field">
                      <label class="field-label" for="email">Email</label>
                      <v-text-field class="field-input" v-model="email" id="email" placeholder="frsummit1@gmail.com" name="email" type="text"/>
                      <!-- <span>{{ emailFieldEmpty }}</span> -->
                    </div>
                    <div class="address-field">
                      <label class="field-label" for="address">Address</label>
                      <v-text-field class="field-input" v-model="address" id="address" placeholder="Banani, Dhaka" name="address" type="text"/>
                      <!-- <span>{{ addressFieldEmpty }}</span> -->
                    </div>
                    <div class="phone-field">
                      <label class="field-label" for="phone">Phone</label>
                      <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                      <!-- <span>{{ phoneFieldEmpty }}</span> -->
                    </div>
                    <div class="phone-field">
                      <label class="field-label" for="phone">Role</label>
                      <v-col class="field-input" style="padding: 0px;">
                        <v-select :items="items" placeholder="Role" dense  v-model="role" id="role" name="role" type="text"></v-select>
                      </v-col>
                      <!-- <span>{{ phoneFieldEmpty }}</span> -->
                    </div>
                    <div class="password-field">
                      <label class="field-label" for="password">Password</label>
                      <v-text-field class="field-input" v-model="password" id="password" placeholder="Password" name="password" type="password"/>
                      <!-- <span>{{ passwordFieldEmpty }}</span> -->
                    </div>
                    <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit" class="signup-btn" color="primary">Create</v-btn>
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
      name: '',
      email: '',
      address: '',
      phone: '',
      role: '',
      password: '',
    //   nameFieldEmpty: '',
    //   emailFieldEmpty: '',
    //   addressFieldEmpty: '',
    //   phoneFieldEmpty: '',
    //   passwordFieldEmpty: '',
    items: ['Admin', 'User'],
    }
  },
  methods: {
    onSubmit() {
      /*const newData = {
        user: {
          name: this.name,
          email: this.email,
          address: this.address,
          phone: this.phone,
          role: this.role,
          password: this.password
        }
      }*/
      if(this.name == "" || this.email == "" || this.address == "" 
            || this.phone == "" || this.role == "" || this.password == ""){
        if(this.name == ""){
        //   this.nameFieldEmpty = 'Name must not be empty';
          document.getElementById('name').placeholder = 'Name must not be empty';
        } 
        if(this.email == ""){
          document.getElementById('email').placeholder = 'Email must not be empty';
        } 
        if(this.address == ""){
          document.getElementById('address').placeholder = 'Address must not be empty';
        } 
        if(this.phone == ""){
          document.getElementById('phone').placeholder = 'Phone must not be empty';
        } 
        if(this.role == ""){
          document.getElementById('role').placeholder = 'Role must not be empty';
        } 
        if(this.password == ""){
          document.getElementById('password').placeholder = 'Password must not be empty';
        } 
        // if(this.email == "") this.emailFieldEmpty = 'Email must not be empty';
        // if(this.address == "") this.addressFieldEmpty = 'Address must not be empty';
        // if(this.phone == "") this.phoneFieldEmpty = 'Phone must not be empty';
        // if(this.password == "") this.passwordFieldEmpty = 'Password must not be empty';
      }else {
        // console.log(newData);
        firebase.database().ref('users').push({
                // user: newData
                name: this.name,
                email: this.email,
                address: this.address,
                phone: this.phone,
                role: this.role,
                password: this.password
            })
            .then((data)=>{
            console.log(data);
            this.name  = '';
            this.email = '';
            this.address = '';
            this.phone = '';
            this.role = '';
            this.password = '';
            router.replace('/login');
            })
            .catch((error)=>console.log(error))
      }
    }
  }
}
</script>

<style scoped>
/* .sign-up {
  position: absolute;
  top: 0;
  background: aqua;
  width: 100%;
  height: 100%;
} */
.headline {
  color: #ffffff;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
.sign-up-v-app {
  background-image: url("../assets/images/login-back.jpg") !important;
  background-size: cover !important;
}
.signup-btn {
  width: 30%;
}
.name-field, .email-field, .address-field, .phone-field, .password-field {
  position: relative;
}
/* .name-field span, .email-field span, .address-field span, .phone-field span, .password-field span {
  position: absolute;
  top: 0;
  left: 20%;
  color: red;
} */
.field-label {
  display: inline-block;
  width: 20%;
  text-align: left;
  font-size: 1rem;
}
.field-input {
  display: inline-block;
  width: 78%;
}
</style>
