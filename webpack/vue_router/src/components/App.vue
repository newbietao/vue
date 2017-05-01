<template>
    <div>
       <h3>router</h3>
        <button class="btn btn-warning">11</button>
        <router-link to="/home"><button class="btn btn-info">home</button></router-link>
        <router-link to="/user"><button class="btn btn-success">user</button></router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    import home from "./home.vue";
    import user from "./user.vue";
    export default{
        data(){
            return {}
        },
        components:{
            home,
            user
        }
    }
</script>
