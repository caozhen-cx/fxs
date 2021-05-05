<template>
  <div>
    <my-heads>
      <template v-slot:headCenter> 工地直播 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <naves></naves>
    <bodys></bodys>
    <my-ftel />
  </div>
</template>

<script>
import bodys from "@/components/Broadcast/bodys.vue";
import naves from "@/components/Broadcast/nav.vue";
export default {
  components: {
    naves,
    bodys,
  },
};
</script>
