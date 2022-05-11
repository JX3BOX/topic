<template>
    <div class="m-index">
        <!-- 第一屏 -->
        <div class="m-top">
            <div class="u-logo" v-animate="'fadeInDown'"></div>
            <div class="u-mohe" v-animate="'fadeInDown'"></div>
            <div class="u-slogan" v-animate="'fadeIn'"></div>
        </div>

        <!-- 五毒介绍 -->
        <div class="m-one m-module">
            <div class="u-bg" v-animate="'fadeIn'"></div>
            <div class="u-txt" v-animate="'fadeIn'"></div>
            <a :href="`${OriginRoot}bps/#/?subtype=%E6%AF%92%E7%BB%8F`" class="u-logo" v-animate="'fadeIn'"></a>
        </div>
        <!-- 荻花圣殿-->
        <div class="m-two m-module">
            <div class="u-bg" v-animate="'fadeIn'"></div>
            <div class="u-box">
                <div class="u-btn">
                    <a v-for="(item,key) in buttons" :key="key" :href="item.link" target="_blank" :class="`u-${item.name}`" v-animate="item.animate" :style="`background-image: url(${imgPath}${item.key}.png)`"></a>
                </div>
                <div class="u-txt" v-animate="'fadeIn'"></div>
            </div>

        </div>
        <!-- IF剧情-->
        <div class="m-three m-module">
            <div class="u-box">
                <div class="u-bg" v-animate="'fadeIn'"></div>
                <div class="u-man" v-animate="'fadeIn'"></div>
                <div class="u-woman" v-animate="'fadeIn'"></div>
                <div class="u-mark" v-animate="'fadeIn'"></div>
                <div class="u-txt" v-animate="'fadeIn'"></div>
            </div>
        </div>
        <!-- 标题4 更多精彩 -->
        <div class="m-four m-module">
            <div class="u-bg" v-animate="'fadeIn'"></div>
            <div class="u-box">
                <div class="u-more" v-animate="'fadeInDown'"></div>
                <a v-for="(item,key) in more" :key="key" :href="item.link" target="_blank" :class="`u-${item.name}`" v-animate="item.animate" :style="`background-image: url(${imgPath}four_${item.name}.png)`"></a>
            </div>

        </div>
        <!-- 底部logo -->
        <div class="m-bottom" ref="mark">
            <div class="u-logo" v-animate="'fadeIn'"></div>
        </div>
    </div>
</template>

<script>
const KEY = "wuduxianshi";
import { __imgPath, __OriginRoot, __Root } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            OriginRoot: __OriginRoot,
            buttons: [
                {
                    name: "dihua",
                    key: "two_dihua",
                    link: `${__OriginRoot}fb/#/?fb_zlp=%E9%A3%8E%E8%B5%B7%E7%A8%BB%E9%A6%99&fb_name=%E8%8D%BB%E8%8A%B1%E5%9C%A3%E6%AE%BF`,
                    animate: "fadeIn",
                },
                {
                    name: "fuben",
                    key: "btn_fuben",
                    link: `${__OriginRoot}fb/#/?fb_zlp=%E9%A3%8E%E8%B5%B7%E7%A8%BB%E9%A6%99&fb_name=%E8%8D%BB%E8%8A%B1%E5%9C%A3%E6%AE%BF`,
                    animate: "fadeInRight",
                },
                { name: "team", key: "btn_team", link: `${__OriginRoot}team/`, animate: "fadeInRight" },
                {
                    name: "mijing",
                    key: "btn_mijing",
                    link: `${__OriginRoot}fb/#/story?fb_zlp=%E9%A3%8E%E8%B5%B7%E7%A8%BB%E9%A6%99&fb_name=%E8%8D%BB%E8%8A%B1%E5%9C%A3%E6%AE%BF`,
                    animate: "fadeInRight",
                },
                { name: "baiqiang", key: "btn_baiqiang", link: `${__Root}rank/`, animate: "fadeInLeft" },
                { name: "data", key: "btn_data", link: `${__OriginRoot}dbm`, animate: "fadeInLeft" },
                { name: "battle", key: "btn_battle", link: `${__OriginRoot}battle`, animate: "fadeInLeft" },
            ],
            more: [
                { name: "chengwu", link: `${__OriginRoot}notice/40605`, animate: "fadeInRight" },
                { name: "fushi", link: `${__OriginRoot}notice/40601`, animate: "fadeInLeft" },
                { name: "paimai", link: `${__OriginRoot}notice/40604`, animate: "fadeInRight" },
                { name: "guixu", link: `${__OriginRoot}notice/40602`, animate: "fadeInLeft" },
                { name: "xianzonglin", link: `${__Root}fb/31571`, animate: "bounceIn" },
            ],
            imgPath: __imgPath + "topic/wuduxianshi/",
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
        hanldMask(event) {
            let x = -event.clientX / 150;
            let y = -event.clientY / 150;
            if (this.$refs.mark) {
                this.$refs.mark.style.backgroundPositionX = x + "px";
                this.$refs.mark.style.backgroundPositionY = y + "px";
            }
        },
    },
    mounted: function () {
        window.addEventListener("mousemove", this.hanldMask);
    },
};
</script>

<style lang="less">
    @import "../../assets/css/wuduxianshi/index.less";
</style>
