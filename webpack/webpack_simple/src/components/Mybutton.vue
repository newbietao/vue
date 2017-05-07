<template>
    <div>
        <input type="text" @keyup.enter="addTodo">
        <!--<button class="btn btn-info" @click="increment">点我</button>-->
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods:{
            addTodo (e) {
                var text = e.target.value
                if (text.trim()) {
                    this.$store.commit('addTodo', { text })
                }
                e.target.value = ''
            },
//            ...mapActions([
//                'increment',
//                'decrement',
//                'incrementIfOdd',
//                'incrementAsync'
//            ])
        }
    }

</script>
<style>

</style>