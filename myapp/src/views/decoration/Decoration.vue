<template>
  <div class="decoration">
    <my-heads>
      <template v-slot:headCenter> 装修贷款 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <div class="head_image">
      <img src="@/assets/img/loans/loans.jpg" />
      <p>申请房先森装修贷</p>
      <img src="@/assets/img/common/icon_title.png" />
    </div>
    <div class="form">
      <my-input placeholder="电话" />
      <my-input placeholder="小区名" />
      <my-input placeholder="建筑面积" />
      <button>立即申请</button>
    </div>
    <div class="content">
      <div class="content_head">
        装修贷款是无担保个人信用贷款，是房先森装修和建行共同为准备装修的工薪人士发放的个人信用贷款，用于房屋装修相关的支出。<span>无需担保，无需抵押，</span>以个人信誉度作为判断依据，<span
          >最高可贷50万。</span
        >
      </div>
      <div class="title">什么是装修贷款?</div>
      <p>申请流程</p>
      <img src="@/assets/img/common/icon_title.png" />
    </div>
    <ul class="tab">
      <li>
        <i class="iconfont icon-pencle"></i>
        <span>01</span>
        <span>在线预约</span>
      </li>
      <li>
        <i class="iconfont icon-audit"></i>
        <span>01</span>
        <span>银行评估初审</span>
      </li>
      <li>
        <i class="iconfont icon-loans"></i>
        <span>01</span>
        <span>提交材料放款</span>
      </li>
    </ul>
    <p class="tj">申请条件 <img src="@/assets/img/common/icon_title.png" /></p>

    <div class="list">
      <div>
        <i class="iconfont icon-social-security"></i>
        社保缴纳记录
      </div>
      <div>
        <i class="iconfont icon-social-security"></i>
        社保缴纳记录
      </div>
      <div>
        <i class="iconfont icon-social-security"></i>
        社保缴纳记录
      </div>
      <div>
        <i class="iconfont icon-social-security"></i>
        社保缴纳记录
      </div>
    </div>
    <img src="@/assets/img/loans/vs.jpg"  class="vs">

    <my-footer />
    <my-ftel />
  </div>
</template>



<style lang="scss" scoped>
.decoration {
  background: #fff;
}
.head_image {
  width: 100%;
  margin-top: 1.5rem;
  background: #fff;
  position: relative;
  img:nth-child(1) {
    width: 100%;
  }
  p {
    padding: 0 0.2rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    border-bottom: 1px solid #eaeaea;
  }
  img:nth-child(3) {
    z-index: 1;
    bottom: -0.45rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    padding: 0.2rem;
    background: #fff;
  }
}
.form {
  width: 100%;
  padding-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  > div {
    margin-bottom: 0.2rem;
  }
  button {
    height: 0.8rem;
    color: #fff;
    border: none;
    background: #feb505;
    width: 5.5rem;
  }
}
.content {
  padding: 0 0.2rem;
  width: 100%;
  position: relative;
  .content_head {
    text-indent: 2em;
    padding: 0.4rem 0.2rem;
    border: 1px dashed #39c894;
  }
  p {
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #eaeaea;
  }
  .title {
    position: absolute;
    left: 50%;
    top: -0.3rem;
    padding: 0 0.2rem;
    z-index: 1;
    transform: translateX(-50%);
    background: #fff;
    font-size: 0.4rem;
  }
  img {
    z-index: 1;
    bottom: -0.45rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    padding: 0.2rem;
    background: #fff;
  }
}
.tab {
  height: 3rem;
  margin-top: 0.6rem;
  display: flex;
  li {
    display: flex;
    flex-direction: column;
    margin: 0 0.2rem;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 1px solid #39c894;
    i {
      font-size: 0.6rem;
      color: #39c894;
    }
    span {
      font-size: 0.3rem;
    }
  }
}
.tj {
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  border: 1px solid #eaeaea;
  position: relative;
  img {
    z-index: 1;
    bottom: -0.45rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    padding: 0.2rem;
    background: #fff;
  }
}
.list {
  display: flex;
  padding: 0.2rem;
  flex-wrap: wrap;
  width: 100%;

  > div {
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.4rem 0;

    i {
      font-size: 1rem;
      padding: 0.2rem;
      background: #39c894;
      color: #fff;
      border-radius: 50%;
      margin-bottom: 0.1rem;
    }
  }
  div:nth-child(2n + 1) {
    border-right: 1px solid #eaeaea;
  }
  div:nth-child(-n + 2) {
    border-bottom: 1px solid #eaeaea;
  }
}
.vs {
    width: 100%;
}
</style>