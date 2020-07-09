<template>
    <div class = "tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    import TabBarItem from './TabBarItem'
    import axios from "axios";
    export default {
        name: "TabBar",
        components: {
            TabBarItem
        }
    }

</script>

<style scoped>
    .tab-bar {
        display: flex;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -3px 1px rgba(100,100,100,.1);
    }
</style>