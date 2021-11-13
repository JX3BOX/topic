<template>
  <div class="m-arr">
    <span
      class="u-arr u-prev"
      @click="turn(0)"
      :style="{ opacity: index > 1 ? 1 : 0 }"
    ></span>
    <span
      class="u-arr u-next"
      @click="turn(1)"
      :style="{ opacity: index < len ? 1 : 0 }"
    ></span>
  </div>
</template>
<script>
export default {
  name: "arr",
  props: ["len", "index"],

  data: function () {
    return {};
  },

  methods: {
    turn: function (direction) {
      this.$emit("toTurn", direction);
    },
  },
};
</script>

<style lang="less">
@import "../../../assets/css/cangjianshanzhuang/arr.less";
</style>