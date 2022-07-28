<template>
    <div class="m-four" :style="{ height }">
        <slider
            class="m-slider"
            :height="height"
            :autoplay="false"
            animation="fade"
            :indicators="false"
            v-model="sliderIndex"
        >
            <slider-item class="u-item" v-for="index in 4" :key="index">
                <template v-if="index == 1">
                    <img :src="`${img}home_04_0${index}.png`" class="u-img p-animation fadeIn" />
                    <img :src="`${img}home_04_txt.png`" class="u-txt p-animation fadeIn" />
                </template>
                <template v-else>
                    <img
                        :src="`${img}home_04_0${index}.png`"
                        class="u-cont p-animation fadeIn"
                        :class="`u-cont-${index}`"
                    />
                </template>
            </slider-item>
        </slider>
    </div>
</template>
<script>
export default {
    name: "fourView",
    props: ["moduleData"],
    data: function () {
        return {
            sliderIndex: 0,
        };
    },
    computed: {
        img() {
            return this.moduleData.img;
        },
        height() {
            return this.moduleData.height;
        },
    },
};
</script>
<style lang="less">
.m-four {
    .h(800px);
    background-image: url("@{kv_bashufengyun}home_04_bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .m-slider {
        .w(100%);
        .u-item {
            .pr;
            .flex;
            align-items: center;
            .u-img{
                height: 100%;
            }
            .u-txt {
                .pa;
                .lt(50%);
                margin: -400px 0 0 -920px;
            }
            .u-num {
                .pa;
                .lt(0);
                .z(-2);
            }
        }
        .u-cont {
            .pa;
            .lt(50%);
            .z(-1);
            &.u-cont-2 {
                margin: -200px 0 0 -527px;
            }
            &.u-cont-3 {
                margin: -400px 0 0 -407px;
            }
            &.u-cont-4 {
                margin: -348px 0 0 -415px;
            }
        }
    }
}
</style>
