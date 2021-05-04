<template>
  <div class="details">
    <my-heads>
      <template v-slot:headCenter> 装修预算 </template>
    </my-heads>
    <van-swipe class="my-swipe swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <div class="box">
      <p class="nav">房先森 / 装修攻略 / 装修预算 / 正文</p>
      <div class="title">
        <p>装修预算注意事项</p>
        <div class="content">
          <div><i class="iconfont icon-time"></i>2016-07-09</div>
          <div><i class="iconfont icon-view"></i>115</div>
        </div>
      </div>
      <div class="text">
        <div class="text_head">
          <span>客厅装修隔断</span>
          <span>客厅装修图</span>
          <span>客厅装修效果</span>
          <span>客厅装修隔断</span>
          <span>客厅装修图</span>
          <span>客厅装修效果</span>
        </div>
        <div class="text_content">
          <p>
            导语：在装修时如果没有提前最好装修预算，很容易在成最后开支过大，添加很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？
          </p>
          <div class="text_image">
            <img src="@/assets/img/text.jpg" alt="" />
          </div>
          <button>点击展开全文</button>
        </div>
        <div class="list">
          <div class="list_head">
            <span><i class="iconfont icon-pencle"></i>评价(10)</span>
            <span><i class="iconfont icon-share"></i>分享</span>
          </div>
          <button>进入装修预算</button>
        </div>
      </div>
      <div class="like">
        <div class="like_title">
          <p>猜你喜欢</p>
        </div>
        <ul class="like_list">
          <li>
            <img src="@/assets/img/s.jpg" />
            <div>
              <div class="like_list_title">遇到有这样房子的男人就嫁了把</div>
              <div class="like_list_footer">
                <div><i class="iconfont icon-time"></i>2016-07-09</div>
                <div><i class="iconfont icon-view"></i>115</div>
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/tt.jpg" />
            <div>
              <div class="like_list_title">能让您涨工资的家居风水</div>
              <div class="like_list_footer">
                <div><i class="iconfont icon-time"></i>2016-07-09</div>
                <div><i class="iconfont icon-view"></i>115</div>
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/s.jpg" />
            <div>
              <div class="like_list_title">遇到有这样房子的男人就嫁了把</div>
              <div class="like_list_footer">
                <div><i class="iconfont icon-time"></i>2016-07-09</div>
                <div><i class="iconfont icon-view"></i>115</div>
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/tt.jpg" />
            <div>
              <div class="like_list_title">能让您涨工资的家居风水</div>
              <div class="like_list_footer">
                <div><i class="iconfont icon-time"></i>2016-07-09</div>
                <div><i class="iconfont icon-view"></i>115</div>
              </div>
            </div>
          </li>
        </ul>
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
    return {
      swiper: ["/img/house_info.4bbdf48d.jpg", "/img/10quoted.bfa36ec4.jpg"],
    };
  },
};
</script>

<style lang="scss" scoped>
.details > div {
  background: #fff;
}
.swiper {
  width: 100%;
  height: 3rem;
  margin-top: 1.5rem;
  div {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.box {
  padding: 0 0.2rem;
  padding-top: 0.2rem;
  height: 24.4rem;
  .nav {
    background: #eaeaea;
    padding: 0.1rem;
  }
  .title {
    height: 2rem;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 0.2rem;
    p {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      width: 100%;
      height: 50%;
      display: flex;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div:nth-child(1) {
        margin-left: 1.6rem;
      }
      div:nth-child(2) {
        margin-left: 0.8rem;
      }
      i {
        margin-right: 0.1rem;
      }
    }
  }
  .text_head {
    height: 2rem;
    overflow: hidden;
    margin-bottom: 0.2rem;
    span {
      padding: 0.1rem 0.2rem;
      border: 1px solid #eaeaea;
      float: left;
      margin-right: 0.1rem;
      border-radius: 20px;
    }
  }
  .text_content {
    p {
      text-indent: 2em;
    }
    .text_image {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      margin-bottom: 0.4rem;
      img {
        height: 4rem;
        width: 70%;
      }
    }
  }
  button {
    height: 0.8rem;
    outline: none;
    border: 1px solid #2bb281;
    width: 100%;
    color: #2bb281;
    background: #fff;
    margin-bottom: 0.2rem;
  }
}
.list_head {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.2rem;
  span {
    display: flex;
    flex-direction: column;
    text-align: center;
    i {
      margin-bottom: 0.1rem;

      padding: 0.2rem;
      font-size: 0.6rem;
    }
  }
  span:nth-child(1) i {
    border-radius: 50%;
    border: 1px solid #1b9af7;
    color: #1b9af7;
  }
  span:nth-child(2) i {
    border-radius: 50%;
    border: 1px solid #feb505;
    color: #feb505;
  }
}
.like {
  background: #eaeaea;
  padding-top: 0.2rem;
  height: 2rem;
  div {
    background: #fff;
  }
  .like_title {
    padding: 0.2rem 0;

    p {
      border-left: 2px solid #39c894;
      padding-left: 0.2rem;
    }
  }
  .like_list {
    padding-top: 0.2rem;
    background: #fff;
    li {
      display: flex;
      height: 2rem;
      padding: 0.2rem 0;
      border-bottom: 1px solid #eaeaea;
      img {
        margin-right: 0.2rem;
        width: 30%;
        height: 100%;
      }
      > div {
        width: 68%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .like_list_footer {
        display: flex;
        div {
          margin-right: 0.6rem;
        }
      }
    }
  }
}
</style>