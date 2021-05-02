<template>
  <div class="visit">
    <!-- 工地直播 -->
    <div class="visit-top">
      <p>工地直播</p>
    </div>
    <div class="visit-img">
      <img src="/images/07.jpg" alt="" />
    </div>
    <div class="img-w">
      <span>重汽嘉泽苑7幢 </span>
      <span>泥木工程</span>
    </div>
    <div class="visit-bottom">
      <div>换一换<i class="iconfont icon-change"></i></div>
      <div>更多工地直播 <i class="iconfont icon-more"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss'  scoped>
.visit {
  width: 100%;
  height: 9rem;
  background: #fff;
  margin-top: 0.2rem;
  .visit-top {
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
  }
  .visit-img {
    width: 95%;
    height: 5rem;
    margin: 0.2rem auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-w {
    font-size: 0.2rem;
    margin-left: 0.2rem;
    span {
      display: inline-block;
    }
    span:nth-child(2) {
      display: inline-block;
      width: 1.5rem;
      height: 0.5rem;
      background: #39c894;
      margin-left: 0.2rem;
      text-align: center;
      line-height: 0.5rem;
      color: white;
      font-size: 0.15rem;
      border-radius: 10%;
    }
  }
  .visit-bottom {
    width: 95%;
    height: 1rem;
    border: 0.01rem solid #ccc;
    margin: 0 auto;
    display: flex;
    position: relative;
    top: 0.5rem;
    div {
      text-align: center;
      line-height: 1rem;
      // border:.01rem solid red;
      color: #39c894;
      font-size: 0.3rem;
    }
    div:nth-child(1) {
      flex: 0.5;
      border-right: 0.01rem solid #ccc;
    }
    div:nth-child(2) {
      flex: 0.5;
    }
  }
}
</style>
