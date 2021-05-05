<template>
  <div class="offer">
    <my-heads>
      <template v-slot:headCenter> 装修报价 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <!-- 头部 -->

    <div class="head_head">
      <img src="@/assets/img/10quoted.jpg" alt="" />
    </div>
    <div class="offer_time">
      <div class="offer_box">房先森10S报价</div>
    </div>

    <div class="offer_form">
      <p>
        <input type="text" placeholder="请填写建筑面积" />
      </p>
      <p>
        <select class="type">
          <option value="">现代</option>
        </select>
      </p>
      <p>
        <select class="">
          <option value="">1室</option>
        </select>
        <select class="">
          <option value="">1厅</option>
        </select>
      </p>
      <p>
        <select class="">
          <option value="">1厨</option>
        </select>
        <select class="">
          <option value="">1卫</option>
        </select>
        <select class="">
          <option value="">1阳台</option>
        </select>
      </p>
      <p>立即申请</p>
    </div>

    <div class="offer_price">
      <div class="offer_box">
        <p>全包装修总价: <span>81,889,78</span>元</p>
        <p>您还可以选择</p>
        <p>房先森装修半价包套餐价,<span>399</span>元/平米</p>
        <p>预约399套餐</p>
      </div>
      <div class="offer_price_title">装修报价</div>
    </div>

    <div class="offer_footer">
      <div class="offer_footer_title">我们可以为您提供</div>
      <ul class="offer_footer_content">
        <li>
          <i class="iconfont icon-app"></i>
          <p>产品系列</p>
          <span>半包、全包套餐、全屋定制及个性化升级</span>
        </li>
        <li>
          <i class="iconfont icon-price"></i>
          <p>0元装修</p>
          <span>于建行合作装修贷款，实现0元开始装修</span>
        </li>
        <li>
          <i class="iconfont icon-live"></i>
          <p>工地直播</p>
          <span>工地巡查照片、360度全景节点验收</span>
        </li>
        <li>
          <i class="iconfont icon-preferential"></i>
          <p>合作优惠</p>
          <span>正品材料工厂直供，F2C让利用户</span>
        </li>
        <li>
          <i class="iconfont icon-construction-site"></i>
          <p>参观工地</p>
          <span>随时预约参观工地，零距离感受施工艺术</span>
        </li>
        <li>
          <i class="iconfont icon-protection-fill"></i>
          <p>售后保障</p>
          <span>整装2年质保，隐蔽水电工程10年质保</span>
        </li>
      </ul>
    </div>
    <my-footer />
    <my-ftel />
  </div>
</template>



<style lang="scss" scoped>
.offer {
  background: #ccc;
  margin-top: 1.6rem;
}
.offer > div {
  background: #fff;
}
.head_head {
  width: 100%;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.offer_time {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  .offer_box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #999999;
  }
}
.offer_form {
  padding: 1rem 1rem 0.1rem 1rem;
  p {
    height: 0.6rem;
    margin-bottom: 0.2rem;
  }
  input {
    width: 100%;
    height: 100%;
  }
  .type {
    width: 100%;
    height: 100%;
  }
  p:nth-child(3) {
    display: flex;
    select {
      flex: 1;
      height: 100%;
    }
  }
  p:nth-child(4) {
    display: flex;
    select {
      flex: 1;
      height: 100%;
    }
  }
  p:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #feb505;
    color: #fff;
  }
}

.offer_price {
  padding: 0.2rem;
  width: 100%;
  height: 4rem;
  position: relative;
  .offer_box {
    border: 1px dashed #ccc;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    color: #666666;
    p:nth-child(1) span {
      color: #ff4351;
    }
    p:nth-child(2) {
      color: #000;
    }
    p:nth-child(3) span {
      color: #eed215;
    }
    p:nth-child(4) {
      width: 70%;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #39c894;
      color: #39c894;
    }
  }
  .offer_price_title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding: 0 0.2rem;
    background: #fff;
    z-index: 1;
  }
}

.offer_footer {
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  .offer_footer_title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    border-bottom: 1px solid #eaeaea;
  }
  .offer_footer_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.16rem;
    padding-bottom: 0.4rem;
    li {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.2rem;
      height: 2.4rem;
      border-bottom: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      i {
        padding: 0.2rem;
        font-size: 0.5rem;
        border-radius: 50%;
        background: #39c894;
        color: #fff;
        margin-bottom: 0.1rem;
      }
      span {
        font-size: 0.16rem;
        margin-top: 0.1rem;
        color: #999999;
      }
    }
    li:nth-child(3n) {
      border-right: none;
    }
    li:nth-child(n+4) {
        padding: 0.2rem 0;
        margin: 0;
        border-bottom: none;
    }
  }
}
</style>