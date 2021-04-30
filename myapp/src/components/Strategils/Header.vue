<template>
<!-- 攻略头部组件 -->
    <div>
    <div class="headers">
        <span class="left">
            <img src="@/assets/二维码.jpg" alt="">
        </span>
        <span class="right">
            <p><img src="@/assets/img/关注.png" alt=""></p>
            <span class="news">
        关注房先森官方微信公众号<i>isirfang_com</i>
            </span>
        </span>
    </div>
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
<style lang="scss" scoped>
.headers{
    position: relative;
    width: 100%;
    height: 1.5rem;
    background-color: #39c894;
    .left{
        margin-left: 5%;
        img{
            width:20%;
            height:1.5rem;
        }
    }
    .right{
        width: 70%;
        position: relative;
        float: right;
        p{
           
         margin-top: 0.2rem;
            color:#39c894;
            font-size: 0.4rem;
            margin-right:1.4rem ;
            img{
                width: 80%;
                height: 0.4rem;
            }
        }
        .news{
            display: inline-block;
            position: absolute;
            top: 0.7rem;
            left: -2%;
            margin-top: 0.2rem;
            border-radius: 0.2rem  0.2rem   0.2rem  0.2rem ;
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #fff;
            text-align: center;
            position: absolute;
         font-size: 0.25rem;
            background-color: rgba(34, 15, 55, 0.17);
            i{
                     font-size: 0.25rem;
                     font-style:none;
                     color:#eed215 !important;
            }
        }

    }
}

</style>
