<template>
  <!-- 装修攻略模块 -->
  <div class="startegy">
    <div class="startegy-top">
      <p>装修攻略</p>
    </div>
    <div class="startegy_img" @click="$router.push({path:'/programme'})">
      <div class="startegy_img_one">
        <div><img src="/images/08.jpg" alt="" /></div>
        <div>
          <p>房子交付要验房，验房师是做什么的?</p>
          <p>
            <i class="iconfont icon-time"></i
            >&emsp;&emsp;2016-02-02&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="iconfont icon-view"></i
            >&emsp;&emsp;112
          </p>
        </div>
      </div>
      <div class="startegy_img_two">
        <div><img src="/images/09.jpg" alt="" /></div>
        <div>
          <p>房子交付要验房，验房师是做什么的?</p>
          <p>
            <i class="iconfont icon-time"></i>&emsp;&emsp;2016-02-02&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <i class="iconfont icon-view"></i>&emsp;&emsp;112
          </p>
        </div>
      </div>
      <div class="startegy_img_three">
        <div><img src="/images/09.png" alt="" /></div>
        <div>
          <p>房子交付要验房，验房师是做什么的?</p>
          <p>
            <i class="iconfont icon-time"></i
            >&emsp;&emsp;2016-02-02&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<i class="iconfont icon-view"></i
            >&emsp;&emsp;112
          </p>
        </div>
      </div>
    </div>
    <div class="startegy_bottom">
      <div>换一换<i class="iconfont icon-change"></i></div>
      <div>更多装修攻略 <i class="iconfont icon-more"></i></div>
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
.startegy {
  width: 100%;
  height: 9rem;
  background: #fff;
  margin-top: 0.2rem;
  position: relative;
  .startegy-top {
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
  .startegy_img {
    // border: 0.01rem solid red;
    width: 95%;
    height: 7rem;
    margin: 0.2rem auto;
    .startegy_img_one {
      width: 100%;
      height: 2rem;
      border-bottom: 0.01rem solid #eaeaea;
      display: flex;
      div:nth-child(1) {
        flex: 0.35;
        padding-top: 0.2rem;
        padding-right: 0.2rem;
        padding-bottom: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-child(2) {
        flex: 0.65;
        p:nth-child(1) {
          font-size: 0.3rem;
          color: #000;
          padding-top: 0.2rem;
        }
        p:nth-child(2) {
          color: #999;
          padding-top: 0.4rem;
        }
      }
    }
    .startegy_img_two {
      width: 100%;
      height: 2rem;
      border-bottom: 0.01rem solid #eaeaea;
      display: flex;
      div:nth-child(1) {
        flex: 0.35;
        padding-top: 0.2rem;
        padding-right: 0.2rem;
        padding-bottom: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-child(2) {
        flex: 0.7;
        p:nth-child(1) {
          color: 0.3rem;
          color: #000;
          padding-top: 0.2rem;
        }
        p:nth-child(2) {
          color: #999;
          padding-top: 0.4rem;
        }
      }
    }
    .startegy_img_three {
      width: 100%;
      height: 2rem;
      display: flex;
      div:nth-child(1) {
        flex: 0.35;
        padding-top: 0.2rem;
        padding-right: 0.2rem;
        padding-bottom: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-child(2) {
        flex: 0.65;
        p:nth-child(1) {
          font-size: 0.3rem;
          color: #000;
          padding-top: 0.2rem;
        }
        p:nth-child(2) {
          color: #999;
          padding-top: 0.4rem;
        }
      }
    }
  }
  .startegy_bottom {
    width: 95%;
    height: 1rem;
    background: #fff;
    margin: -0.8rem auto;
    display: flex;
    border: 0.01rem solid #ccc;
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
