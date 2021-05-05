<template>
  <!-- 工地直播详情页 -->
  <div class="broad">
    <my-heads>
      <template v-slot:headCenter> 工地直播 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <div class="broad_content">
      <div class="broad_content_head">
        <p>观澜时代国际花园运抵5装<span>泥木工程</span></p>
        <p>
          户型：<span>二室</span>面积：<span>60-90㎡</span>装修预算：<span
            >18万</span
          >
        </p>
        <p>
          工地概况：<span
            >白万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</span
          >
        </p>
        <p>
          <span>
            <i class="iconfont icon-pencle"></i>
            评论
          </span>
          <span>
            <i class="iconfont icon-tag"></i>
            预约参观工地
          </span>
        </p>
      </div>
      <div class="broad_content_list">
        <p>设计师：<span>吴飞柯</span>项目经理：<span>王永龙</span></p>
        <div class="list">
          <div class="list_box">
            <p>泥木工程验收成功</p>
            <div class="img">
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
            </div>
          </div>
          <div class="title">
            <div class="radius"></div>
            <div class="hr"><hr color="#39c894" /></div>
            <span>2016-07-11</span>
            <span>泥木</span>
            <span>验收阶段</span>
          </div>
        </div>
        <div class="list">
          <div class="list_box">
            <p>水电工程验收成功</p>
            <div class="img">
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
            </div>
          </div>
          <div class="title">
            <div class="radius"></div>
            <div class="hr"><hr color="#39c894" /></div>
            <span>2016-07-11</span>
            <span>水电</span>
            <span>验收阶段</span>
          </div>
        </div>
        <div class="list">
          <div class="list_box">
            <p>水电工程验收成功</p>
            <div class="img">
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
              <img src="@/assets/img/1.jpg" alt="" />
            </div>
          </div>
          <div class="title">
            <div class="radius"></div>
            <div class="hr"><hr color="#39c894" /></div>
            <span>2016-07-11</span>
            <span>水电</span>
            <span>验收阶段</span>
          </div>
        </div>
      </div>
    </div>
    <my-footer />
    <my-ftel />
    <my-advertisement />
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

<style lang="scss">
.broad {
  background: #eaeaea;
}
.broad > div {
  background: #fff;
}
.broad_content {
  margin-top: 1.6rem;

  .broad_content_head {
    padding:0.2rem 0.2rem 0.4rem;

    p {
      margin-top: 0.3rem;
    }
    p:nth-child(1) {
      font-size: 0.4rem;
      span {
        padding: 0 0.1rem;
        background: #39c894;
        margin-left: 0.2rem;
        border-radius: 4px;
        display: inline-block;
       
      }
    }
    p:nth-child(2) {
      font-size: 0.3rem;
      span {
        color: #999999;
        margin-right: 0.2rem;
      }
    }
    p:nth-child(3) span {
      color: #999999;
      font-size: 0.3rem;
    }
    p:nth-child(4) {
      display: flex;
      height: 1rem;
      span {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #eaeaea;
        i {
          margin-right: 0.2rem;
        }
      }
      span:nth-child(1) {
        color: #1b9af7;
      }
      span:nth-child(2) {
        color: #39c894;
      }
    }
  }
  .broad_content_list {
    padding: 0.3rem 0.2rem 0.3rem 0.6rem;
    background: #eaeaea;

    p {
      margin-bottom: 0.4rem;
    }
    > p span:nth-child(1) {
      color: #39c894;
      margin-right: 0.6rem;
    }
    > p span:nth-child(2) {
      color: #999;
    }
  }
  .list {
    padding: 0.4rem 0rem 0.4rem 0.4rem;
    border-left: 1px solid #999999;
    position: relative;
    p {
      margin-top: 0.6rem;
    }
    img {
      width: 33%;
    }
    .title {
      position: absolute;
      left: -0.44rem;
      top: -0.1rem;
      display: flex;
      height: 0.9rem;
      width: 100%;
      .radius {
        height: 0.9rem;
        width: 0.9rem;
        border-radius: 50%;
        background: #39c894;
      }
      .hr {
        width: 0.9rem;
        display: flex;
        align-items: center;
        hr {
          width: 100%;
          height: 1px;
        }
      }
      span {
        padding: 0.2rem;
        display: flex;
        align-items: center;
      }
      span:nth-child(3) {
        background: #999999;
      }
      span:nth-child(4) {
        background: #39c894;
        color: #fff;
      }
      span:nth-child(5) {
        color: #fff;
        background: #feb505;
      }
    }
  }
}
</style>
