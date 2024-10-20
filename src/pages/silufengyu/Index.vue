<template>
    <!-- <div class="container"></div> -->

    <div>
        <!-- 主横幅 - 丝路风雨 -->
        <section class="banner">
            <div class="banner__content">
                <img src="/tmp/bg//banner__title.png" alt="丝路风雨" class="title-image" />
            </div>
        </section>

        <!-- 剧情推进模块 -->

        <section class="story-progress">
            <div class="story-progress__content">
                <!-- 包裹图片和叠加文本 -->
                <div class="story-progress__image-wrapper">
                    <img src="/tmp/bg/story-progress__img.png" alt="剧情推进" class="story-progress__image" />
                    <!-- 在图片上叠加的文本 -->
                    <div class="story-progress__text-overlay">
                        <h2>剧情推进</h2>
                        <p>
                            振武军探得史朝义已派特使潜入回鹘，另一边吐蕃频扰河西，甚至已取得丝绸之路南道的主导权。九天深感西域的动向将直接影响大唐与周边民族的格局，可如今的大唐岌岌可危，西域形势更是扑朔迷离。
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--pr1  资料片速览 -->
        <section class="rsc-overview">
            <div class="rsc-overview__content m-section">
                <!-- 包裹图片和叠加文本 -->
                <div class="expansion-overview__title">
                    <img src="/tmp/title/title1.png" alt="01" class="rsc-overview__title" />
                    <img src="/tmp/subtitle/subtitle1.png" alt="资料片预览" class="rsc-overview__subtitle" />
                </div>
                <section class="expansion-overview">
                    <ul class="expansion-overview__list">
                        <li class="expansion-overview__item">
                            <img src="/tmp/001/pr1u1.png" alt="新地图" class="expansion-overview__image" />
                        </li>
                        <li class="expansion-overview__item">
                            <img src="/tmp/001/pr1u2.png" alt="新门派" class="expansion-overview__image" />
                        </li>
                        <li class="expansion-overview__item">
                            <img src="/tmp/001/pr1u3.png" alt="新副本" class="expansion-overview__image" />
                        </li>
                        <li class="expansion-overview__item">
                            <img src="/tmp/001/pr1u4.png" alt="颜值优化" class="expansion-overview__image" />
                        </li>
                        <li class="expansion-overview__item">
                            <img src="/tmp/001/pr1u5.png" alt="引擎升级" class="expansion-overview__image" />
                        </li>
                    </ul>
                </section>

                <!-- 在图片上叠加的文本 -->
            </div>
        </section>
    </div>
</template>

<script>
const KEY = "wujie";
import { getTopic } from "@/service/topic";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";

export default {
    name: "Index",
    components: {},
    data: function () {
        return {
            imgPath: __imgPath + "topic/" + KEY,
            active: 0,
            timer: null,
            videoList: [],
            video: "",
            boxActive: 0,
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
                this.videoList = this.data.video;
                this.chooseImage(0);
            });
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
    mounted: function () {
        this.init();
        window.addEventListener("mousemove", this.hanldMask);
    },
};
</script>

<style lang="less">
@import "~@/assets/css/silufengyu/index.less";
</style>
