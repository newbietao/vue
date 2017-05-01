<template>
    <div>
       <h3>router</h3>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
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
