<template>
    <div id="app" class="container">
        <Mytable></Mytable>
        {{count}}{{message}}
        <Mybutton></Mybutton>
    </div>
</template>

<script>
    import Mytable from "./Mytable.vue";
    import Mybutton from "./Mybutton.vue";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'app',
        computed: mapGetters([
            'count',
            'message'

        ]),
        components:{
            Mytable,
            Mybutton
        },

    }
</script>

<style>

</style>
