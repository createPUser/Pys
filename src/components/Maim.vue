<template>
    <tab-bar>
        <TabBarItem path="/Home">
            <img slot="item-icon" src="../assets/img/tabbar/主页.png">
            <div slot="item-name">首页</div>
        </TabBarItem>
        <TabBarItem path="/Cart">
            <img slot="item-icon" src="../assets/img/tabbar/主页.png">
            <div slot="item-name">分类</div>
        </TabBarItem>
        <TabBarItem path="/Category">
            <img slot="item-icon" src="../assets/img/tabbar/主页.png">
            <div slot="item-name">购物车</div>
        </TabBarItem>
        <TabBarItem path="/Profile">
            <img slot="item-icon" src="../assets/img/tabbar/主页.png">
            <div slot="item-name">我的</div>
        </TabBarItem>
    </tab-bar>
</template>

<script>
    import TabBar from "./tabbar/TabBar";
    import TabBarItem from "./tabbar/TabBarItem";

    export default {
        name: "Maim",
        components: {
            TabBar,TabBarItem
        }
    }
</script>

<style scoped>

</style>