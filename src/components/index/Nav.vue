<template>
    <div class="m-topic-nav" :class="`${bg}-box`">
        <img class="m-logo p-animations" :class="[animation ? 'fadeInLeft' : '', screenWidth < 1600 ? 'small' : '']" :src="logoImg" :alt="bg" srcset="" />
        <img class="m-bg p-animations" :class="animation ? 'fadeInHalf' : ''" :src="boxBG" :alt="bg" srcset="" />
        <div class="m-tabs">
            <img class="m-people p-animations" :class="[animation ? 'fadeInRight' : '', bg]" :src="peopleImg" alt="人物" srcset="" />
            <div class="u-tab">
                <span :class="[item.key == key ? 'active' : '', screenWidth < 1600 ? 'small' : '']" v-for="(item, index) in tabs" :key="index" @click="changeTabs(index)">{{ item.name }}</span>
            </div>
            <div class="u-tabBox">
                <div class="u-box" v-for="(item, index) in topic" :key="index">
                    <template v-if="item.client == key">
                        <a :href="toTopic(img)" target="_blank" class="u-link" v-for="img in item.server" :key="img" :style="imgStyle(img)" @mouseenter="enter(img)"></a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "demo",
    data: function() {
        return {
            tabs: [
                { key: "all", name: "全部", bg: "cangjianshanzhuang" },
                { key: "std", name: "正式服", bg: "beitianyaozong" },
                { key: "origin", name: "怀旧服", bg: "cangjianshanzhuang" },
            ],
            topic: [
                { client: "all", server: ["cangjianshanzhuang", "beitianyaozong"] },
                { client: "std", server: ["beitianyaozong"] },
                { client: "origin", server: ["cangjianshanzhuang"] },
            ],
            bg: "cangjianshanzhuang",
            key: "all",
            animation: true,
            screenWidth: document.body.clientWidth,
            showing: false,
        };
    },
    computed: {
        boxBG: function() {
            return __imgPath + "image/topic/" + this.bg + "_bg.jpg";
        },
        logoImg: function() {
            return __imgPath + "image/topic/" + this.bg + "_logo.png";
        },
        peopleImg: function() {
            return __imgPath + "image/topic/" + this.bg + "_people.png";
        },
    },

    methods: {
        // 切换tabs
        changeTabs(index) {
            this.bg = this.tabs[index].bg;
            this.key = this.tabs[index].key;
            this.showAnimation();
        },
        imgStyle(img) {
            return this.screenWidth < 1600
                ? {
                      backgroundImage: "url(" + __imgPath + "image/topic/" + img + "_smalltab.jpg)",
                  }
                : {
                      backgroundImage: "url(" + __imgPath + "image/topic/" + img + "_bigtab.jpg)",
                  };
        },
        // 跳转
        toTopic(key) {
            return "/topic/" + key;
        },
        // 动画效果
        showAnimation() {
            this.animation = false;
            setTimeout(() => {
                this.animation = true;
            }, 10);
        },
        // 鼠标移入
        enter(img) {
            if (this.bg !== img) {
                this.bg = img;
                this.showAnimation();
            }
        },
    },
    watch: {
        screenWidth: {
            handler: function(val) {
                this.screenWidth = val;
            },
            immediate: true,
        },
    },
    created: function() {},
    mounted() {
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/index/nav.less";
</style>
