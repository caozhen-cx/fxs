<template>
<!-- 攻略搜索框组件 -->
    <div class="big">
    <span class="sp"><input type="text" placeholder="请输入关键字" class="ipt"><button class="btn">搜索</button></span>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
*{
    margin: 0;
    padding: 0;
}
.ipt{
    margin-left: 5%;
width: 70%;
height: 0.8rem;
float: left;
    margin-top: 0.1rem;
border:2px solid #39c894;
}
.btn{
    margin-top: 0.1rem;
    width: 19%;
    height:0.8rem;
float: left;
   border-left: 0;
   background-color:#39c894;
color: honeydew;
     border: 0;
}
.big{
    overflow: hidden;
}
</style>
