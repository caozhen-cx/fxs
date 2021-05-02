<template>
  <div class="home">
    <my-heads />
    <!-- 封装的头部 -->
    <swiper />
<<<<<<< HEAD
    
=======
    <!--轮播图  -->
    <navs />
    <!--导航  -->
    <navBottom1 />
    <!-- 全屋装修 -->
    <navBottom2 />
    <!-- 装修预约 -->
    <navBottom3 />
    <!-- 设计师 -->
    <design />
    <!-- 设计图 -->
    <visit />
    <!-- 工地直播 -->
    <startegy />
    <!-- 装修攻略 -->
>>>>>>> jing
  </div>
  <!-- 主页面 -->
</template>

<script>
import swiper from "@/components/Home/Swiper";
// 轮播图
import navs from "@/components/Home/icont";
// 导航
import navBottom1 from "@/components/Home/nav_bottom1";
// 全屋装修
import navBottom2 from "@/components/Home/nav_bottom2";
// 装修预约
import navBottom3 from "@/components/Home/nav_bottom3";
// 设计师
import design from "@/components/Home/design";
// 设计图
import visit from "@/components/Home/visit";
// 工地直播
import startegy from "@/components/Home/startegy";
// 装修攻略
export default {
  data() {
    return {};
  },
  components: {
    swiper,
    navs,
    navBottom1,
    navBottom2,
    navBottom3,
    design,
    visit,
    startegy,
  },
};
</script>
<style lang="scss">
.home {
  background: #eaeaea;
}
</style>