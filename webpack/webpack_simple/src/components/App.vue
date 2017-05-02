<template>
  <div id="app">
    <h2>hello world</h2>
    <Welcome></Welcome>
    <Hello></Hello>
    <Dropdown></Dropdown>
    <Echar></Echar>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
import Welcome from "./Welcome.vue";
import Dropdown from "./Dropdown.vue";
import Echar from "./Echars.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World',
      count:0
    }
  },
  components:{
      Hello,
      Welcome,
      Dropdown,
      Echar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
