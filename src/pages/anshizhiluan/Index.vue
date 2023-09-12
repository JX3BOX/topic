<template>
    <div class="m-index">
        <div class="m-top"></div>
        <!-- 全新副本 -->
        <div class="m-one"></div>
        <!-- 五大场景 -->
        <div class="m-two"></div>
        <!-- 全新门派 -->
        <div class="m-three"></div>
        <!-- 两大玩法 -->
        <div class="m-four"></div>
        <!-- 更多资讯 -->
        <div class="m-five"></div>
    </div>
</template>

<script>
const KEY = "anshizhiluan";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
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
    methods: {
        init() {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                console.log(this.data);
            });
        },
    },
    mounted: function () {
        this.init();
    },
};
</script>

<style lang="less">
@import "../../assets/css/anshizhiluan/index.less";
</style>
