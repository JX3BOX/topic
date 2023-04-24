<template>
    <div class="m-index">
        <!--KV头部背景-->
        <div class="m-top m-jump">
            <div class="u-logo"></div>
        </div>
        <!--p1技改-->
        <div class="m-one m-jump">
            <a class="m-link  p-animation" target="_blank" v-animate="'fadeInRight'">
                <i class="u-play"></i>
            </a>
        </div>
        <!--p2副本-->
        <div class="m-two m-jump">
            <div class="u-title p-animation" v-animate="'fadeInDown'"></div>
            <div class="m-group p-animation" v-animate="'fadeInDown'">
                <div class="u-boss u-sf-on"></div>
                <div v-for="(boss, key) in fb.wyhl.boss" :key="key" :class="'u-boss u-' + boss.index + '-off'"></div>
                <div class="u-profile u-profile-sf"></div>
            </div>
            <div class="u-text u-text-sf p-animation" v-animate="'fadeInDown'"></div>
            <div class="u-subtitle p-animation" v-animate="'fadeInDown'"></div>
            <div class="m-links p-animation" v-animate="'fadeInDown'">
                <div class="m-btnGroup">
                    <a v-for="(btn, key) in fb.links" :key="key" :class="'u-button u-' + btn.icon" :href="btn.url"
                        target="_blank"></a>
                </div>
            </div>
        </div>
        <!--p3百强-->
        <div class="m-three m-jump p-animation" v-animate="'fadeInDown'">
            <div class="u-logo"></div>
            <a href="https://www.jx3box.com/jdt/7th/rank?server=&achieve_id=10907" class="u-button" target="_blank"></a>
        </div>
        <!--p4-->
        <div class="m-four m-jump">

        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'// 引入slider组件
import { showMountIcon } from "@jx3box/jx3box-common/js/utils";//引入心法图标
const KEY = "qunxiawanbian";
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
            imgurl: "https://img.jx3box.com/topic/qunxiawanbian/",
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
            fb: {
                wyhl: {
                    name: "武狱黑牢",
                    boss: [
                        {
                            name: "时风",
                            index: "sf"
                        },
                        {
                            name: "乐临川",
                            index: "ylc"
                        },
                        {
                            name: "牛波",
                            index: "nb"
                        },
                        {
                            name: "和正",
                            index: "hz"
                        },
                        {
                            name: "武云阙",
                            index: "wyq"
                        },
                        {
                            name: "解兰舟",
                            index: "xlz"
                        },
                        {
                            name: "翁幼之",
                            index: "wyz"
                        },
                    ]

                },
                links: [
                    {
                        name: "武狱黑牢攻略",
                        url: "https://www.jx3box.com/fb/?fb_name=%E6%AD%A6%E7%8B%B1%E9%BB%91%E7%89%A2",
                        icon: "btn4"
                    },
                    {
                        name: "门派宏库",
                        url: "https://www.jx3box.com/macro/",
                        icon: "btn2"
                    }, {
                        name: "团队平台",
                        url: "https://www.jx3box.com/team/",
                        icon: "btn1"
                    }, {
                        name: "鹿桥驿攻略",
                        url: "https://www.jx3box.com/fb/?fb_name=%E9%B9%BF%E6%A1%A5%E9%A9%BF",
                        icon: "btn3"
                    }

                ]
            }
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
        },
        showMountIcon,
        goAnchor(index) {
            // 用 class="m-jump" 添加锚点
            let jump = document.querySelectorAll('.m-jump');
            let total = jump[index].offsetTop
            console.log(total)
            if (index == 0) {
                total = 0
            }
            let distance = document.documentElement.scrollTop || document.body.scrollTop
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            let step = total / 50
            if (total > distance) {
                smoothDown()
            } else {
                let newTotal = distance - total
                step = newTotal / 50
                smoothUp()
            }
            function smoothDown() {
                if (distance < total) {
                    distance += step
                    document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothDown, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            }
            function smoothUp() {
                if (distance > total) {
                    distance -= step
                    document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothUp, 10)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            }

        },
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
@import "../../assets/css/qunxiawanbian/index.less";
</style>
