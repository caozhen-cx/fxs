<template>
  <div class="details">
    <!-- 方案详情 -->
    <my-heads>
      <template v-slot:headCenter> 装修方案 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <!-- 头部 -->

    <!-- 展示 -->
    <div class="content">
      <div class="top">
        <div class="content_left">
          <img :src="date.image" alt="" />
        </div>

        <div class="content_right">
          <p>{{ date.title }}</p>
          <p>
            价格：<span>{{ date.price | price }}</span>
          </p>
          <p>
            已预约：<span>{{ date.reserved }}套</span>
          </p>
          <p>
            {{ date.state }}：<span>{{ date.stateCon }}</span>
          </p>
        </div>
      </div>
      <div class="bottom">
        <p>
          精装全包套餐，包设计/包主材/包施工/包建立。采用知名铺材、一线主材，工厂直供F2C模式
        </p>
      </div>
    </div>

    <!-- 展示 -->

    <!-- 列表 -->
    <div class="list">
      <div class="tab" @click="tab">
        <span
          v-for="(item, index) in listTab"
          :key="index"
          :class="{ bor: index == i }"
          :data-index="index"
          >{{ item }}</span
        >
      </div>
      <div class="list_content">
        <div v-show="i == 0">
          <img
            src="http://img.sirfang.com/editor/2018/01/21/744a191a9097a278d7fafe5b52c09374.JPG"
            alt=""
          />
          <img
            src="http://img.sirfang.com/editor/2018/01/21/04c3531b7b004a975c7c11a56e27557a.JPG"
            alt=""
          />
          <img
            src="http://img.sirfang.com/editor/2018/01/21/54ba07f046b3d8b29629f6d13b19e4c2.JPG"
            alt=""
          />
          <img
            src="http://img.sirfang.com/editor/2018/01/21/1646c335a8815b175f7b0ef9e68eeb68.JPG"
            alt=""
          />
        </div>
        <div class="box" v-show="i == 1">
          <div class="configuration">
            <div class="title">
              <span v-for="(item, index) in date.content" :key="index">{{
                item
              }}</span>
            </div>
          </div>
          <table width="100%">
            <tr>
              <td width="20%">项目</td>
              <td width="20%">品牌</td>
              <td>详细说明</td>
            </tr>
            <tr>
              <td>地柜</td>
              <td>定制橱柜</td>
              <td>3延米以内</td>
            </tr>
            <tr>
              <td>吊柜</td>
              <td>定制橱柜</td>
              <td>1.2</td>
            </tr>
            <tr>
              <td>台面</td>
              <td>石英石</td>
              <td>3延米以内</td>
            </tr>
            <tr>
              <td>套装门/移门及五金</td>
              <td>樱花</td>
              <td>
                含门以及门安装、三维可调试合页、门锁、门吸，厨房空间提供一趟门，平面和插框造型，仅限原始门户空间配门。若移门，只限3平方米
              </td>
            </tr>
            <tr>
              <td>门套</td>
              <td>双诺</td>
              <td>定制</td>
            </tr>
            <tr>
              <td>小地转</td>
              <td>马可波罗瓷砖</td>
              <td>地砖铺满</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <my-footer />
    <my-ftel />
    <div class="footer_button">
      <i class="iconfont icon-tag"></i>
      马上免费预约
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      // 数据
      listTab: ["套餐详情", "配置清单", "施工工艺", "服务流程"],
      i: 0,
    };
  },
  mounted() {
    this.date = this.$route.query.item;
  },
  filters: {
    price(val) {
      return "￥" + val + "元/㎡";
    },
  },
  methods: {
    tab(e) {
      if (e.target.getAttribute("data-index")) {
        this.i = e.target.getAttribute("data-index");
      }
    },
    //   tab切换
  },
};
</script>

<style lang="scss" scoped>
.details > div {
  background: #fff;
}
.content {
  margin-top: 1.6rem;
  padding: 0.36rem 0.2rem;
  .top {
    display: flex;
    height: 2rem;
    > div {
      height: 100%;
    }
    .content_left {
      width: 40%;
    }
    .content_right {
      width: 60%;
      padding-left: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 0.28rem;
        color: #999999;
        span {
          font-size: 0.28rem;
        }
      }
      p:nth-child(2n) span {
        color: #ff4351;
      }
      p:nth-child(1) {
        font-size: 0.4rem;
        color: #000;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
    height: 2rem;
    padding-top: 0.4rem;
    line-height: 0.6rem;
  }
}
.list {
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  .tab {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
            margin-bottom: 0.2rem;
    span {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .bor {
      border-bottom: 2px #39c894 solid;
    }
  }
  .list_content {
    width: 100%;
    .configuration {
      height: 1rem;
      width: 100%;
      overflow-x: hidden;
      .title {
        display: flex;
        align-items: center;
        width: 200%;
      }
      span {
        padding: 0.2rem;
        border: 1px solid #39c894;
        color: #39c894;
        border-radius: 20px;
        margin-right: 0.2rem;
      }
    }
    img {
      width: 100%;
    }
  }
}
.footer_button {
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba($color: #ff4351, $alpha: 0.8) !important;
  i {
  }
}
.box {
  height: 8rem;
  td {
    padding: 0.2rem;
    font-size: 0.2rem;
  }
}
</style>