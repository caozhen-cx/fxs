<template>
    <div>
    <my-heads>
      <template v-slot:headCenter> 
          装修流程
      </template>
      <template v-slot:headRight>
          <i class="iconfont icon-user"></i>
          我的
      </template>
    </my-heads>
    <!-- 这是流程页面 -->
<bodys></bodys>
<my-footer />
<my-ftel />
</div>
</template>

<script>
import bodys from '@/components/process/bodys.vue'
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
components:{
    bodys,
}
};
</script>

<style scoped>

</style>