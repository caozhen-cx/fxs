<template>
  <div>
    <div class="head">
      <div>
        <img src="@/assets/img/logo.png" alt="" />
      </div>
      <div class="center" :style="{ 'font-size': size + 'rem' }">
        <slot name="headCenter"></slot>
      </div>
      <div class="right">
        <div>
          <slot name="headRight"> </slot>
        </div>
        <div><i class="iconfont icon-nav" @click="flag = !flag"></i>导航</div>
      </div>
    </div>
    <div class="head_nav"  v-show="flag">
      <div class="icont">
        <ul>
          <li @click="$router.push({ path: '/programme' })">
            <span class="sda">
              <i class="iconfont icon-case"></i>
            </span>
            <p>装修方案</p>
          </li>
          <li @click="$router.push({ path: '/result' })">
            <span class="sda">
              <i class="iconfont icon-pics"></i>
            </span>
            <p>效果图</p>
          </li>
          <li>
            <span class="sda">
              <i class="iconfont icon-designer"></i>
            </span>
            <p>设计师</p>
          </li>
          <li @click="$router.push({ path: '/broadcast' })">
            <span class="sda">
              <i class="iconfont icon-construction-site"></i>
            </span>
            <p>装修工地</p>
          </li>
          <li @click="$router.push({ path: '/strategy' })">
            <span class="sda">
              <i class="iconfont icon-decorate"></i>
            </span>
            <p>装修攻略</p>
          </li>
          <li @click="$router.push({ path: '/decoration' })">
            <span class="sda">
              <i class="iconfont icon-loans"></i>
            </span>
            <p>装修贷款</p>
          </li>
          <li>
            <span class="sda">
              <i class="iconfont icon-pencle"></i>
            </span>
            <p>免费预约</p>
          </li>
          <li @click="$router.push({ path: '/offer' })">
            <span class="sda">
              <i class="iconfont icon-ten"></i>
            </span>
            <p>十秒报价</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mask" @click="flag = false" v-show="flag">

    </div>
  </div>
</template>

<script>
import "./header.css";
export default {
  props: {
    size: {
      type: String,
      default: "0.5",
    },
  },
  data() {
    return {
      flag: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.icont {
  position: fixed;
  left: 0;
  z-index: 4;
  top: 1.5rem;
  transition: all 1s;
  i {
    font-size: 0.5rem !important;
    color: #fff;
    border-radius: 50%;
  }

  ul {
    background: #fff;
    margin-top: 0px;
    display: flex;
    width: 100%;
    height: 4rem;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 0.2rem;

    li {
      width: 21%;
      height: 2rem;

      span {
        display: inline-block;
        width: 70%;
        height: 50%;
        line-height: 1rem;
        border-radius: 50%;
      }
    }

    li:nth-child(1) {
      span {
        background-color: rgb(53, 226, 53);
      }
    }

    li:nth-child(2) {
      span {
        background-color: rgb(128, 128, 17);
      }
    }

    li:nth-child(3) {
      span {
        background-color: rgb(240, 240, 15);
      }
    }

    li:nth-child(5) {
      span {
        background-color: skyblue;
      }
    }

    li:nth-child(6) {
      span {
        background-color: rgb(122, 110, 226);
      }
    }

    li:nth-child(4) {
      span {
        background-color: rgb(81, 216, 171);
      }
    }

    li:nth-child(7) {
      span {
        background-color: rgb(197, 55, 12);
      }
    }

    li:nth-child(8) {
      span {
        background-color: rgb(167, 89, 0);
      }
    }
  }
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>