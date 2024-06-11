<template>
    <div class="m-index">
        <div class="m-top"><img class="u-kv p-animations fadeInDown" :src="`${imgPath}/kv.jpg`" /></div>
        <div class="m-excessive">
            <img class="u-img" :src="`${imgPath}/excessive1-l.png`" />
            <img class="u-img" :src="`${imgPath}/excessive1-r.png`" />
            <div class="u-img-line"><img :src="`${imgPath}/excessive-line.png`" /></div>
        </div>
        <!-- 多图切换区 -->
        <div class="m-two">
            <div class="image-group" :class="changeClass" v-for="item in 4" :key="item"
                 v-show="active === item">
                <div class="prev"><img :src="`${imgPath}/${prevIndex}.jpg`" class="p-animations" /></div>
                <div class="cur"><img :src="`${imgPath}/${active}.jpg`" class="p-animations" /></div>
                <div class="next"><img :src="`${imgPath}/${nextIndex}.jpg`" class="p-animations" /></div>
            </div>

            <div class="u-switch">
                <div class="u-round" v-for="item in 4" :key="item" :class="{ solid: active === item }"
                     @click="changeActive(item)"></div>
            </div>
        </div>
        <!-- 分割2 -->
        <div class="m-excessive2">
            <img class="u-img" :src="`${imgPath}/excessive2.png`" />
        </div>
        <!-- 5分区框图 -->
        <div class="m-three">
            <div class="u-main-box">
                <div class="u-video" v-html="video"></div>
            </div>
            <div class="u-five-box">
                <div v-for="(item, index) in boxData"
                     :key="index"
                     @click="chooseImage(index)"
                     class="u-item-box"
                     :class=" boxActive === index ? 'u-item-box-active' : ''">
                    <img class="u-img" :src="`${imgPath}/${item.imageName}`" />
                </div>
                <div class="u-item-box" @click="getMoreVideos">
                    <img class="u-img" :src="`${imgPath}/five-6.png`" />
                </div>
            </div>
        </div>
        <!-- 分割3 -->
        <div class="m-excessive3">
            <img class="u-img" :src="`${imgPath}/excessive3.png`" />
        </div>
        <!-- 攻略 -->
        <div class="m-four">
            <img :src="`${imgPath}/qrcode_index_box.png`" alt />
        </div>
    </div>
</template>

<script>
import el from "element-ui/src/locale/lang/el";

const KEY = "wujie";
import { getTopic } from "@/service/topic";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";

export default {
    name: "Index",
    components: {},
    data: function() {
        return {
            imgPath: __imgPath + "topic/" + KEY,
            active: 1,
            timer: null,
            boxActive: 0,
            prevIndex: 4,
            nextIndex: 2,
            changeFlag: "",
            boxData: [
                {
                    imageName: `five-1.png`,
                    videoUrl: "<iframe src = '//player.bilibili.com/player.html?bvid=BV1vn4y1d7NX' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"
                },
                {
                    imageName: `five-2.png`,
                    videoUrl: "<iframe src = '//player.bilibili.com/player.html?bvid=BV1NS411N74E' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"
                },
                {
                    imageName: `five-3.png`,
                    videoUrl: "<iframe src = '//player.bilibili.com/player.html?bvid=BV1bx4y1J71h' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"
                },
                {
                    imageName: `five-4.png`,
                    videoUrl: "<iframe src = '//player.bilibili.com/player.html?bvid=BV1Nw4m1v77C' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"
                },
                {
                    imageName: `five-5.png`,
                    videoUrl: "<iframe src = '//player.bilibili.com/player.html?bvid=BV1xS411K7MP' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"
                },
            ],
            video: ""
        };
    },
    directives: {
        animate: {
            inserted: function(el, binding) {
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
            unbind: function(el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    computed: {
        data: function() {
            let _data = {};
            this.raw.forEach((item) => {
                if (!_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                _data[item.subtype].push(item);
            });
            return _data;
        },
        changeClass() {
            switch (this.changeFlag) {
                case "up":
                    return "change-image-up";
                case "down":
                    return "change-image-down";
                default:
                    return ""
            }
        },

    },
    watch: {},
    methods: {
        init: function() {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                // this.video = this.data.index_video[0]["link"];
                // this.pve = this.data.index_pve;
                this.video = this.boxData[0].videoUrl
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
        changeActive(index) {
            //动画结束前禁用切换
            if (this.changeFlag !== "") return;
            if (this.active === index) return;
            //点击时先清空计时器
            clearInterval(this.timer);
            if (this.active > index) {
                this.prevIndex = index
                this.changeFlag = "down"
            } else {
                this.nextIndex = index
                this.changeFlag = "up"
            }
            setTimeout(() => {
                this.changeFlag = ""
                this.active = index;
                this.setActiveImage();
                //动画特效结束后，重置计时器
                this.timer = setInterval(() => {
                    this.changeFlag = "up";
                    setTimeout(() => {
                        this.changeFlag = "";
                        if (this.active === 4) {
                            this.active = 1
                        } else this.active++
                        this.setActiveImage()
                    }, 1000);
                }, 5000);
            }, 1000)
        },
        chooseImage(index) {
            this.boxActive = index;
            this.video = this.boxData[index].videoUrl
        },
        getMoreVideos() {
            window.open("https://space.bilibili.com/2066064028")
        },
        setActiveImage() {
            if (this.active === 1) {
                this.prevIndex = 4;
            } else this.prevIndex = this.active - 1;
            if (this.active === 4) {
                this.nextIndex = 1
            } else this.nextIndex = this.active + 1;
        }

    },
    mounted: function() {
        this.init();
        window.addEventListener("mousemove", this.hanldMask);
        this.timer = setInterval(() => {
            this.changeFlag = "up";
            setTimeout(() => {
                this.changeFlag = "";
                if (this.active === 4) {
                    this.active = 1
                } else this.active++
                this.setActiveImage()
            }, 1000);
        }, 5000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
};
</script>

<style lang="less">
@import "~@/assets/css/wujie/index.less";
</style>
