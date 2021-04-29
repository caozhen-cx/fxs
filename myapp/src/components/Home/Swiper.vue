<template>
  <div class="swiper">
    <van-swipe class="my-swipe " :autoplay="3000" indicator-color="white">
      <van-swipe-item :key="index" v-for="(item, index) in swiper"
        ><img :src="item.img" alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [],
    };
  },
  mounted() {
    this.$http("/swiper/swiper.json", "get").then((res) => {
      this.swiper = res.data.data;
      console.log(res);
    });
  },
  methods: {},
};
</script>

<style lang='scss'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swiper{
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
   img {
        width: 100%;
        height: 100%;
    }
    >div {
        width: 100%;
        height: 100%;
    }
}
</style>
