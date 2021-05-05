<template>
<!-- 攻略商品列表组件 -->
  <div>
<ul>
    <li v-for="(item,index) in result" :key="index">
        <span class="left">
<img :src="item.img" alt="">
        </span>
        <span class="right">
<p>{{item.title}}</p>
<div class="vz">
<span class="timer">
    <i class="iconfont icon-time"></i>
    {{item.timer}}
</span> 
<span class="num">
<i class="iconfont icon-view"></i>
{{item.num}}
</span>
</div>
        </span>
    </li>
</ul>
<button class="new">
     换一批
       <i class="iconfont icon-change"></i>
</button>
</div>
</template>

<script>
export default {
    data() {
        return {
    result:[]
};
    },
    mounted() {
    this.$http("/Strategy/shop.json","get").then((res)=>{
        console.log(res);
        this.result=res.data.data
    })
},
    methods: {},
};
</script>
<style lang="scss" scoped>
ul{
    margin-top: 0.5rem;
    li{
  
     width: 100%;
    height: 2rem;

     border-bottom:1px solid rgb(51, 235, 51);
    .left{
        display: inline-block;
        margin-top: 0.1rem;
        margin-left: 5%;
        width: 25%;
        height: 1.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
        .right{
            position: relative;
            display: inline-block;
        width:70%;
   
        height:2rem;
        p{
            position: absolute;
            width: 90%;
            top:-1.2rem;
           overflow: hidden;
          text-overflow: ellipsis;
           white-space: nowrap;
        }
      .num,.timer{
          position: relative;
          top: -0.5rem;
          left: 0.1rem;
          i{
              color: #39c894;
          }
      }
    }
    }

}
    .new{
        margin-top: 0.3rem;
           width: 90%;

      margin-left: 5%;
      border: 2px solid rgb(33, 236, 33);
      color: rgb(63, 230, 63);
      background-color: #fff;
      height: 0.7rem;
    }

</style>
