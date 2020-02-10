import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA5HBe7WlYR3tiS8zkK_zpp8qF-hW7fS-I",
  authDomain: "shaiket-project-906d3.firebaseapp.com",
  databaseURL: "https://shaiket-project-906d3.firebaseio.com",
  projectId: "shaiket-project-906d3",
  storageBucket: "shaiket-project-906d3.appspot.com",
  messagingSenderId: "542390384051",
  appId: "1:542390384051:web:8d8b2e2dbd3e502edf87c6",
  measurementId: "G-JS72ZR45ZC"
};
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
