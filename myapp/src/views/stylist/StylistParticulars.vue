<template>
  <!-- 设计师详情页 -->

  <div class="">
    <my-heads />

    <div class="stylistBox"></div>

    <!-- 设计图部分 -->
    <div class="box">
      <div class="design-top">
        <p>设计图</p>
      </div>

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

    <my-footer />
    <my-ftel />
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

<style lang="scss">
.box {
  background-color: #eaeaea;
  width: 100%;
}
.design-top {
  display: flex;
  height: 0.7rem;
  padding-top: 0.2rem;
  p:nth-child(1) {
    border-left: 0.05rem solid #39c894;
    margin-left: 0.2rem;
    padding-top: 0.08rem;
    font-size: 0.35rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
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

.stylistBox {
  margin-top: 1.5rem;
}
</style>
