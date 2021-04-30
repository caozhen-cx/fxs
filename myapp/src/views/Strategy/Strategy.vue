<template>
<!-- 这是攻略页面 -->
    <div class="strategy">
<heads></heads>
<inputs></inputs>
<navs></navs>
<bodys></bodys>
<my-footer />
<my-ftel /> 
</div>
</template>

<script>
import heads from '@/components/Strategils/Header'
import inputs from '@/components/Strategils/Input.vue'
import navs from '@/components/Strategils/Nav.vue'
import bodys from '@/components/Strategils/body.vue'
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
components:{
    heads,
    inputs,
    navs,
    bodys
}
};
</script>

<style scoped>
.strategy{
    background-color: #eee;
}
.strategy>div{
    background-color: #fff;
}
</style>