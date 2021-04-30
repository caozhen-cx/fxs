<template>
  <!--  攻略导航组件    -->
  <div>
    <van-tabs v-model="active">
      <van-tab :title="item.title" v-for="(item, index) in list" :key="index">
          <ul>
                <li v-for="(item,index) in relist" :key="index">
        <span>
        <i :class="item.class"></i>
        </span>
        <p>{{item.title}}</p>
      </li>
          </ul>
      </van-tab>
    </van-tabs>
    <button class="btn">了解装修流程</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      list: [],
      relist: [],
    };
  },
  mounted() {
    this.$http("/Strategy/nav.json", "get").then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
    this.$http("/Strategy/num.json", "get").then((res) => {
      console.log(res);
      this.relist = res.data.data;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>

i {
  font-size: 0.5rem !important;
  color: #fff;
  border-radius: 50%;
  color:#39c894;
}
ul {
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 2rem;
  text-align: center;

  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 21%;
    height: 2rem;
    span{
    border: 2px solid #39c894;
      display: inline-block;
      width: 70%;
      height: 50%;
   line-height: 1rem;
      border-radius: 50%;
    }
  }

}
  .btn{
      width: 90%;

      margin-left: 5%;
      border: 2px solid #39c894;
      color: #39c894;
      background-color: #fff;
      height: 0.7rem;
  }
</style>
