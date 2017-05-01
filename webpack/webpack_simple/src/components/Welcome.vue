<template>
    <div>
        <h3>welcome to vue!</h3>
        <button @click="add">点我加一</button>
        <div>{{count}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                count:0
            }
        },
        methods:{
            add(){
                this.count++;
            }
        }
    }
</script>