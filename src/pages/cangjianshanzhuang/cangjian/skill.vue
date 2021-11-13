<template>
  <div class="m-cangjian-skill">
    <img class="u-txt" :src="img_root + `zhenpai_txt.png`" />
    <img class="u-img" :src="img_root + `zhenpai.png`" />
  </div>
</template>

<script>
export default {
  name: "skill",
  props: ["img_root"],
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
};
</script>