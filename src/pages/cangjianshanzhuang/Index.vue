<template>
    <div class="m-index">
        <!-- 第一屏 -->
        <div class="m-top">
            <div class="u-title"></div>
            <div class="u-mohe"></div>
        </div>
        <!-- 视频 -->
        <div class="m-video">
            <div class="u-box">
                <div class="u-txtr"></div>
                <div class="u-video" v-html="video"></div>
            </div>
            <div class="u-text"></div>
            <!-- 链接 -->
            <div class="u-btn">
                <a
                    :href="item.link"
                    :target="item.target"
                    v-for="(item, i) in cangjian"
                    :key="i"
                    :class="`u-btn` + (i + 1)"
                ></a>
            </div>
        </div>
        <!-- PVE -->
        <div class="m-pve">
            <div class="u-title"></div>
            <div class="u-box">
                <!-- 切换tab -->
                <div class="u-tab">
                    <span
                        v-for="item in 2"
                        :key="item"
                        :class="[`u-tab` + item, item == tabIndex ? 'active' : '']"
                        @click="changeTab(item)"
                    ></span>
                </div>
                <div class="u-tab-block">
                    <!-- BOSS图片 -->
                    <div class="u-img">
                        <img :src="tabImg" />
                        <a :href="tabImgLink" class="u-more"></a>
                    </div>
                    <!-- 新闻 -->
                    <div class="u-news">
                        <a
                            :href="item.link"
                            target="_blank"
                            class="u-line"
                            v-for="(item, i) in pve"
                            :key="i"
                        >
                            <span class="u-name">{{ item.title }}</span>
                            <span class="u-author">{{ item.author }}</span>
                        </a>
                    </div>
                    <!-- 按钮 -->
                    <div class="u-btnbox">
                        <a
                            v-for="(item, i) in btn"
                            :key="i"
                            :href="item.link"
                            class="u-btn"
                            :class="`u-btn` + (i + 1)"
                            target="_blank"
                        ></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- PVP -->
        <div class="m-pvp">
            <div class="u-title"></div>
            <div class="u-box">
                <div class="u-slogan"></div>
                <div class="u-pvp"></div>
            </div>
        </div>
        <!-- 其它 -->
        <div class="m-other">
            <div class="u-title"></div>
            <div class="u-box">
                <div class="u-more"></div>
            </div>
            <div class="u-logo"></div>
        </div>
        <!-- 全屏叶子 -->
        <div class="m-leaf"></div>
    </div>
</template>

<script>
const KEY = "cangjianshanzhuang";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            cangjian: [
                { name: "藏剑武学", link: "#/cangjian", target: "_self" },
                {
                    name: "藏剑宏库",
                    link: "/macro/#/?subtype=问水诀",
                    target: "_blank",
                },
                {
                    name: "藏剑配装",
                    link: "/pz/#/public?mount=10144",
                    target: "_blank",
                },
                {
                    name: "藏剑攻略",
                    link: "/bps/#/?subtype=问水诀",
                    target: "_blank",
                },
            ],
            video: "",
            tabIndex: 1,
            btn: [
                { name: "新配装器", link: "/pz" },
                { name: "副本掉落", link: "/fb/#/drop?fb_name=荻花宫后山&fb_zlp=风起稻香" },
                { name: "战斗分析", link: "/battle" },
                { name: "团队工具", link: "/team" },
            ],
            pve: [],
            pvebanner: [],
            tabImg: "",
            tabImgLink: "/fb/#/npc?fb_zlp=风起稻香&fb_name=荻花宫后山",
        };
    },
    computed: {
        data: function () {
            let _data = {};
            this.raw.forEach((item) => {
                if (!_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                _data[item.subtype].push(item);
            });
            return _data;
        },
    },
    watch: {},
    methods: {
        init: function () {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                this.video = this.data.index_video[0]["link"];
                this.pve = this.data.index_pve;
                this.pvebanner = this.data.index_pve_banner;
                // this.pvp = this.data.index_pvp;

                this.tabImg = this.pvebanner[0].img;
                this.tabImgLink = this.pvebanner[0].link;
            });
        },
        changeTab(i) {
            this.tabIndex = i;
            i = i - 1;
            this.tabImg = this.pvebanner[i].img;
            this.tabImgLink = this.pvebanner[i].link;
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init();
    },
};
</script>

<style lang="less">
@import "../../assets/css/cangjianshanzhuang/index.less";
</style>