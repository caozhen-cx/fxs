<template>
  <div>
      <!-- 方案列表 -->
    <my-heads>
      <template v-slot:headCenter> 装修方案 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <!-- 头部 -->
    <div class="content">
      <ul class="content_box">
          <li v-for="(item,index) in list" :key="index" @click="proDetails(item)">
              <img :src="item.image">
              <div class="bottom">
                  <div class="left">
                      <p>{{item.title}}</p>
                      <p>
                          <span>{{item.state}}：</span>
                          <span>{{item.stateCon}}</span>
                      </p>
                  </div>
                  <div class="right">
                      <span>已预约{{item.reserved}}套</span>
                  </div>
              </div>
          </li>
      </ul>
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
            list:[],
            // 数据
        }
    },
    mounted() {
        this.$http('/json/programme.json','get').then(res=>{
            this.list = res.data.data;
        });
        // 请求数据
    },
    methods: {
        proDetails(item){
            this.$router.push({path:'/details',query:{item}});
        },
        // 条详情页
    },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 0.16rem;
  margin-top: 1.6rem;
  background: #eaeaea;
  .content_box {
    width: 100%;
    background: #fff;
    position: relative;
    img {
        width: 100%;
        display: block;
    }
    .bottom {
        height: 1.5rem;
        display: flex;
        div {
            height: 100%;
        }
        .left {
            width: 60%;
            padding-left: 0.2rem;
            p {
                margin-top: 0.2rem;
                span:nth-child(1) {
                    color: #999999;
                }
                span:nth-child(2) {
                    color: #ff4351;
                }
            }
            span {
                font-size: 0.28rem;
            }

        }
        .right {
            width: 40%;
            height: 100%;

            span {
                display: block;
                width: 80%;
                height: 1rem;
                background: #ff4351;
                text-align: center;
                line-height: 1rem;
                color: #fff;
                float: right;
                margin-top: 0.3rem;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
            }
        }
    }
  }
}
</style>