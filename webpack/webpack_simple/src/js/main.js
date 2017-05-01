import Vue from 'vue';
import App from '../components/App.vue';
import jQuery from "jquery";
const $ = jQuery;
window.$ = jQuery;
window.jQuery = jQuery;
import "../assets/js/bootstrap.min";
import "../assets/css/bootstrap.css";
new Vue({
  el: '#app',
  components:{
    App
  }
})
