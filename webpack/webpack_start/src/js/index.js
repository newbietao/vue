/**
 * Created by hantao on 2017/4/30.
 */
import Vue from "vue";
import myname from "../compoents/app.vue";
const vm = new Vue({
    el:"#app",
    data:{
        name:'hantao'
    },
    components:{
        myname:myname
    }
});