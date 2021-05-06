<template>
  <div class="">
    <my-heads>
      <template v-slot:headCenter>
        效果图
      </template>
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

    <div class="box">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="gotoDetail(item)"
        >
          <img :src="item.img" alt="" />
          <div>
            <p>{{ item.title }}</p>
            <span>{{ item.style }}</span>
            <span>{{ item.house }}</span>
            <span>{{ item.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <van-pagination :page-count="2" mode="simple" />
    <my-footer />
    <my-ftel />
    <my-advertisement />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$http("/result/result.json", "get").then((res) => {
      this.list = res.data.data;
      console.log(this.result);
    });
  },

  methods: {
    gotoDetail(id) {
      console.log(id);
      this.$router.push({ path: "/detail", query: { id } });
    },
  },
};
</script>

<style scoped>
.screen {
  margin-top: 1.5rem;
  display: flex;
  height: 1rem;
  border: 0.01rem solid #eaeaea;
  background: rgb(255, 255, 255);
}
.screen div {
  width: 2.5rem;
  text-align: center;
  line-height: 1rem;
}
.box {
  background-color: #eaeaea;
  width: 100%;
}
.box ul {
  display: flex;
  padding-left: 0.1rem;
  flex-wrap: wrap;
  /* 换行 */
}
.box ul li {
  margin-top: 0.2rem;
  text-align: center;
  margin-left: 0.1rem;
  width: 48%;
  background: #ffffff;
}
.box ul li img {
  width: 100%;
  height: 3rem;
}
.box ul li span {
  color: #999999;
  margin-left: 0.2rem;
  font-size: 0.25rem;
}
.search {
  font-size: 0.5rem;

  color: #39c894;
}
.down {
  margin-left: 0.1rem;
  color: #999999;
}
</style>
