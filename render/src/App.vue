<template>
  <div id="app1">
      <my-heads :level="level" title="hello world">hello vue</my-heads>
      {{value}}
  </div>
</template>

<script>
   var myHeads = {
        name:"myHeads",
       data(){
            return {
                value:""
            }
       },
        props:{
            level:"",
            title:"",
        },
       render: function (createElement) {
           var self = this
           return createElement('div', {

           },[
                   createElement('input', {
                       domProps: {
                           value: self.value
                       },
                       on: {
                           input: function (event) {
                               self.value = event.target.value
                           }
                       }
                   }),
                this.value
           ]

           )


       }
    }
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        level:1,
        value:""
    }

  },
    components:{
        myHeads
    }
}
</script>

<style>

</style>
