<template>
  <div id="app1">
      <my-heads :level="level" title="hello world">hello vue</my-heads>
  </div>
</template>

<script>
   var myHeads = {
        name:"myHeads",
        props:{
            level:"",
            title:""
        },
        render:function(h){
            return h(
                "h"+this.level,
                this.$slots.default

            );
        }
    }
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        level:1,
    }

  },
    components:{
        myHeads
    }
}
</script>

<style>

</style>
