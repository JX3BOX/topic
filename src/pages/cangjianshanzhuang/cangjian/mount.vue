<template>
  <div class="m-cangjian-mount">
    <img class="u-txt" :src="img_root + `xinfa_txt.png`" />
    <img class="u-img" :src="img_root + `xinfa.png`" />
  </div>
</template>

<script>
export default {
  name: "mount",
  props: ["img_root"],
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  filters: {},
  created: function () {},
  mounted: function () {},
};
</script>