<template>
  <!-- 设计师详情页 -->
  <div class="">
    <my-heads />

    <div class="">
      <div>
        <img
          src="C:\Users\86133\Desktop\一月\房先森\fxs\myapp\public\images\01.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="praise">
      <ul>
        <li class="li1">
          <i class="iconfont icon-thumb-up"></i>
        </li>
        <li class="li2"><i class="iconfont icon-pencle"></i></li>
        <li class="li3"><i class="iconfont icon-design"></i></li>
      </ul>
    </div>

    <div class="box">
      <div class="introduce">
        <div class="txt">
          <span>个人简介：</span>
          毕业于中国美术学院，从事家装行业3年，积累了一定的经验。具有良好的审美能力以及独立完成项目方案设计的能力。工作期间曾完成多个室内精装修项目，熟悉室内装修施工工艺及材料的运用。切合实际生活的设计，营造舒适的私人空间
        </div>
      </div>
    </div>
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
    </div>

    <my-footer />
    <my-ftel />
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
.design {
  width: 100%;
  height: 11rem;
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
  top: 4.9rem;
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
.box {
  background-color: rgb(255, 255, 255);
  color: #ccc;
  margin-top: 2rem;
}
.box span {
  color: #000000;
}
.introduce div {
  font-size: 0.3rem;
  overflow: hidden;
}
.praise {
  height: 1rem;

  margin-top: 2rem;
}
.praise ul {
  display: flex;
  padding-top: 1rem;
}
.praise li {
  margin-left: 1rem;
  width: 1rem;
  text-align: center;
  line-height: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.li1 {
  color: #feb505;
  border: 0.01rem solid #feb505;
}
.li2 {
  color: #1b9af7;
  border: 0.01rem solid #1b9af7;
}
.li3 {
  color: #ff4351;
  border: 0.01rem solid #ff4351;
}
i {
  font-size: 1rem;
}
</style>
