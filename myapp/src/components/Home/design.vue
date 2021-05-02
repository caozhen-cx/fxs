<template>
<!-- 设计图部分 -->
  <div class="design">
    <div class="design-top">
      <p>设计图</p>
    </div>
    <div class="design-img">
      <div><img src="/images/05.jpg" alt="" /><span>客厅</span></div>
      <div>
        <ul>
          <li><img src="/images/03.jpg" alt="" /><span>卧室</span></li>
          <li><img src="/images/04.jpg" alt="" /><span>餐厅</span></li>
          <li><img src="/images/05.jpg" alt="" /><span>厨房</span></li>
          <li><img src="/images/06.jpg" alt="" /><span>阳台</span></li>
        </ul>
      </div>
    </div>
    <div class="design-bottom">
      <div>换一换<i class="iconfont icon-change"></i></div>
      <div>更多设计图 <i class="iconfont icon-more"></i></div>
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

<style lang='scss'>
.design {
  width: 100%;
  height: 13rem;
  background: #fff;
  margin-top: 0.2rem;
}
.design-top {
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
.design-img {
  width: 96%;
  height: 5rem;
  margin: 0.2rem auto;
  position: relative;
  div:nth-child(1) {
    width: 100%;
    height: 4rem;
    border: 0.01rem solid pink;
    margin: 0 auto;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      display: block;
      width: 0.8rem;
      height: 0.35rem;
      background: rgba($color: #000000, $alpha: 0.5);
      color: white;
      position: absolute;
      right: 0.2rem;
      bottom: 0.2rem;
      text-align: center;
      line-height: 0.35rem;
      border-radius: 10%;
    }
  }
  div:nth-child(2) {
    width: 100%;
    height: 4rem;
    position: relative;
    top: 4.2rem;
    ul {
      display: flex;
      width: 100%;
      height: 4rem;
      position: absolute;
      //  justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 47%;
        margin: 0.1rem 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
        span {
          display: block;
          width: 0.8rem;
          height: 0.35rem;
          background: rgba($color: #000000, $alpha: 0.5);
          color: white;
          text-align: center;
          line-height: 0.35rem;
          border-radius: 10%;
        }
      }
      li:nth-of-type(1) {
        span {
          position: absolute;
          right: 4rem;
          bottom: 1.45rem;
        }
      }
      li:nth-of-type(2) {
        span {
          position: absolute;
          right: 0.2rem;
          bottom: 1.45rem;
        }
      }
      li:nth-of-type(3) {
        span {
          position: absolute;
          right: 4rem;
          bottom: -1.3rem;
        }
      }
      li:nth-of-type(4) {
        span {
          position: absolute;
          right: 0.2rem;
          bottom: -1.3rem;
        }
      }
    }
  }
}

.design-bottom {
  width: 95%;
  height: 1rem;
  border: 0.01rem solid #ccc;
  margin: 0 auto;
  display: flex;
  position: relative;
  top:4.9rem;
  div {
    text-align: center;
    line-height: 1rem;
    // border:.01rem solid red;
    color: #39c894;
    font-size: 0.3rem;
  }
  div:nth-child(1) {
    flex: 0.5;
    border-right:0.01rem solid #ccc;
  }
  div:nth-child(2) {
    flex: 0.5;
  }
}
</style>
