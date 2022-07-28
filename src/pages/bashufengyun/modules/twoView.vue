<template>
    <div class="m-two" :style="{ height }">
        <slider
            class="m-slider"
            :height="height"
            :autoplay="false"
            animation="fade"
            :indicators="false"
            :touch="false"
            v-model="sliderIndex"
        >
            <slider-item class="u-item" v-for="index in 3" :key="index">
                <img
                    :src="`${img}home_02_0${index}.png`"
                    class="u-img p-animation"
                    :class="index == 1 ? 'fadeInRight' : 'bounceIn'"
                />
                <img
                    :src="`${img}home_02_people.png`"
                    class="u-people p-animation fadeIn"
                    :class="`u-people-${index}`"
                />
            </slider-item>
        </slider>
    </div>
</template>
<script>
export default {
    name: "twoView",
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
        index() {
            return this.moduleData.index;
        },
    },
};
</script>
<style lang="less">
.m-two {
    background-image: url("@{kv_bashufengyun}home_02_bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .m-slider {
        .w(100%);
        .u-item {
            .pr;
            .flex;
            align-items: center;
            .u-people {
                .pa;
                .lb(50%,0);
                .z(-1);
                &.u-people-1 {
                    .ml(-896px);
                }
                &.u-people-2 {
                    .ml(-260px);
                }
                &.u-people-3 {
                    .ml(-260px);
                }
            }
        }
        .slider-btn {
            outline: none;
            .lt(50%,0);
            background: none;
            .slider-icon {
                .size(30px);
                border-left: 6px solid rgba(255, 255, 255, 0.8);
                border-bottom: 6px solid rgba(255, 255, 255, 0.8);
                transition: border 0.2s;
            }
            &.slider-btn-left {
                .ml(-40%);
            }
            &.slider-btn-right {
                .ml(40%);
            }
        }
    }
}
</style>
