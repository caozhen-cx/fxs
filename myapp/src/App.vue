<template>
  <div id="app">
    <input type="hidden" id="top" />
    <router-view />
    <div class="fixed_top" @click="top">
      <a href="#top"> <i class="icon-top iconfont"></i></a>
    </div>
  </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
  methods: {
    top() {},
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
</style>
