import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJfQ_3am-MAguyLocg4KwTm4cVdwt26bc",
  authDomain: "vue-firebase-authenticat-9d949.firebaseapp.com",
  databaseURL: "https://vue-firebase-authenticat-9d949.firebaseio.com",
  projectId: "vue-firebase-authenticat-9d949",
  storageBucket: "vue-firebase-authenticat-9d949.appspot.com",
  messagingSenderId: "455679396372",
  appId: "1:455679396372:web:958b7cab2883def294b501"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
