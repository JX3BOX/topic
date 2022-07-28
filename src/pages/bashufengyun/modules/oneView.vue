<template>
    <div class="m-one" :style="{ height }">
        <img class="u-fire p-animation fadeIn" :src="`${img}home_01_fire.png`" />
        <img class="u-txt p-animation fadeIn" :src="`${img}home_01_txt.png`" />
    </div>
</template>
<script>
export default {
    name: "oneView",
    props: ["moduleData"],
    computed: {
        img() {
            return this.moduleData?.img;
        },
        height() {
            return this.moduleData?.height;
        },
    },
};
</script>
<style lang="less">
.m-one {
    .flex;
    .pr;
    align-items: center;
    justify-content: center;
    background-image: url("@{kv_bashufengyun}home_01_bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .u-fire {
        .pa;
        .rb(0);
    }
}
</style>
