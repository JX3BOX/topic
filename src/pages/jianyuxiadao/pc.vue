<template>
    <div class="m-box">
        <div class="m-index">
            <!-- 第一屏 -->
            <div class="m-p1 p-animation fadeIn">
                <div class="wp">
                    <div class="m-title">
                        <img :src="imgurl + 'jyxd.png'" class="p-animation fadeIn" />
                        <div class="u-ljcq p-animation fadeIn">
                            <a href="#p2">
                                <img :src="imgurl + 'ljxq.png'" class="u-img" />
                            </a>
                        </div>
                    </div>
                    <div class="m-tips p-animation fadeIn">
                        注：本桌游建议5-10人参与游戏，建议使用Excel或记录纸，以获得更好的游戏体验。<br />
                        本桌游虽由魔盒百强赛奖励20面骰子而生，但并不强制要求使用同骰子。
                    </div>
                    <div class="m-qrcode">
                        <img :src="imgurl + 'qrcode.jpg'" />
                    </div>
                </div>
            </div>
            <!-- 第二屏 -->
            <div class="m-txt p-animation fadeIn" id="p2">
                <div class="wp">
                    <h2>{{ play.zongshu.title }}</h2>
                    <span class="u-txt" v-for="item in play.zongshu.content" :key="item">➢ {{ item }}</span>

                    <h2>{{ play.juese.title }}</h2>
                    <span class="u-txt" v-for="item in play.juese.content" :key="item">● {{ item }}</span>

                    <div class="m-img">
                        <img :src="imgurl + 'p-1.png'" class="u-img" />
                        <img :src="imgurl + 'p-2.png'" class="u-img" />
                    </div>
                </div>
            </div>

            <!-- 第三屏 -->
            <div class="m-txt p-animation fadeIn">
                <div class="wp">
                    <h2>{{ play.shuxing.title }}</h2>
                    <span class="u-txt" v-for="item in play.shuxing.content" :key="item">✧ {{ item }}</span>
                    <div class="m-img">
                        <img :src="imgurl + 'p-3.png'" class="u-img" />
                        <img :src="imgurl + 'p-4.png'" class="u-img" />
                    </div>
                </div>
            </div>
            <!-- 第四屏 -->
            <div class="m-txt p-animation fadeIn">
                <div class="wp">
                    <h2>{{ play.youli.title }}</h2>
                    <span class="u-txt" v-for="item in play.youli.content" :key="item">❋ {{ item }}</span>
                    <img :src="imgurl + 'p-5.png'" class="u-img" />
                </div>
            </div>
            <!-- 第六屏 -->
            <div class="m-txt p-animation fadeIn">
                <div class="wp">
                    <h2>玩法说明</h2>
                    <span class="u-txt"> {{ play.kapai.info }} </span>
                    <h3>{{ play.kapai.putong.title }}</h3>
                    <span class="u-txt" v-for="item in play.kapai.putong.content" :key="item">{{ item }}</span>
                    <h3>{{ play.kapai.jueze.title }}</h3>
                    <span class="u-txt" v-for="item in play.kapai.jueze.content" :key="item">{{ item }}</span>
                    <h3>{{ play.kapai.teshu.title }}</h3>
                    <span class="u-txt" v-for="item in play.kapai.teshu.content" :key="item">{{ item }}</span>
                </div>
            </div>
            <!-- 第七屏 -->
            <div class="m-p4 p-animation fadeIn">
                <div class="m-p4-title">
                    <img :src="imgurl + 'jyxd.png'" class="p-animation fadeIn" />
                    <div class="u-btn p-animation fadeIn">
                        <img :src="imgurl + 'download.png'" @click="toastMsg" />
                        <span class="u-text" @click="goHome">返回顶部</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "jianyuxiadao";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import play from "@/assets/data/dnd.json";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            imgurl: __imgPath + "/topic/jianyuxiadao/",
            play,
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
        goHome() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        toastMsg() {
            alert("百强结榜后放出，敬请期待");
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        // this.init();
    },
};
</script>
<style lang="less">
@import "../../assets/css/jianyuxiadao/index.less";
</style>
