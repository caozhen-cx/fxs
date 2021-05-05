<template>
  <div class="box">
    <my-heads>
      <template v-slot:headCenter> 设计师 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <div class="screen">
      <div>户型<i class="iconfont icon-down down"></i></div>
      <div>区域<i class="iconfont icon-down down"></i></div>
      <div>风格<i class="iconfont icon-down down"></i></div>
      <div><i class="iconfont icon-search search"></i></div>
    </div>

    <div class="stylist_img">
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
      <div>
        <div><img src="/images/01.jfif" alt="" /></div>
        <div>
          <span>陈冲</span>
          <span>优秀</span>
          <span>708 <em>人气</em></span>
          <span>作品:&emsp;<em>8个</em></span>
          <span>经验:&emsp;<em>5年</em></span>
          <span>评价:&emsp;<em>10</em></span>
          <span>擅长风格：<em>现代/美式/简约/新古典</em></span>
        </div>
      </div>
    </div>
    <div class="stylist_page">
      <div>
        <div>上一页</div>
        <div>1/30</div>
        <div>下一页</div>
      </div>
    </div>
    <my-footer />    
    <!-- 尾部内容组件，已注册全局，直接使用 -->

    <my-ftel />
    <!-- 尾部服务热线 -->

    <!-- 在这个页面测试组件 -->

    <my-advertisement />
    <!-- 尾部广告用法 -->
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

<style scoped lang="scss">
.screen {
  background: #fff;
  border-top: 0.01rem solid #ccc;
  margin-top: 1.5rem;
  display: flex;
  height: 1rem;
}
.screen div {
  width: 2.5rem;
  text-align: center;
  line-height: 1rem;
}
.search {
  font-size: 0.5rem;
  color: #39c894;
}
.stylist_img {
  width: 100%;
  height: 25rem;
  background: #fff;
  margin-top: 0.2rem;
  > div {
    width: 100%;
    height: 2.5rem;
    display: flex;
    border-bottom: 0.01rem solid #ccc;
    div:nth-child(1) {
      flex: 0.3;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
      }
    }
    div:nth-child(2) {
      flex: 0.7;
      span:nth-child(1) {
        display: inline-block;
        font-size: 0.5rem;
        margin-top: 0.2rem;
        margin-left: 0.15rem;
      }
      span:nth-child(2) {
        display: inline-block;
        font-size: 0.3rem;
        width: 0.8rem;
        height: 0.4rem;
        background: #39c894;
        color: white;
        border-radius: 0.15rem;
        text-align: center;
        margin-left: 0.2rem;
      }
      span:nth-child(3) {
        float: right;
        margin-right: 0.5rem;
        font-size: 0.35rem;
        border-radius: 0.15rem;
        text-align: center;
        margin-top: 0.3rem;
        color: #feb505;
        em {
          font-style: normal;
          color: #000;
        }
      }
      // 作品
      span:nth-child(4) {
        display: inline-block;
        margin-left: 0.15rem;
        font-size: 0.35rem;
        border-radius: 0.15rem;
        text-align: center;
        margin-top: 0.3rem;
        color: #333;
        em {
          font-style: normal;
          color: #ccc;
        }
      }
      // 经验
      span:nth-child(5) {
        display: inline-block;
        margin-left: 0.3rem;
        font-size: 0.35rem;
        border-radius: 0.15rem;
        text-align: center;
        margin-top: 0.3rem;
        color: #333;
        em {
          font-style: normal;
          color: #ccc;
        }
      }
      // 评价
      span:nth-child(6) {
        display: inline-block;
        margin-left: 0.3rem;
        font-size: 0.35rem;
        border-radius: 0.15rem;
        text-align: center;
        margin-top: 0.3rem;
        color: #333;
        em {
          font-style: normal;
          color: #ccc;
        }
      }
      // 擅长风格
      span:nth-child(7) {
        display: inline-block;
        margin-left: 0.15rem;
        font-size: 0.35rem;
        border-radius: 0.15rem;
        text-align: center;
        margin-top: 0.2rem;
        color: #333;
        em {
          font-style: normal;
          color: #ccc;
        }
      }
    }
  }
}
.stylist_page {
  width: 100%;
  height: 2rem;
  background: white;
  border: 0.01rem solid #fff;
  div {
    width: 90%;
    height: 1rem;
    margin: 0.2rem auto;
    display: flex;
    justify-content: center;
    div:nth-child(1) {
      flex: 0.3;
      font-size: 0.5rem;
      background: #ccc;
      text-align: center;
      line-height: 1rem;
      padding-left:0.2rem;
    }
    div:nth-child(2) {
      flex: 0.4;
      background: #fff;
      border-top: 0.01rem solid #ccc;
      border-bottom: 0.01rem solid #ccc;
      font-size: 0.5rem;
      text-align: center;
      line-height: 1rem;
    }
    div:nth-child(3) {
      flex: 0.35;
      color: white;
      font-size: 0.5rem;
      background: #39c894;
      text-align: center;
      line-height: 1rem;
    }
  }
}
</style>
