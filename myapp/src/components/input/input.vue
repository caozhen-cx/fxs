<template>
  <div class="">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="inputChange"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: "",
    placeholder: {
      type:String,
      default:'请输入内容'
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    inputChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang='scss'>
input {
  width: 5.5rem;
  height: 0.7rem;
  font-size: 0.2rem;
   border:0.01rem solid #eaeaea;
}
</style>
