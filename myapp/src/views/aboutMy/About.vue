<template>
  <div class="about">
    <!-- 装修流程页面 -->
    <my-heads>
      <template v-slot:headCenter> 装修流程 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>

    <div class="head_img">
      <div class="image"></div>
      <div class="title">
        <div class="title_box">房先森简介</div>
      </div>
    </div>

    <div class="text">
      <p>
        杭州瑞壹网络科技有限公司旗下房先森，专注于家庭装修服务，装饰立足刚需房利用互联网将装修、供应链、进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。杭州瑞壹网络科技有限公司成立了房先森装修学院并以装修套餐个性化定制的模式，提供创新型装修服务。
      </p>
    </div>
    <img src="http://img.sirfang.com/editor/2016/07/05/999b8e788a48b0dc6672edf2883bc0a8.jpg" alt="">
    <my-ftel />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  overflow: hidden;
  .head_img {
    margin-top: 1.6rem;

    .image {
      height: 3rem;
    }
  }
}
.about > div {
  background: #fff;
}
.title {
  height: 1.5rem;

  padding: 0 0.2rem;
  div {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    border-bottom: 1px solid #eee;
  }
}
.text {
    padding: 0.2rem;
    p {
        text-indent: 2em;
    }
}
.about>img{
    width: 100%;
}
</style>