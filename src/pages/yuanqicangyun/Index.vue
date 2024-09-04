<template>
    < class="m-index">
        <!-- logo -->
        <div class="m-logo p-animation" v-animate="'fadeInDown'">
            <img :src="imgurl + '0top/logo.png'" width="100%" />
        </div>
        <div class="m-top-banner p-animation" v-animate="'fadeInDown'">
            <img :src="imgurl + '0top/Slogan.png'" width="100%" />
        </div>
        <!-- 权益部分 -->
        <div class="m-equities">
            <div class="u-box">
                <img :src="imgurl + '0top/qymd.png'" width="100%" />
                <img :src="imgurl + '0top/fz.png'" class="u-img" />
                <div class="u-text-1">一次买断·终身受益大幅</div>
                <div class="u-text-2">提高日常收益自由交易无忧畅玩</div>
            </div>
        </div>
        <!-- 全新门派 -->
        <div class="m-new-sect">
            <div class="m-classify">
                <img :src="imgurl + '1menpai/1xmp.png'" />
            </div>
            <img :src="imgurl + '1menpai/cylh.png'" class="u-cylh" />
            <div class="u-content">
                <img :src="imgurl + '1menpai/mpts.png'" class="u-mpts" />
                <div class="u-text">
                    新门派「苍云」具有擎刀、擎盾多体态的输出形式、攻防兼备，有较强输出压制能力的同时，兼具控制与防守能力。使用全新镇派系统，苍云侠士需取舍关键层镇派来构建缘起专属武学体系，灵活搭配以探索克敌之道。
                </div>
                <img :src="imgurl + '1menpai/xf-1.png'" class="u-tg" />
                <img :src="imgurl + '1menpai/xf-4.png'" class="u-fs" />
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "yuanqicangyun";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            imgurl: "https://img.jx3box.com/topic/yuanqicangyun/",
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

                binding.addClass();
            },
            unbind: function (el, binding) {},
        },
    },
    computed: {},
    watch: {},
    methods: {
        mouseover(val) {
            // console.log(val)
            // this.navActive=this.navActive+','+val
            this.mouseoverActive = val;
        },
        mouseout() {
            // console.log('likai')
            this.mouseoverActive = null;
        },
        init: function () {
            getTopic(KEY).then((res) => {
                console.log(res);
            });
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/yuanqicangyun/index.less";
</style>
