import Vue from 'vue';
import App from '../components/App.vue';
import jQuery from "jquery";
import "./rem.js";
const $ = jQuery;
window.$ = jQuery;
window.jQuery = jQuery;
import "../assets/js/bootstrap.min";
import "../assets/css/bootstrap.css";
import store from "./store";
new Vue({
    el: '#app',
    store,
    components:{
        App
    }

});