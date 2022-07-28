<template>
    <div class="m-one" :style="{ height }">
        <slider
            class="m-slider"
            :height="height"
            width="100%"
            :autoplay="false"
            animation="fade"
            :indicators="false"
            :touch="false"
            v-model="sliderIndex"
        >
            <slider-item class="u-item">
                <img class="u-fire p-animation fadeIn" :src="`${img}home_01_fire.png`" />
                <img class="u-txt p-animation fadeIn" :src="`${img}home_01_txt.png`" />
            </slider-item>
            <slider-item class="u-item">
                <div class="u-video" v-html="video"></div>
            </slider-item>
        </slider>
    </div>
</template>
<script>
export default {
    name: "oneView",
    props: ["moduleData"],
    data: function () {
        return {
            sliderIndex: 0,
        };
    },
    computed: {
        img() {
            return this.moduleData?.img;
        },
        height() {
            return this.moduleData?.height;
        },
        video() {
            return `<iframe src="//player.bilibili.com/player.html?aid=513903294&bvid=BV17g41117o3&cid=786179224&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`;
        },
    },
};
</script>
<style lang="less">
.m-one {
    background-image: url("@{kv_bashufengyun}home_01_bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .m-slider {
        .w(100%);
        .u-item {
            .pr;
            .flex;
            align-items: center;
            justify-content: center;
            .u-fire {
                .pa;
                .rb(0);
            }
            .u-video {
                .size(80%);
                box-sizing: border-box;
                iframe,
                video {
                    .size(100%);
                }
            }
        }
        .slider-btn {
            .lt(50%,0);
            outline: none;
            background: none;
            .slider-icon {
                .size(30px);
                border-left: 6px solid rgba(255, 255, 255, 0.8);
                border-bottom: 6px solid rgba(255, 255, 255, 0.8);
                transition: border 0.2s;
            }
            &.slider-btn-left {
                .ml(-45%);
            }
            &.slider-btn-right {
                .ml(44%);
            }
        }
    }
}
</style>
