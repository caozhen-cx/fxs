<template>
  <!-- 设计师详情页 -->

  <div class="">
    <my-heads />

    <div class="stylistBox">
      <div class="stylist">
        <div class="left">
          <img src="/images/01.jfif" alt="" />
        </div>
        <div class="right">
          <div class="name_box">
            <span class="name">陈冲</span>
            <span class="green">优秀</span>
          </div>
          <div class="production_box">
            <span> 作品: </span>
            <span class="production_gray"> 8个 </span>
            <span> 经验: </span>
            <span class="production_gray"> 5年 </span>
          </div>
          <div class="good">
            <span> 擅长风格: </span>
            <span class="production_gray"> 现代/美式/简约/新古典 </span>
          </div>
          <div class="design_idea">
            <span> 设计理念: </span>
            <span class="production_gray">
              在满足使用功能的前提下达到审美功能的最大化
            </span>
          </div>
        </div>
      </div>
      <div class="praise">
        <ul>
          <li>
            <span class="thumb-up"
              ><i class="iconfont icon-thumb-up"></i>
              <p>人气(618)</p>
            </span>
          </li>
          <li>
            <span class="pencle"
              ><i class="iconfont icon-pencle"></i>
              <p>评价(10)</p>
            </span>
          </li>
          <li>
            <span class="design"
              ><i class="iconfont icon-design"></i>
              <p>找我设计</p>
            </span>
          </li>
        </ul>
      </div>
      <div class="synopsis">
        <span>个人简介：</span
        ><span class="introduce"
          >毕业于中国美术学院，从事家装行业3年，积累了一定的经验。具有良好的审美能力以及独立完成项目方案设计的能力。工作期间曾完成多个室内精装修项目，熟悉室内装修施工工艺材料的运用。切合实际生活的设计，营造舒适的私人空间。</span
        >
      </div>
    </div>
    <div class="gray"></div>

    <!-- 设计图部分 -->
    <div class="box">
      <div class="gray"></div>

      <div class="design-top">
        <p>设计图</p>
        <span>设计收费 50-100元/m</span>
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
* {
  background-color: #ffffff;
}
.box {
  background-color: #eaeaea;
  width: 100%;
  margin-top: 1.5rem;
}
.design-top {
  display: flex;
  height: 0.7rem;
  padding-top: 0.1rem;
  p:nth-child(1) {
    border-left: 0.05rem solid #39c894;
    margin-left: 0.2rem;
    padding-top: 0.08rem;
    font-size: 0.35rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
}
.box span {
  font-size: 0.1rem;
  margin-top: 0.4rem;
  margin-left: 4rem;
  color: #999999;
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
  border: 1px solid #9e9d9d;
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
  height: 6rem;
}
.gray {
  height: 0.2rem;
  background-color: #eaeaea;
}
.praise {
  height: 2rem;
  line-height: 2rem;
}
.praise ul li {
  height: 1rem;
  float: left;
  margin-left: 1.2rem;
}
.praise i {
  font-size: 0.6rem;
}
.thumb-up {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #febb64;
  display: inline-block;
  border-radius: 50%;
  border: 0.01rem solid #febb64;
}
.thumb-up p {
  font-size: 0.2rem;
}
.pencle {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #1b9af7;
  display: inline-block;
  border-radius: 50%;
  border: 0.01rem solid #1b9af7;
}
.pencle p {
  font-size: 0.2rem;
}

.design {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #ff4351;
  display: inline-block;
  border-radius: 50%;
  border: 0.01rem solid #ff4351;
}
.design p {
  font-size: 0.2rem;
}

.introduce {
  color: #666666;
}

.synopsis {
  margin-top: 0.1rem;
}
.stylist {
  height: 2.5rem;
}
.left {
  float: left;
  height: 2.5rem;
  width: 2rem;
}
.left img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  // margin-top: 0.4rem;
  margin-left: 0.5rem;
}
.right {
  float: right;
  height: 2.5rem;
  width: 5rem;
}
.green {
  margin-left: 0.2rem;
  width: 0.5rem;
  text-align: center;
  line-height: 0.3rem;
  height: 0.3rem;
  background-color: #39c894;
  color: #eaeaea;
  font-size: 0.2rem;
}
.production_gray {
  color: #999999;
}
</style>
