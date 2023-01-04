<template>
    <div class="m-index">
        <!-- 第一屏：人物&标题 -->
        <div class="m-first m-screen">
            <div class="people"></div>
            <div class="title pa"></div>
            <div class="fish-1 pa"></div>
        </div>
        <!-- 第二屏：视频&鱼 -->
        <div class="m-two m-screen">
            <div class="u-title pa">序</div>
            <div class="video pa"></div>
            <div class="lantern pa"></div>
            <div class="fish-2 pa"></div>
        </div>
        <!-- 第三屏：门派 -->
        <div class="m-three m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>01</b></span>
                <span class="value">侠</span>
            </div>
            <div class="m-content pa">
                <div class="mark"></div>
            </div>
            <div class="m-name pa"></div>
        </div>
    </div>
</template>

<script>
const KEY = "welcome";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    inject: ["__imgRoot"],
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
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/welcome/index.less";
</style>
