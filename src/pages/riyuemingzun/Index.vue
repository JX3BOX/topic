<template>
    <div class="m-index">
        <!-- KV -->
        <div class="m-top"></div>
        <!--P1-->
        <div class="m-one" ref="m-one">
            <div class="u-title p-animation" v-animate="'fadeInDown'"></div>
            <div class="u-nav p-animation" v-animate="'fadeInDown'" v-for="(item, key) in p1nav" :key="key">
                <img :src="imgurl + 'p1/' + item.imgurl" v-animate="'p-animation fadeInDown'">
            </div>
        </div>
        <!--P2-->
        <div class="m-two" ref="m-two">
            <div class="m-skill p-animation">
                <a href="" class="u-button">
                    <span class="u-text">立即查看</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'// 引入slider组件
const KEY = "riyuemingzun";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    props: [],
    components: {
        // slider,
        // slideritem
    },
    data: function () {
        return {
            navStyle: { 'display': 'none' },
            navActive: 1,
            mouseoverActive: null, //导航鼠标经过事件
            isMobile: navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),
            imgurl: "https://img.jx3box.com/topic/riyuemingzun/",
            sliderinit: {
                currentPage: 0,//当前页码
                effect: 'nest',
                thresholdDistance: 100,//滑动判定距离
                thresholdTime: 100,//滑动判定时间
                loop: true,//循环滚动
                infinite: 1,//无限滚动前后遍历数
                slidesToScroll: 1,//每次滑动项数
                pagination: false
            },
            p1nav: [
                { imgurl: "p1-nav1.png", name: "" },
                { imgurl: "p1-nav2.png", name: "" },
                { imgurl: "p1-nav3.png", name: "" },
                { imgurl: "p1-nav4.png", name: "" },
                { imgurl: "p1-nav5.png", name: "" },
                { imgurl: "p1-nav6.png", name: "" },
                { imgurl: "p1-nav7.png", name: "" },
                { imgurl: "p1-nav8.png", name: "" }
            ]
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
                this.video = this.data.index_video[0]["link"];
                this.pve = this.data.index_pve;
                this.pvebanner = this.data.index_pve_banner;
                this.more = this.data.index_more || [];

                this.tabImg = this.pvebanner[0].img;
                this.tabImgLink = this.pvebanner[0].link;
            });
        },
        slide(v) {
            // console.log(v)
            this.pve_present = v.currentPage
        },
        toastMsg() {
            alert('敬请期待')
        }
    },
    filters: {},
    created: function () { },
    mounted: function () {
        // this.init();
        window.addEventListener("mousemove", this.hanldMask);
        window.addEventListener('scroll', this.setNav);
    },
};
</script>

<style lang="less">
@import "../../assets/css/riyuemingzun/index.less";
</style>
