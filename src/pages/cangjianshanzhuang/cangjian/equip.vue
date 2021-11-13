<template>
  <div class="m-cangjian-equip">
    <img class="u-img1" :src="img_root + `jianming.png`" />
    <img class="u-img2" :src="img_root + `yanyu.png`" />
  </div>
</template>

<script>
export default {
  name: "equip",
  props: ["img_root"],
  components: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>