<template>
    <div>
        <h3>welcome to vue!</h3>
        <button @click="add" class="btn btn-info">点我加一 <span class="glyphicon glyphicon-plus"></span></button>
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
