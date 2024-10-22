<template>
    <div class="container">
        <!-- 主横幅 -->
        <section class="banner">
            <img class="banner__logo" :src="buildImgUrl('bg/banner__title.png')" alt="丝路风语" />
        </section>
        <!-- 剧情推进模块 -->
        <section class="story-progress">
            <!-- 包裹图片和叠加文本 -->
            <div class="story-progress__content">
                <!-- 在图片上叠加的文本 -->
                <div class="story-progress__text">
                    <h2 class="u-title">剧情推进</h2>
                    <p class="u-desc">
                        振武军探得史朝义已派特使潜入回鹘，另一边吐蕃频扰河西，甚至已取得丝绸之路南道的主导权。九天深感西域的动向将直接影响大唐与周边民族的格局，可如今的大唐岌岌可危，西域形势更是扑朔迷离。
                    </p>
                </div>
            </div>
        </section>
        <!--pr1  资料片速览 -->
        <section class="rsc-overview">
            <div class="rsc-overview__content m-section">
                <block-title :order="1"></block-title>

                <ul class="expansion-overview__list">
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u1.png')" alt="新地图" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u2.png')" alt="新门派" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u3.png')" alt="新副本" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u4.png')" alt="颜值优化" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u5.png')" alt="引擎升级" class="expansion-overview__image" />
                    </li>
                </ul>
            </div>
        </section>

        <!-- p2 -->
        <section class="new-map">
            <div class="new-map__content m-section">
                <!-- 标题模块 -->
                <block-title :order="2" class="new-map__title"></block-title>

                <!-- 轮播的主图和文本 -->
                <mapshow class="new-map__pics"></mapshow>
            </div>
        </section>

        <!-- p3 -->
        <section class="new-sec">
            <block-title :order="3" class="block-title3"></block-title>
            <div class="new-sec_content m-section">
                <div class="new-sec__text">
                    <h3 class="u-title">段式</h3>
                    <p class="u-desc">
                        <span>苍山雪覆衡门外 洱月观花倦尘嚣</span>
                        <span>世第含章远逐鹿 周天风劲予逍遥</span>
                    </p>
                    <div class="new-sec__textP">
                        <p class="u-desc1">
                            段氏自春秋时期兴起，跟随历史的步伐南迁，在滇中一带扩张自己的家族势力。为求自保，段氏号召族中弟子习武，在融天岭修建了气势恢宏的大理宫、天龙寺与神剑宫，逐步成为西南豪门。
                        </p>
                        <p class="u-desc2">
                            天宝年间，作为南诏第一武林世家的段氏，被迫卷入南诏王与大唐的纷争中，而南诏皇宫一役却让段氏一族的命运有了新的转机。随着南诏皇宫阁罗凤打压中原武林的计划失败，段氏与南诏皇室间的矛盾显露，但这反而使得段氏家族内部的信念开始统一。
                        </p>
                        <p class="u-desc3">
                            南诏会武后，段氏家主段慎思，以退为进，宣布退任家主之位，并选擢新任家主，试图用此举将段氏彻底从南诏、吐蕃和大唐之间的斗争中摘除。而原本位于融天岭的大理宫，也迁居至洱海，正式更名为大理山庄。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- p4 -->
        <section class="duanshi">
            <block-title :order="4" class="block-title4"></block-title>

            <div class="duanshi__content m-section">
                <!-- 菜单导航栏 -->
                <ul class="duanshi__nav">
                    <li
                        v-for="item in duanshi"
                        :key="item.key"
                        class="u-tab"
                        :class="{ active: activeTab === item.key }"
                        @click="activeTab = item.key"
                    >
                        <img :src="buildTabImgUrl(item.key)" class="u-img" />
                    </li>
                </ul>

                <!-- 内容 -->
                <div class="duanshi__primary">
                    <DS
                        class="u-content"
                        v-for="(item, i) in duanshi"
                        :key="i"
                        :pics="item.pics"
                        :class="{ active: activeTab === item.key }"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BlockTitle from "./components/title.vue";
import Mapshow from "./components/mapshow.vue";
import DS from "./components/duanshi.vue";

export default {
    name: "Index",
    components: {
        BlockTitle,
        Mapshow,
        DS,
    },
    inject: ["__imgRoot"],
    data() {
        return {
            currentIndex: 0, // 当前轮播索引
            activeTab: "wuxue", // 当前激活的选项卡
            duanshi: [
                { key: "wuxue", label: "武学", pics: ["004/content/wuxue_1.png"] },
                { key: "xiaofu", label: "校服", pics: ["004/content/xiaofu_1.png", "004/content/xiaofu_2.png"] },
                {
                    key: "changjing",
                    label: "场景",
                    pics: ["004/content/changjing_1.png", "004/content/changjing_2.png"],
                },
                { key: "genchong", label: "跟宠", pics: ["004/content/pet.png"] },
                { key: "qunxiang", label: "群像", pics: ["004/content/photo_1.png", "004/content/photo_2.png"] },
                {
                    key: "wuqi",
                    label: "武器",
                    pics: ["004/content/weapon_1.png", "004/content/weapon_2.png", "004/content/weapon_3.png"],
                },
            ],
            active: 0,
            timer: null,
            videoList: [],
            video: "",
            boxActive: 0,
        };
    },
    computed: {
        currentImage() {
            return this.buildImgUrl(this.images[this.currentIndex]);
        },
        currentTitle() {
            return this.titles[this.currentIndex];
        },
        currentDescription() {
            return this.descriptions[this.currentIndex];
        },
        data() {
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
    mounted() {
        this.startCarousel();
        this.init();
        window.addEventListener("mousemove", this.hanldMask);
    },
    methods: {
        buildTabImgUrl(tab) {
            const imgUrl = this.activeTab === tab ? tab + "_active" : tab;
            return this.buildImgUrl(`004/pr4tab/${imgUrl}.png`);
        },

        buildImgUrl(path) {
            return `${this.__imgRoot}${path}`;
        },
        startCarousel() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 15000); // 每15秒切换一次
        },
        init() {
            // 你的初始化逻辑
        },
        hanldMask(event) {
            let x = -event.clientX / 150;
            let y = -event.clientY / 150;
            if (this.$refs.mark) {
                this.$refs.mark.style.backgroundPositionX = x + "px";
                this.$refs.mark.style.backgroundPositionY = y + "px";
            }
        },
        imgChange(index) {
            this.active = index;
        },
        setActiveImg(index) {
            this.$refs.imgCarousel.setActiveItem(index);
        },
        chooseImage(index) {
            this.boxActive = index;
            this.video = this.videoList[index].link;
        },
        getMoreVideos() {
            window.open("https://space.bilibili.com/2066064028");
        },
    },
    directives: {
        animate: {
            inserted(el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (!el.className.includes(binding.value)) {
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
            unbind(el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/silufengyu/index.less";
</style>
