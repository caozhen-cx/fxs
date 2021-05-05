<template>
    <div>
    <ul>
        <li>筛选
            <i class="iconfont icon-down"></i>
        </li>
        <li>阶段
             <i class="iconfont icon-down"></i>
        </li>
        <li>排序
             <i class="iconfont icon-down"></i>
        </li>
        <li>
            <i class="iconfont icon-search"></i>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
*{
    background-color: #fff !important;
}
ul{
       border-top: 1px solid #ccc;
    margin-top: 1.5rem;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    justify-content: space-around;
    li{
        width: 20%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        i{
            color: green;
        }
  
    }
      li:nth-child(4){
        i{
            font-size: 0.5rem; 
        }
    }
}
</style>

