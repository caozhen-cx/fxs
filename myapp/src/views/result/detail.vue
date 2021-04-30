<template>
  <div>
    <my-heads />

    <div class="box">
      <img :src="id.img" alt="" />
      <p class="green">卧室(1) 书房(1) 厨房(1) 卫生间(1)</p>
      <div class="txt">
        <p>设计诠释：less is more 不需要过多的装饰，</p>
        <p>简单的墙面背景与简洁的家具即可组成一个温</p>
        <p>暖的家</p>
      </div>
    </div>
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
      id: this.$route.query.id,
    };
  },
  mounted() {},
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 8rem;
  background: #000000;
  margin-top: 1.5rem;
}
.box img {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  margin-top: 1rem;
}
.green {
  color: #39c894;
  margin-top: 0.2rem;
  text-align: center;
}
.txt {
  text-align: center;
  color: #eaeaea;
}
</style>
