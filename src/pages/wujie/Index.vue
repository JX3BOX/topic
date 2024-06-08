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
            <div class="image-group" :class="isChange ? 'change-image' : ''" v-for="item in 4" :key="item" v-show="active == item">
                <div class="prev"><img :src="`${imgPath}/${prevIndex}.jpg`" class="p-animations" /></div>
                <div class="cur"><img :src="`${imgPath}/${active}.jpg`" class="p-animations" /></div>
                <div class="next"><img :src="`${imgPath}/${nextIndex}.jpg`" class="p-animations" /></div>
            </div>

            <div class="u-switch">
                <div class="u-round" v-for="item in 4" :key="item" :class="{ solid: active == item }" @click="active = item"></div>
            </div>
        </div>
        <!-- 分割2 -->
        <div class="m-excessive2">
            <img class="u-img" :src="`${imgPath}/excessive2.png`" />
        </div>
        <!-- 5分区框图 -->
        <div class="m-three">
            <div class="u-main-box">
                <img class="u-img" :src="`${imgPath}/five-1.png`" />
            </div>
            <div class="u-five-box">
                <div class="u-item-box">
                    <img class="u-img" :src="`${imgPath}/five-1.png`" />
                </div>
                <div class="u-item-box"></div>
                <div class="u-item-box"></div>
                <div class="u-item-box"></div>
                <div class="u-item-box"></div>
            </div>
        </div>
        <!-- 分割3 -->
        <div class="m-excessive3">
            <img class="u-img" :src="`${imgPath}/excessive3.png`" />
        </div>
        <!-- 攻略 -->
        <div class="m-four"></div>
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
    data: function () {
        return {
            imgPath: __imgPath + "topic/" + KEY,
            active: 1,
            isChange: false,
            timer: null,
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
        prevIndex() {
            if (this.active == 1) {
                return 4
            } else return  this.active - 1
        },
        nextIndex() {
            if (this.active == 4) {
                return 1
            } else return  this.active + 1
        }
    },
    watch: {},
    methods: {
        init: function () {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                // this.video = this.data.index_video[0]["link"];
                // this.pve = this.data.index_pve;
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
    },
    mounted: function () {
        this.init();
        window.addEventListener("mousemove", this.hanldMask);
        this.timer = setInterval(() => {
            this.isChange = true;
            setTimeout(() => {
                this.isChange = false;
                if (this.active == 4) this.active = 1;
                else this.active ++;
            }, 1000)
        }, 5000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
};
</script>

<style lang="less">
@import "~@/assets/css/wujie/index.less";
</style>
