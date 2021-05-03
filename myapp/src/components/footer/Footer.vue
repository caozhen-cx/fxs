<template>
  <div class="footer_tel">
    <div><i class="iconfont icon-hot-line"></i>服务热线：400-9977-658</div>
    <div>
      <ul>
        <li>触屏版</li>
        <li>电脑版</li>
        <li><a href="#/about">关于我们</a></li>
        <li @click="$router.push({path:'/contact'})">联系我们</li>
      </ul>
    </div>
    <div>
         © 2016 <span>浙ICP备15033817号-1</span>
    </div>
  </div>
  <!--  -->
</template>

<script>
export default {};
</script>

<style>
</style>