<template>
  <div class="box">
    <!-- 设计师部分 -->
    <div class="box-top">
      <p>设计师</p>
    </div>
    <div class="box-list">
      <ul class="list">
        <li>
          <img src="/images/01.jfif" alt="" /><span>吴飞柯</span
          ><span>优秀</span>
        </li>
        <li>
          <img src="/images/02.jfif" alt="" /><span>陆炎龙</span
          ><span>主任</span>
        </li>
        <li>
          <img src="/images/03.jfif" alt="" /><span>张海建</span
          ><span>总监</span>
        </li>
        <li>
          <img src="/images/01.jpg" alt="" /><span>陈冲</span><span>优秀</span>
        </li>
      </ul>
    </div>
    <div class="box-bottom">
      <div>换一换<i class="iconfont icon-change"></i></div>
      <div>更多设计师 <i class="iconfont icon-more"></i></div>
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

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 6rem;
  background: #fff;
  margin-top: 0.2rem;
}
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
}
.box-list {
  width: 100%;
  height: 3.5rem;
  margin-top: 0.2rem;
  .list {
    display: flex;
    width: 100%;
    height: 2rem;
    li {
      border-radius: 50%;
      flex: 1;
      //    width: 25%;
      padding: 0.1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      span:nth-of-type(1) {
        text-align: center;
        display: block;
        margin-top: 0.2rem;
      }
      span:nth-of-type(2) {
        text-align: center;
        display: block;
        margin-top: 0.2rem;
        background-color: #2bb281;
        color: white;
        border-radius: 15%;
      }
    }
  }
}
.box-bottom {
  width: 95%;
  height: 1rem;
  border: 0.01rem solid #ccc;
  margin: 0 auto;
  display: flex;
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
