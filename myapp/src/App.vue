<template>
  <div id="app">
    <transition name="slide">
      <router-view class="ani-pager" />
    </transition>
    <!-- 回到顶部 -->
    <div class="fixed_top" @click="top">
      <a> <i class="icon-top iconfont"></i></a>
    </div>
    <!-- 回到顶部 -->
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
  methods: {
    top() {
      document.querySelector(".ani-pager").scrollTop = 0;
    },
    // 返回顶部
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.ani-pager {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
