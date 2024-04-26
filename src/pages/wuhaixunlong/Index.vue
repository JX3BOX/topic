<template>
    <div class="m-index">
        <!-- 首屏 -->
        <div class="m-top">
            <video class="u-video" autoplay muted loop>
                <source :src="`${imgPath}/top/top-kv.mp4`" type="video/mp4" />
            </video>
            <div class="m-top__ent p-animation" v-animate="'fadeInDown'">
                <img class="u-text" :src="`${imgPath}/top/text.png`" />
                <img class="u-person" :src="`${imgPath}/top/human.png`" />
                <img class="u-video__play" @click="kvVideoVisible = true" :src="`${imgPath}/top/play.svg`" />
                <img class="u-cloud" :src="`${imgPath}/top/cloud.png`" />
                <img class="u-bg" :src="`${imgPath}/top/bg.png`" />
            </div>
        </div>
        <div class="m-main">
            <img class="u-main__title p-animation" v-animate="'fadeInUp'" :src="`${imgPath}/top/title.png`" />
            <div class="m-one p-animation" v-animate="'fadeInUp'">
                <img class="u-title" :src="`${imgPath}/p1/title.png`" />
                <img class="u-text" :src="`${imgPath}/p1/text.png`" />
                <div class="m-video">
                    <img class="u-video" :src="`${imgPath}/p1/video_border.png`" />
                    <iframe
                        class="u-iframe"
                        src="//player.bilibili.com/player.html?aid=1902832755&bvid=BV1Km41167jZ&cid=1501355857&p=1"
                        scrolling="no"
                        border="0"
                        frameborder="no"
                        framespacing="0"
                        allowfullscreen="true"
                    >
                    </iframe>
                </div>
            </div>
            <div class="m-two">
                <img class="u-title p-animation" v-animate="'fadeInUp'" :src="`${imgPath}/p2/title.png`" />
                <div class="m-level p-animation" v-animate="'fadeInUp'">
                    <img
                        class="u-level"
                        v-for="(item, index) in Array(6)"
                        :src="`${imgPath}/p2/fb/${index}.jpg`"
                        :key="index"
                    />
                </div>
                <iframe
                    class="u-iframe p-animation"
                    v-animate="'fadeInUp'"
                    src="//player.bilibili.com/player.html?aid=1902832755&bvid=BV1Km41167jZ&cid=1501355857&p=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                >
                </iframe>
            </div>
            <div class="m-three p-animation" v-animate="'fadeInUp'">
                <img class="u-title" :src="`${imgPath}/p3/title.png`" />
                <div class="m-tool">
                    <div class="m-tool__item" v-for="(item, index) in boxTool" :key="index">
                        <img class="u-icon" :src="item.img" />
                        <p class="u-label">{{ item.text }}</p>
                    </div>
                </div>
            </div>
            <div class="m-four p-animation" v-animate="'fadeInUp'">
                <img class="u-title" :src="`${imgPath}/p4/title.png`" />
                <img class="u-kv" :src="`${imgPath}/p4/wj_kv.jpg`" />
            </div>
        </div>

        <el-dialog :visible.sync="kvVideoVisible" custom-class="m-diaLog-kv">
            <iframe
                v-if="kvVideoVisible"
                src="//player.bilibili.com/player.html?aid=1603696569&bvid=BV14m421s7m5&cid=1519689219&p=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                class="u-diaLog__video"
            >
            </iframe>
        </el-dialog>
    </div>
</template>

<script>
const KEY = "wuhaixunlong";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            imgPath: __imgPath + "topic/" + KEY,
            kvVideoVisible: false,
            boxTool: [
                {
                    img: __imgPath + "image/box/macro.svg",
                    text: "门派宏库",
                    href: "/macro",
                },
                {
                    img: __imgPath + "image/box/bps.svg",
                    text: "职业攻略",
                    href: "/bps",
                },
                {
                    img: __imgPath + "image/box/fb.svg",
                    text: "副本攻略",
                    href: "/fb",
                },
                {
                    img: __imgPath + "image/box/team.svg",
                    text: "团队平台",
                    href: "/team",
                },
            ],
        };
    },
    directives: {
        animate: {
            inserted: function (el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
                            el.className = binding.value + " " + el.className;
                        }
                        if (binding.addClass) {
                            window.removeEventListener("scroll", binding.addClass);
                        }
                    }
                };
                window.addEventListener("scroll", binding.addClass, true);
                binding.addClass();
            },
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    computed: {},
    watch: {},
    methods: {
        init: function () {},
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init();
    },
};
</script>

<style lang="less">
@import "../../assets/css/wuhaixunlong/index.less";
</style>
