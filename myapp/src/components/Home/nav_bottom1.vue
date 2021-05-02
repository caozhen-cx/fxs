<template>
<!-- 全屋装修部分 -->
  <div class="box">
    <div class="box-top">
      <p>全屋装修</p>
      <p>包设计、包主材、包水电、包施工</p>
    </div>
    <div class="box-one">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in dataNav" :key="index"
          >
          <img :src="item.img" alt=""/>
          </van-swipe-item>
      </van-swipe>
    </div>

    <div class="box-bottom">
      <div><i class="iconfont icon-zero"></i> <span>0增项，标准施工</span></div>
      <div>
        <i class="iconfont icon-protection-fill"></i> <span>杜绝外包</span>
      </div>
      <div><i class="iconfont icon-price"></i> <span>装修贷款</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataNav: [],
    };
  },
  mounted() {
    this.$http("/swiper/dataNavs.json", "get").then((res) => {
      console.log(res);
      this.dataNav = res.data.data;
    });
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 0.3rem;
  background: #fff;
  width: 100%;
  overflow-x: hidden;
  .box-top {
    display: flex;
    height: 0.7rem;
    padding-top: 0.2rem;
    p:nth-child(1) {
      border-left: 0.05rem solid #39c894;
      margin-left: 0.2rem;
      padding-top: 0.1rem;
      font-size: 0.35rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
    }
    p:nth-child(2) {
      font-size: 0.3rem;
      flex: 5;
      color: #eaeaea;
      padding-top: 0.2rem;
      padding-left: 0.1rem;
    }
  }
  .box-one {
    width: 96%;
    height: 5rem;
    // border: 0.01rem solid red;
    margin: 0.2rem auto;
    .my-swipe .van-swipe-item {
      color: #fff;
      text-align: center;
    }
    .my-swipe {
      width: 96%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .van-swipe__indicators {
        position: absolute;
        bottom: 12rem;
        left: 50%;
        background: #000;
      }
    }
  }
  .box-bottom {
    width: 96%;
    height: 1rem;
    display: flex;
    div {
      font-size: 0.2rem;
      text-align: center;
      line-height: 1rem;
      i {
        color: #39c894;
        font-size: 0.5rem;
      }
    }
    div:nth-child(1) {
      flex: 0.5;
    }
    div:nth-child(2) {
      flex: 0.3;
    }
    div:nth-child(3) {
      flex: 0.3;
    }
  }
}
</style>
