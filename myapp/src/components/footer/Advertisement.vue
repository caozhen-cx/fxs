<template>
    <div class="footer" v-if="flag">
        <div class="left">
            <img src="@/assets/img/common/icon_close.png" alt="" @click="out">
        </div>
        <img src="@/assets/img/quoten_bottom.png" alt="">
        <div class="right">
            <span>免费获取报价</span>
        </div>

    </div>
    <!-- 底部广告 -->
</template>

<script>
export default {
    data() {
        return {
            flag:true
        }
    },
    methods: {
        out(){
            this.flag = false;
        },
        // 关闭广告
    },
}
</script>
