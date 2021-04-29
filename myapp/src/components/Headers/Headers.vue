<template>
  <div class="head">
    <div>
      <img src="@/assets/img/logo.png" alt="" />
    </div>
    <div class="center" :style="{'font-size':size + 'rem'}">
      <slot name="headCenter"></slot>
    </div>
    <div class="right">
      <div>
        <slot name="headRight"> </slot>
      </div>
      <div><i class="iconfont icon-nav"></i>导航</div>
    </div>
  </div>
</template>

<script>
import "./header.css";
export default {
    props:{
        size:{
            type:String,
            default:'0.5'
        }
    }
};
</script>
