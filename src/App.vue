<template>
    <div id="app">
        <router-view></router-view>
        <Maim></Maim>
    </div>
</template>
<script>
    import Maim from "@/components/Maim";
    import axios from 'axios'


    export default {
        name: "App",
        components: {
            Maim
        },
        created() {

        }
    }

    instance.all([axios({
        url: 'http://123.207.32.32:8000/home/multidata'
    }),axios({
        url: 'http://123.207.32.32:8000/home/multidata'
    })]).then(results=>{
        console.log(results[0]);
    })
</script>

<style lang="stylus">
    body {
        padding: 0;
        margin: 0;
    }
</style>
