<template>
    <div class="m-navigation">
        <!-- 第一屏 -->
        <div class="m-first p-animation">
            <div class="u-bg-line p-animation" :class="logoAnimation"></div>
            <div class="u-navigation">
                <span class="u-button u-std p-animation" :class="stdAnimation" @click="goList('std')"></span>
                <span class="u-logo p-animation" :class="logoAnimation"></span>
                <span class="u-button u-origin p-animation" :class="originAnimation" @click="goList('origin')"></span>
            </div>
        </div>
        <!-- 点击后显示第二屏 -->
        <div class="m-list p-animation" :class="[listShow, client]">
            <div class="m-content">
                <div class="u-list-client" v-if="client == 'std'">
                    <span class="u-button u-std" @click="goFirst"></span>
                </div>
                <div class="m-scroll" v-dragscroll>
                    <div class="u-item" v-for="(item, i) in list" :key="i">
                        <div class="u-list">
                            <a :href="item.link" target="_blank" class="u-link"><img :src="showImg(item.key)" /></a>
                            <img src="../../assets/img/home/circle.png" />
                            <span class="u-title">{{ item.name || "未知" }}</span>
                            <span class="u-time">{{ item.year || " " }}</span>
                            <span class="u-date">{{ item.date || " " }}</span>
                        </div>
                        <div class="u-line"></div>
                    </div>
                </div>
                <div class="u-list-client" v-if="client == 'origin'">
                    <span class="u-button u-origin" @click="goFirst"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { std, origin } from "@/assets/data/topic.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Index",
    data: function () {
        return {
            loading: false,
            stdAnimation: "",
            logoAnimation: "",
            originAnimation: "",
            firstAnimation: "",
            listShow: "",
            client: "",
        };
    },
    computed: {
        list() {
            let _list = this.client == "std" ? std : origin;
            return _list.concat({});
        },
    },
    watch: {},
    methods: {
        goList(type) {
            if (type == "std") {
                this.stdAnimation = "fadeOutLeft";
                this.logoAnimation = "fadeOut";
                this.originAnimation = "fadeOut";
                this.client = "std";
            } else {
                this.stdAnimation = "fadeOut";
                this.logoAnimation = "fadeOut";
                this.originAnimation = "fadeOutRight";
                this.client = "origin";
            }
            setTimeout(() => {
                this.listShow = "show fadeIn";
            }, 500);
        },
        goFirst() {
            this.listShow = "fadeOut";
            setTimeout(() => {
                if (this.client == "std") {
                    this.stdAnimation = "fadeInLeftBig";
                    this.logoAnimation = "fadeIn";
                    this.originAnimation = "fadeIn";
                } else {
                    this.stdAnimation = "fadeIn";
                    this.logoAnimation = "fadeIn";
                    this.originAnimation = "fadeInRightBig";
                }
            }, 500);
        },
        showImg(key) {
            if (!key) key = "normal";
            return __imgPath + "topic/index/" + key + ".png";
        },
    },
    created: function () {},
    mounted: function () {},
    destroyed() {},
};
</script>
<style lang="less">
@import "~@/assets/css/common/animation.less";
@import "~@/assets/css/index/navigation.less";
</style>
