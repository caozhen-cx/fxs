<template>
  <!-- 攻略商品列表组件 -->
    
  <div class="big">
    <ul>
      <li v-for="(item, index) in result" :key="index" @click="change">
        <span class="left">
          <img :src="item.img" alt="" />
        </span>
        <span class="right">
          <p>{{ item.title }}</p>
          <div class="vz">
            <span class="timer">
              <span class="tit">{{ item.timer }}</span>
              <i class="iconfont icon-panorama"></i>
            </span>
          </div>
          <span class="lasts">
            <span class="room"> 三室</span>
            <span class="area"> 60~90㎡</span>
            <span class="fast">
              <i class="iconfont icon-location"></i>
              {{ item.num }}
            </span>
          </span>
        </span>
      </li>
    </ul>
    <div class="btn">
      <button class="btn_left">上一页</button>
      <span>2/250</span>
      <button class="btn_right">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
    };
  },
  mounted() {
    this.$http("/broadcast/broadcast.json", "get").then((res) => {
      console.log(res);
      this.result = res.data.data;
    });
  },
  methods: {
      change(){
          this.$router.push("/broadcastDetails")
      }
  },
};
</script>
<style lang="scss" scoped>
ul {
  li {
    width: 100%;
    height: 2rem;
    background: #fff;
    border-bottom: 1px solid rgb(51, 235, 51);
    .left {
      display: inline-block;
      margin-top: 0.1rem;
      margin-left: 5%;
      width: 25%;
      height: 1.8rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      position: relative;
      display: inline-block;
      width: 70%;

      height: 2rem;
      p {
        position: absolute;
        width: 90%;
           left: 0.1rem;
        top: -1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .timer {
        position: relative;
        top: -0.6rem;
        left: 0.1rem;
        .tit {
          background-color: #39c894 !important;
          color: #fff;
          display: inline-block;
          width: 1.6rem;
          text-align: center;
          border-radius: 20px 20px 20px 20px;
        }
        i {
          margin-left: 0.5rem;
          font-size: 0.5rem;
          color: #39c894;
        }
      }
    }
  }
}
.lasts {
  color: #ccc;
  position: absolute;
  left: -0.2rem;
  top: 0.1rem;
  span {
    margin-left: 0.5rem;
  }
}
.btn {
  margin-top: 0.5rem;
  width: 80%;
  margin-left: 15%;
  span,
  button {
    float: left;
    width: 30%;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
  }
  button {
    border: 0;
    background-color: #39c894;
  }
}
.big {
  height: 25rem;
}
</style>
