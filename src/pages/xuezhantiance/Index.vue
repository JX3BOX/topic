<template>
    <div class="m-index">
        <div class="m-layout">
            <div class="m-top">
                <img class="m-top-retouch" src="./img/top-bg-retouch.png" alt="" />
                <div class="m-top-other-img m-index">
                    <img class="m-top-author" src="./img/top-author.png" alt="" />
                    <div class="m-top-main">
                        <img class="m-top-title" src="./img/top-title.png" alt="" />
                        <img class="m-top-title-tip" src="./img/top-title-tip.png" alt="" />
                        <img class="m-top-jump__icon" src="./img/top-jump-icon.png" alt="" />
                    </div>
                </div>
            </div>
            <!-- 血战天策 -->
            <div class="m-one">
                <img class="m-plate-img" src="./img/p1/title.png" alt="" />
                <div class="m-one-text">
                    <p>史诗级“血战天策”战役将在战乱后的天策府打响，</p>
                    <p>乱世中英勇侠士们与狼牙军的巅峰对决即将上演!</p>
                    <p>护城河已被鲜血染红，</p>
                    <p>再现乱世大唐众侠与安禄山为首的狼牙军之间的终极对决!</p>
                </div>
                <div class="m-boss-list">
                    <div class="m-item">
                        <img class="m-item-bg" src="./img/p1/BOSS-bg.png" alt="" />
                        <img class="m-item-boss__icon" src="./img/p1/b-xsy.png" alt="" />
                        <span class="m-item-boss__name">席庶云</span>
                        <span></span>
                        <span class="m-item-boss__brief">在守住城门一段时间后，席庶云就会出现</span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item m-item__left">
                        <img class="m-item-bg" src="./img/p1/BOSS-bg.png" alt="" />
                        <img class="m-item-boss__icon" src="./img/p1/g-gstcf.png" alt="" />
                        <span class="m-item-boss__name"></span>
                        <span class="m-item-boss__level">关卡：固守天策府</span>
                        <span class="m-item-boss__brief">阻止狼牙士兵的进攻，为攻城部队赢取时间</span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 镇派新结构 -->
            <div class="m-two"></div>
            <!-- 新装备获取 -->
            <div class="m-three"></div>
            <!-- 养成系新奇遇 -->
            <div class="m-four"></div>
            <!-- 师徒系统更新 -->
            <div class="m-five"></div>
            <!-- 随心置顶 -->
            <div class="m-six"></div>
            <!-- 系统更便捷 -->
            <div class="m-seven"></div>
        </div>
    </div>
</template>

<script>
const KEY = "xuezhantiance";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    components: {},
    data: function () {
        return {};
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
    },
};
</script>

<style lang="less">
@import "~@/assets/css/xuezhantiance/index.less";
</style>
