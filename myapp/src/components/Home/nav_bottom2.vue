<template>
  <div class="box">
    <!-- 装修预约部分 -->
    <div class="box-top">
      <p>装修预约</p>
      <p>免费上门量房，设计方案满意为止</p>
    </div>
    <div class="box-input">
      <my-input placeholder="小区名" />
      <my-input placeholder="手机号" />
      <my-input placeholder="建筑面积" />
      <button>立即申请</button>
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
  height: 5.3rem;
  background: #fff;
  margin-top: 0.2rem;
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
  .box-input {
    width: 90%;
    margin: 0.2rem auto;
    div {
      margin: 0.4rem 0.4rem;
      input {
        border-radius: 0.2rem;
        border-color: #eaeaea;
        color: #cacaca;
      }
    }
    button {
      width: 5.5rem;
      height: 0.8rem;
      background: #feb505;
      border: none;
      margin: -0.5rem 0.45rem;
      color:white;
      border-radius: 0.2rem;
    }
  }
}
</style>
