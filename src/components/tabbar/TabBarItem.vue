<template>
    <div class="tab-bar-item" v-on:click="itemClick">
        <div :class="{active:isActive}" ><slot name="item-icon"></slot></div>
        <div :style="activeStyle" ><slot name="item-name"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            //点击组件想要跳转到路径
            path: '',
            //设置按钮颜色 默认为红色
            activeColor: {
                type: String,
                default: 'red'
            },
        },
        data(){
          return{}
        },
        methods:{
            itemClick(){
                this.$router.replace(this.path)
                // console.log('click')
            }
        },
        computed: {
            //判断是否活跃
            isActive() {
                return this.$route.path.indexOf(this.path) == 0
            },
            //活跃将style的颜色设置为activeColor
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
    }
</script>

<style scoped>

    .tab-bar-item {
        flex:  1;
        text-align:  center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }

</style>